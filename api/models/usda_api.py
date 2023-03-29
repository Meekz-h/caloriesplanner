from pydantic import BaseModel
from typing import List


class FoodItem(BaseModel):
    name: str
    calories: int
    brand_name: str | None

class FoodList(BaseModel):
    foods: List[FoodItem]
        