from queries.client import Queries
from models.entries import MealParams, MealEntry
from bson.objectid import ObjectId
from datetime import datetime


class EntryQueries(Queries):
    COLLECTION = 'entries'

    def create(self, params: MealParams) -> MealEntry:
        entry = params.dict()
        current = datetime.now()
        entry['date'] = current
        self.collection.insert_one(entry)
        entry['id'] = str(entry['_id'])
        return MealEntry(**entry)


    def get_all(self) -> list[MealEntry]:
        meals = []
        for meal in self.collection.find():
            meal['id'] = str(meal['_id'])
            meals.append(MealEntry(**meal))
        return meals


    def get_entry(self, id:str) -> MealEntry:
        meal = self.collection.find_one({'_id': ObjectId(id)})
        meal['id'] = str(meal['_id'])
        return meal


    def delete(self, id: str) -> bool:
        result = self.collection.delete_one({'_id': ObjectId(id)})
        return result.deleted_count == 1
