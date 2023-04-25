from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os
from routers import entries, accounts, usda_api
from authenticator import authenticator


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[os.environ.get("CORS_HOST", "http://localhost:3000")],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.include_router(accounts.router, tags=["Accounts"])
app.include_router(authenticator.router, tags=["Accounts"])
app.include_router(entries.router, tags=["Entries"])
app.include_router(usda_api.router, tags=["USDA"])
