from bson.objectid import ObjectId
from queries.client import Queries
from models.accounts import AccountIn, AccountOutWithHashedPassword
from datetime import datetime

class DuplicateAccountError(ValueError):
    pass

class AccountsRepo(Queries):
    COLLECTION = 'accounts'

    def create(self, info: AccountIn, hashed_password: str):
        info.username = info.username.lower()
        account = info.dict()
        del account['password']
        account['hashed_password'] = hashed_password
        if self.get(account['username']) is not None:
            raise DuplicateAccountError
        self.collection.insert_one(account)
        account['id'] = str(account['_id'])
        return AccountOutWithHashedPassword(**account)


    def get(self, username: str):
        result = self.collection.find_one({"username": username.lower()})
        if result is None:
            return None
        result['id'] = str(result['_id'])
        return AccountOutWithHashedPassword(**result)
