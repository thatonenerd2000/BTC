from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
import bcrypt
from dbmethods import dbmethods
import json


origins = [
    # NEED TO MODIFY THIS **SECURITY ISSUE**
    "*"
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    # NEED TO MODIFY THIS **SECURITY ISSUE**
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/signup")
async def signup(userInfo: dict):
    db = dbmethods()
    companyName = userInfo['companyName']
    companyEmail = userInfo['companyEmail']
    username = userInfo['username']
    plainTextPassword = userInfo['password']
    image = userInfo['image']
    salt = bcrypt.gensalt()
    utf = plainTextPassword.encode('utf-8')
    hashedPassword = bcrypt.hashpw(utf, salt)
    db.create_company(companyName, companyEmail,
                      username, hashedPassword.decode(), image)
    db.closeConnection()
    return {"message": "Account Created", "companyName": companyName, "companyEmail": companyEmail, "companyUsername": username, "image": image}


@app.post("/verifyLogin/")
async def verifyLogin(userInfo: dict):
    db = dbmethods()
    username = userInfo['username']
    plainTextPassword = userInfo['plainPassword']
    db.cur.execute(
        '''SELECT * FROM providers WHERE username = %s''', [username])
    user = db.cur.fetchone()
    hashedPassword = user[3].encode('utf-8')
    companyName = user[0]
    companyEmail = user[1]
    companyUsername = user[2]
    db.closeConnection()
    if bcrypt.checkpw(plainTextPassword.encode('utf-8'), hashedPassword):
        return {"message": "Login Successful", "companyName": companyName, "companyEmail": companyEmail, "companyUsername": companyUsername, "image": user[4]}
    else:
        return False
