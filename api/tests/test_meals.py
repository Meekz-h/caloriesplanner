from fastapi.testclient import TestClient
from main import app
from queries.entries import EntryQueries
from authenticator import authenticator
from models.entries import MealEntry, MealParams
from datetime import datetime

client = TestClient(app)


def fake_get_current_account_data():
    return {"id": "fakeuser"}


class FakeEntryQueries:
    def get_all(self, account_id: str) -> list[MealEntry]:
        return [
            {
                "name": "string",
                "category": "string",
                "calories": 0,
                "id": "string",
                "date": "2023-04-25T19:36:06.814Z",
                "account_id": account_id,
            }
        ]

    def create(self, params: MealParams, account_id: str) -> MealEntry:
        entry = params.dict()
        current = datetime.now()
        entry["date"] = current
        entry["account_id"] = account_id
        entry["id"] = "123"
        return MealEntry(**entry)

    def get_entry(self, id: str, account_id: str) -> MealEntry:
        return {
            "name": "string",
            "category": "string",
            "calories": 0,
            "id": id,
            "date": "2023-04-25T19:36:06.814Z",
            "account_id": account_id,
        }

    def delete(self, id: str, account_id: str) -> bool:
        return True

    def update(
        self, id: str, params: MealParams, account_id: str
    ) -> MealEntry:
        return {
            "name": params.name,
            "category": params.category,
            "calories": params.calories,
            "id": id,
            "date": "2023-04-25T19:36:06.814Z",
            "account_id": account_id,
        }


def test_get_all_entries():
    # Arrange
    app.dependency_overrides[EntryQueries] = FakeEntryQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    # Act
    res = client.get("/api/entries")
    data = res.json()
    # Assert
    assert res.status_code == 200
    assert len(data["meals"]) == 1
    assert type(data) == dict
    # A clean up
    app.dependency_overrides = {}


def test_create_entry():
    # Arrange
    app.dependency_overrides[EntryQueries] = FakeEntryQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    entry = {"name": "Entry 1", "category": "Breakfast", "calories": 200}
    # Act
    res = client.post("/api/entries", json=entry)
    data = res.json()
    # Assert
    assert data["id"] == "123"
    assert res.status_code == 200
    assert data["account_id"] == "fakeuser"
    assert type(data) == dict
    # A clean up
    app.dependency_overrides = {}


def test_delete_entry():
    app.dependency_overrides[EntryQueries] = FakeEntryQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    res = client.delete("/api/entries/1")
    assert res.status_code == 200
    assert type(res.json()) == bool
    app.dependency_overrides = {}


def test_get_entry():
    # Arrange
    app.dependency_overrides[EntryQueries] = FakeEntryQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    entry_id = "123"
    # Act
    resp = client.get(
        "/api/entries/123",
    )
    data = resp.json()

    # Assert
    assert resp.status_code == 200
    assert data["id"] == f"{entry_id}"
    assert data["account_id"] == "fakeuser"
    assert type(data) == dict

    # A clean up
    app.dependency_overrides = {}


def test_update_entry():
    # Arrange
    app.dependency_overrides[EntryQueries] = FakeEntryQueries
    app.dependency_overrides[
        authenticator.get_current_account_data
    ] = fake_get_current_account_data
    entry = {"name": "Entry 1", "category": "Breakfast", "calories": 200}
    # Act
    res = client.put("/api/entries/123", json=entry)
    data = res.json()
    # Assert
    assert res.status_code == 200
    assert data["id"] == "123"
    assert type(data) == dict
    assert data["account_id"] == "fakeuser"
    # A clean up
    app.dependency_overrides = {}
