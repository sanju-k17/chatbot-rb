# main.py
from fastapi import FastAPI, Request
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from pathlib import Path
import re

app = FastAPI()

# Enable frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

# ------- Dynamic Rules Dictionary --------
RULES = {
    r"(hi|hello|hey)": "Hello! 👋  How can I help you today?",
    r"(bye|goodbye)": "Goodbye! Have a great day. 😊",
}

DEFAULT_REPLY = "Sorry, I didn’t understand. Could you rephrase?"

def match_rule(message: str) -> str:
    for pattern, reply in RULES.items():
        if re.search(pattern, message, re.I):
            return reply
    return DEFAULT_REPLY

# --------- Request/Response Models --------
class ChatRequest(BaseModel):
    message: str

class RuleRequest(BaseModel):
    pattern: str
    reply: str

class ChatResponse(BaseModel):
    reply: str

# --------- Routes --------
@app.post("/chat", response_model=ChatResponse)
async def chat(req: ChatRequest):
    reply = match_rule(req.message)
    return ChatResponse(reply=reply)

@app.post("/add-rule")
async def add_rule(rule: RuleRequest):
    RULES[rule.pattern] = rule.reply
    return {"message": "Rule added successfully."}

# --------- Serve Static Files --------
BASE_DIR = Path(__file__).resolve().parent.parent
app.mount("/", StaticFiles(directory=BASE_DIR, html=True), name="static")
