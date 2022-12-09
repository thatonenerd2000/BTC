from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware


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
    return {"status": "success"}
