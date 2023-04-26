# CaloriesPlanner API
## Accounts:

### Create an Acccount

- Endpoint path: /api/accounts
- Endpoint method: POST

- Headers:

  - None

- Request shape (form):
```json
  {
  full_name: str,
  email: str,
  username: str,
  password: str,
  age: int,
  goal : int | null
  }
```
- Response: Account information and a token
- Response shape (JSON):
  ```json
  {
    id: str,
    full_name: str,
    email: str,
    username: str,
    age: int,
    goal : int | null
  }
  ```



## Meal Entries:

### Create a meal entry

- Endpoint path: /api/entries
- Endpoint method: POST

- Headers:

- Authorization: Bearer token

- Request shape (JSON):

```json
{
  name: str,
  category: str,
	calories: int,
}
```

- Response: The Created meal entry
- Response shape (JSON):

```json
meal_entry:{
	id: str,
  name: str,
  category: str,
	date: dateTime,
	calories: int,
	account_id: str,
}
```

### Get a list of entries

- Endpoint Path: /api/entries
- Endpoint Method: Get

- Headers:
- Authorization: Bearer token

- Response: A list of all the Meal Logs for a specific date
- Response shape(JSON) :

```json
{ meals: [
  meal_entry: {
  id: str,
  name: str,
  category: str,
	date: dateTime,
	calories: int,
	account_id: str,
}
]}
```

### Get an entry by ID

- Endpoint Path: /api/entries/{entry_id}
- Endpoint Method: Get

- Headers:
- Authorization: Bearer token

- Response: A specific meal entry by id or date
- Response shape(JSON) :

```json
{
  id: str,
  name: str,
  category: str,
  date: dateTime,
  calories: int,
  account_id: str
}
```

### Update a meal entry

- Endpoint path: /api/entries/{entry_id}
- Endpoint method: PUT

- Headers:
- Authorization: Bearer token

- Request shape (JSON):
```json
{
  name: str,
  category: str,
	calories: int,
}
```

- Response: The updated meal entry
- Response shape (JSON):
```json
{
	id: str,
  name: str,
  category: str,
	date: dateTime,
	calories: int,
	account_id: str,
}
```

### Delete a meal entry

- Endpoint path: /api/entries/{entry_id}
- Endpoint method: Delete

- Headers:
- Authorization: Bearer token

- Response: True when a meal entry is deleted
- Response shape (JSON):
  ```json
  {
    true
  }
  ```

## Food Item:

### Get a list of food items

- Endpoint path: /api/foods/
- Endpoint method: Get

- Query Parameters:
  * food_name: str

- Response: List of food items
- Response shape (JSON):
  ```json
  {foods:[
  	{
      id: str,
    	food_name: str,
    	calories: int
  	}
    ]
  }
  ```

Log in and Out:

### Log in

- Endpoint path: /token
- Endpoint method: POST

- Request shape (form):

  - username: string
  - password: string

- Response: Account information and a token
- Response shape (JSON):
  ```json
  {
    "account": {
      «key»: type»,
    },
    "token": string
  }
  ```

### Log out

- Endpoint path: /token
- Endpoint method: DELETE

- Headers:
- Authorization: Bearer token

- Response: Always true
- Response shape (JSON):
  ```json
  true
  ```


# Stretch Goals:
### Delete a user by username

- Endpoint path: /api/accounts/{username}
- Endpoint method: DELETE

- Headers:

  - Authorization: Bearer token

- Query parameters:

  - account_id: account id

- Response: Account information and a token

- Response shape (JSON):
  ```json
  {
    		true,
  }
  ```
## Users:

### Get a user

- Endpoint path: /api/accounts/
- Endpoint method: GET

- Headers:
- Authorization: Bearer token

- Query parameters:


- Response: Account information and a token
- Response shape (JSON):
  ```json
    {
     id: str,
     full_name: str,
     email: str,
     username: str,
     age: int,
     goal: int | null
    },
  ```

### Update a users goal

- Endpoint path: /api/accounts/
- Endpoint method: PUT

- Headers:

  - Authorization: Bearer token

- Query parameters:
  -



- Request shape (form):

  ```json
    {
     id: str,
     full_name: str,
     email: str,
     username: str,
     age: int,
     goal: int | null,
    },
  ```

- Response: Account information and a token
- Response shape (JSON):
  ```json
    {
     id: str,
     full_name: str,
     email: str,
     username: str,
     age: int,
     goal: int | null,
    },
  ```
