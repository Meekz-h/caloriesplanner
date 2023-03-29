from models.usda_api import FoodItem
import requests
import os

api_key = os.getenv("API_KEY")

class USDAQuery():
    url = f"https://api.nal.usda.gov/fdc/v1/foods/search?api_key={api_key}"

    def get_list(self, query: str):
        query.replace(" ","%20")
        res = requests.get(self.url + f'&query={query}')
        if res.status_code == 404:
            return None
        data = res.json()
        foods = []
        for food in data["foods"]:
            food_in = {}
            food_in["name"] = food["description"]
            food_in["brand_name"] = food.get("brandName")
            food_in["calories"] = food["foodNutrients"][3]["value"]
            foods.append(FoodItem(**food_in))
        return {"foods": foods}
