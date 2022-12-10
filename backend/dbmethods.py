import psycopg2


class dbmethods:
    def __init__(self):
        # Comment the lines below if not using docker eg dev environment
        # self.connection = psycopg2.connect(
        #     database="442_project", user="root", password="", host="localhost", port="5432")

        # Comment the line below if using docker eg prod environment
        self.connection = psycopg2.connect(
            database="442_project", user="root", password="password", host="postgres", port="5432")

        self.cur = self.connection.cursor()

    def create_company(self, companyName, companyEmail, username, password, image):
        self.cur.execute(
            '''CREATE TABLE IF NOT EXISTS providers (comapnyName VARCHAR(255), companyEmail VARCHAR(255), username VARCHAR(255), password VARCHAR(255), image VARCHAR)'''
        )
        self.cur.execute(
            '''INSERT INTO providers (comapnyName, companyEmail, username, password, image) VALUES (%s, %s, %s, %s, %s)''',
            (companyName, companyEmail, username, password, image))
        self.connection.commit()

    # def create_listing(self, username, companyEmail, itemList)

    def closeConnection(self):
        self.connection.close()
