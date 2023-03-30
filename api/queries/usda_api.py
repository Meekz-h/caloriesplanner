from models.usda_api import FoodItem
import requests
import os

api_key = os.getenv("API_KEY")

class USDAQuery():
    url = f"https://api.nal.usda.gov/fdc/v1/foods/search"

    def get_list(self, query: str):
        params = {'query': query,'api_key':api_key }
        res = requests.get(self.url,params)
        if res.status_code == 404:
            return None
        data = res.json()
        foods = []
        for food in data["foods"]:
            food_in = {}
            food_in["name"] = food["description"]
            food_in["brand_name"] = food.get("brandName")
            if food.get('foodNutrients') != None:
                for ele in food['foodNutrients']:
                    if ele.get("nutrientId") == 1008:
                        food_in["calories"] = ele["value"]
                        break
            else:
                food_in["calories"] = None
            foods.append(FoodItem(**food_in))
        return {"foods": foods}
