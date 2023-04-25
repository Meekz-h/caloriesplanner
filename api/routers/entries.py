from fastapi import APIRouter, Depends, HTTPException
from models.entries import MealEntries, MealEntry, MealParams
from queries.entries import EntryQueries
from authenticator import authenticator

router = APIRouter()


@router.post("/api/entries", response_model=MealEntry)
def create_entry(
    params: MealParams,
    repo: EntryQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.create(params, account_id=account_data["id"])


@router.get("/api/entries", response_model=MealEntries)
def get_all_entries(
    repo: EntryQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return {"meals": repo.get_all(account_id=account_data["id"])}


@router.get("/api/entries/{entry_id}", response_model=MealEntry)
def get_entry(
    entry_id: str,
    repo: EntryQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.get_entry(entry_id, account_id=account_data["id"])


@router.put("/api/entries/{entry_id}", response_model=MealEntry)
def update_entry(
    entry_id: str,
    params: MealParams,
    repo: EntryQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    try:
        return repo.update(entry_id, params, account_data["id"])
    except TypeError:
        raise HTTPException(
            status_code=404, detail="Meal not found, unable to update"
        )


@router.delete("/api/entries/{entry_id}", response_model=bool)
def delete_entry(
    entry_id: str,
    repo: EntryQueries = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.delete(entry_id, account_id=account_data["id"])
