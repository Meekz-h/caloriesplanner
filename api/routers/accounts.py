from fastapi import (
    APIRouter,
    Request,
    Response,
    Depends,
    HTTPException,
    status,
)
from models.accounts import (
    AccountIn,
    AccountForm,
    AccountToken,
    AccountOut,
    GoalIn,
)
from queries.accounts import AccountsRepo, DuplicateAccountError
from authenticator import authenticator

router = APIRouter()


@router.post("/api/accounts")
async def create_account(
    info: AccountIn,
    request: Request,
    response: Response,
    repo: AccountsRepo = Depends(),
):
    hashed_password = authenticator.hash_password(info.password)
    try:
        account = repo.create(info, hashed_password)
    except DuplicateAccountError:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Cannot create an account, account already exists",
        )
    form = AccountForm(username=info.username, password=info.password)
    token = await authenticator.login(response, request, form, repo)
    return AccountToken(account=account, **token.dict())


@router.get("/token", response_model=AccountToken | None)
async def get_token(
    request: Request,
    account: AccountOut = Depends(authenticator.try_get_current_account_data),
) -> AccountToken | None:
    if account and authenticator.cookie_name in request.cookies:
        return {
            "access_token": request.cookies[authenticator.cookie_name],
            "type": "Bearer",
            "account": account,
        }


@router.put("/api/accounts/")
async def update_account(
    info: GoalIn,
    request: Request,
    response: Response,
    repo: AccountsRepo = Depends(),
    account_data: dict = Depends(authenticator.get_current_account_data),
):
    return repo.update(account_data["id"], info)


@router.get("/api/accounts/", response_model=AccountOut)
async def get_account(
    account_data: dict = Depends(authenticator.get_current_account_data),
    repo: AccountsRepo = Depends(),
):
    return repo.get(account_data["username"])
