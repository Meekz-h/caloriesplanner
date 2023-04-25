from queries.client import Queries
from models.entries import MealParams, MealEntry
from bson.objectid import ObjectId
from datetime import datetime


class EntryQueries(Queries):
    COLLECTION = "entries"

    def create(self, params: MealParams, account_id: str) -> MealEntry:
        entry = params.dict()
        current = datetime.now()
        entry["date"] = current
        entry["account_id"] = account_id
        self.collection.insert_one(entry)
        entry["id"] = str(entry["_id"])
        return MealEntry(**entry)

    def get_all(self, account_id: str) -> list[MealEntry]:
        meals = []
        for meal in self.collection.find({"account_id": account_id}):
            meal["id"] = str(meal["_id"])
            meals.append(MealEntry(**meal))
        return meals

    def get_entry(self, id: str, account_id: str) -> MealEntry:
        meal = self.collection.find_one(
            {"_id": ObjectId(id), "account_id": account_id}
        )
        meal["id"] = str(meal["_id"])
        return meal

    def update(
        self, id: str, params: MealParams, account_id: str
    ) -> MealEntry:
        entry = params.dict()
        meal = self.collection.find_one_and_update(
            {"_id": ObjectId(id), "account_id": account_id}, {"$set": entry}
        )
        meal["id"] = str(meal["_id"])
        return MealEntry(**meal)

    def delete(self, id: str, account_id: str) -> bool:
        result = self.collection.delete_one(
            {"_id": ObjectId(id), "account_id": account_id}
        )
        return result.deleted_count == 1
