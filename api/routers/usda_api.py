from fastapi import APIRouter, Depends, HTTPException
from models.usda_api import FoodList
from queries.usda_api import USDAQuery

router = APIRouter()


@router.get("/api/foods/", response_model=FoodList)
def get_foods(
    food_name: str,
    queries: USDAQuery = Depends(),
):
    foods = queries.get_list(food_name)

    if not foods["foods"]:
        raise HTTPException(status_code=404, detail="Food not found")
    return foods
