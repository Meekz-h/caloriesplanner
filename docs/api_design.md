Users:

-Post request
  * Endpoint path: /users
  * Endpoint method: POST

  * Headers:
    * None

  * Request shape (form):
    * username: str,
    * password: str,

  * Response: Account information and a token
  * Response shape (JSON):
      ```json
      {
        full_name: str,
        email: str,
        username: str,
        d_o_b: datetime.date,
      }
      ```

-Get request (list of users)
  * Endpoint path: /users
  * Endpoint method: GET

  * Headers:
    * Authorization: Bearer token

  * Query parameters:
    * username: username to retrieve the user's info

  * Request shape (form):
    * no parameters

  * Response: Account information and a token
  * Response shape (JSON):
      ```json
       {
          id: int,
          full_name: str,
          email: str,
          username: str,
          d_o_b: datetime.date,
        },
      ```

-Get request (one username)
  * Endpoint path: /users/{username}
  * Endpoint method: GET

  * Headers:
    * Authorization: Bearer token

  * Query parameters:
    * username: username to retrieve the user's info

  * Request shape (form):
    * no parameters

  * Response: Account information and a token
  * Response shape (JSON):
      ```json
        {
          id: int,
          full_name: str,
          email: str,
          username: str,
          d_o_b: datetime.date,
        },
      ```

-PUT request (Update a username)
  * Endpoint path: /users/{username}
  * Endpoint method: PUT

  * Headers:
    * Authorization: Bearer token

  * Query parameters:
    * username: username to retrieve the user's info

  * Request shape (form):
    * full_name: str,
    * email: str,
    * username: str,
    * d_o_b: datetime.date,

  * Response: Account information and a token
  * Response shape (JSON):
      ```json
        {
          id: int,
          full_name: str,
          email: str,
          username: str,
          d_o_b: datetime.date,
        },
      ```

-DELETE request (Delete a username)
  * Endpoint path: /users/{username}
  * Endpoint method: DELETE

  * Headers:
    * Authorization: Bearer token

  * Query parameters:
    * username: str

  * Request shape (form):
    None

  * Response: Account information and a token
  * Response shape (JSON):
      ```json
        "message": "User account has been deleted.",

      ```



































    Get Goal:
        * Endpoint path: /goal
        * Endpoint method: GET

        * Headers:
        * Authorization: Bearer token

        * Request shape (JSON):
            ```json
            «JSON-looking thing that has the
            keys and types in it»
            ```

        * Response: «Human-readable description
                    of response»
        * Response shape (JSON):
            ```json
            «JSON-looking thing that has the
            keys and types in it»
            ```

    Create Goal

    Update Goal

    Delete Goal

Meal Log:
    Get Meal Logs
    Get Meal Log
    Create Meal Log
    Update Meal Log
    Delete Meal Log

Food Item:
    Get Food Items
    Get Food Item
    Create Food Item
    Update Food Item
    Delete Food Item


### Log in





### Sign up

* Endpoint path: /users
* Endpoint method: POST

* Query parameters:
  * :

* Request shape (form):
  * full_name: string
  * email: string
  * username: string
  * d_o_b: string
  * password: string
  * password_confirmation: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        full_name: str,
        email: str,
        username: str,
        d_o_b: datetime.date,
        password: str
        password_confirmation: str

      },
      "token": string
    }
    ```


* Endpoint path: /users/{username}
* Endpoint method: GET

* Headers:
  * Authorization: Bearer token

* Request shape (form):
  * username: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        full_name: str,
        email: str,
        username: str,
        d_o_b: datetime.date,
      },
      "token": string
    }
    ```

* Endpoint path: /users/{username}
* Endpoint method: GET

* Request shape (form):
  * username: string

* Response: Account information and a token
* Response shape (JSON):
    ```json
    {
      "account": {
        full_name: str,
        email: str,
        username: str,
        d_o_b: datetime.date,
      },
      "token": string
    }
    ```


### Log out

* Endpoint path: /token
* Endpoint method: DELETE

* Headers:
  * Authorization: Bearer token

* Response: Always true
* Response shape (JSON):
    ```json
    true
    ```
