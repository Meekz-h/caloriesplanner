# Users:

### Create a user

- Endpoint path: /users
- Endpoint method: POST

- Headers:

  - None

- Request shape (form):
  {
  full_name: str,
  email: str,
  username: str,
  d_o_b: datetime.date,
  goal : int | null
  }

- Response: Account information and a token
- Response shape (JSON):
  ```json
  {
    Id: str,
    full_name: str,
    email: str,
    username: str,
    d_o_b: datetime.date,
    goal : int | null
  }
  ```

### Get a user by username

- Endpoint path: /users/{username}
- Endpoint method: GET

- Headers:

  - Authorization: Bearer token

- Query parameters:

  - username: username to retrieve the user's info

- Response: Account information and a token
- Response shape (JSON):
  ```json
    {
     id: str,
     full_name: str,
     email: str,
     username: str,
     d_o_b: datetime.date,
     goal: int | null
    },
  ```

### Update a user

- Endpoint path: /users/{username}
- Endpoint method: PUT

- Headers:

  - Authorization: Bearer token

- Query parameters:

  - username: username to retrieve the user's info

- Request shape (form):

  ```json
    {
     id: str,
     full_name: str,
     email: str,
     username: str,
     d_o_b: datetime.date,
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
     d_o_b: datetime.date,
     goal: int | null,
    },
  ```

### Delete a user by username

- Endpoint path: /users/{username}
- Endpoint method: DELETE

- Headers:

  - Authorization: Bearer token

- Query parameters:

  - username: str

- Response: Account information and a token

- Response shape (JSON):
  ```json
  {
    		true,
  }
  ```

# Meal Log:

### Create a Meal Log

- Endpoint path: /logs
- Endpoint method: POST

- Headers:

  - Authorization: Bearer token

- Request shape (JSON):

```json
{
    name: str,
    category: str,
	date: DateTime,
	calories: int,
}
```

- Response: The Created meal log
- Response shape (JSON):

```json
meal_log:{
	id: str,
    name: str,
    category: str,
	date: DateTime,
	calories: int,
	user_id: str,
}
```

## Get a list of logs

- Endpoint Path: /logs
- Endpoint Method: Get

- Headers:
- Authorization: Bearer token

- Query parameters:
- d: Datetime (where date = date)

- Response: A list of all the Meal Logs for a specific date
- Response shape(JSON) :

```json
{ meals: [
meal_log: {
id: str,
name: str,
category: str,
	date: DateTime,
	calories: int,
	user_id: str,
}
        ]
}
```

## Get a log by ID

- Endpoint Path: /logs/{id}
- Endpoint Method: Get
- Query parameters:
  - d: Datetime (where date = date)
- Headers:
  - Authorization: Bearer token
- Response: A specific meal log by id or date
- Response shape(JSON) :

```json
    meal_log:{
            id: str,
            name: str,
            category: str,
            date: DateTime,
            calories: int,
            user_id: str
        }
```

### Update a meal log

- Endpoint path: /logs/{id}
- Endpoint method: PUT
- Query parameters:

  - d: DateTime

- Headers:

  - Authorization: Bearer token

- Request shape (JSON):
  `json
{
name: str,
category: str,
	date: DateTime,
	calories: int,
}
    `

- Response: The updated meal log
- Response shape (JSON):
  `json
meal_log:{
	id: str,
name: str,
category: str,
	date: DateTime,
	calories: int,
	user_id: str,
}
    `

### Delete a meal log

- Endpoint path: /logs/{id}
- Endpoint method: Delete

- Headers:

  - Authorization: Bearer token

- Response: True when a meal log is deleted
- Response shape (JSON):
  ```json
  {
  Message: “This meal log has been deleted”
   }
  ```

Food Item:

### Get a list of food items

- Endpoint path: /foods
- Endpoint method: Get

- Query Parameters:
  \*food_name: str

*Request shape (form):
*food_item: str

- Request shape (JSON):
- no parameters
- Response: List of food items
- Response shape (JSON):
  ```json
  { fooditem:
  	{
        id: str,
    	food_name: str,
    	calories: int
  	}
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