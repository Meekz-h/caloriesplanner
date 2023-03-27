from fastapi import APIRouter, Depends
from models.entries import MealEntries, MealEntry, MealParams
from queries.entries import EntryQueries

router = APIRouter()


@router.post('/api/entries', response_model=MealEntry)
def create_entry(
    params: MealParams,
    repo: EntryQueries = Depends()
):
    return repo.create(params)


@router.get('/api/entries', response_model=MealEntries)
def get_all_entries(
    repo: EntryQueries = Depends()
):
    return {
        'meals': repo.get_all()
    }

@router.get('/api/entries/{entry_id}', response_model=MealEntry)
def get_entry(
    entry_id: str,
    repo: EntryQueries = Depends()
):
    return repo.get_entry(entry_id)


@router.delete('/api/entries/{entry_id}', response_model=bool)
def delete_entry(
    entry_id: str,
    repo: EntryQueries = Depends()
    ):
    return repo.delete(entry_id)
