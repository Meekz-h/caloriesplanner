from pydantic import BaseModel
from jwtdown_fastapi.authentication import Token


class AccountOut(BaseModel):
    id: str
    username: str
    full_name: str
    email: str
    age: int
    goal: int | None

class AccountOutWithHashedPassword(AccountOut):
    hashed_password: str


class AccountIn(BaseModel):
    username: str
    password: str
    full_name: str
    email: str
    age: int
    goal: int | None


class AccountForm(BaseModel):
    username: str
    password: str


class AccountToken(Token):
    account: AccountOut

class GoalIn(BaseModel):
    goal: int | None
