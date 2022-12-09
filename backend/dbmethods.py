import psycopg2


class dbmethods:
    def __init__(self):
        # Comment the lines below if not using docker eg dev environment
        self.connection = psycopg2.connect(
            database="cse312_project", user="root", password="", host="localhost", port="5432")

        # Comment the line below if using docker eg prod environment
        # self.connection = psycopg2.connect(
        #     database="cse312_project", user="root", password="password", host="postgres", port="5432")

        self.cur = self.connection.cursor()

    def createCompany(self, companyName, companyEmail, username, hashedPass):
        self.cur.execute(
            '''CREATE TABLE IF NOT EXISTS company (companyName VARCHAR(255), companyEmail VARCHAR(255), username VARCHAR(255), password VARCHAR(255))''')
        self.cur.execute(
            '''INSERT INTO company (companyName, companyEmail, username, password) VALUES (%s, %s, %s, %s)''', (companyName, companyEmail, username, hashedPass))
        self.connection.commit()
