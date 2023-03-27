from pydantic import BaseModel
from datetime import datetime
from typing import List

class MealParams(BaseModel):
    name: str
    category: str
    calories: int


class MealEntry(MealParams):
    id: str
    date: datetime


class MealEntries(BaseModel):
    meals: List[MealEntry]
