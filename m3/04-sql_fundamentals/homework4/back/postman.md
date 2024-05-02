## USERS

```json
// GET
// http://localhost:3000/users/

// GET
// http://localhost:3000/users/:id

// POST
// http://127.0.0.1:3000/users/register/
{
  "name": "Henry",
  "email": "hXG5W@example.com",
  "birthdate": "1990-01-01",
  "nDni": 12345678
}

// POST
// http://localhost:3000/users/login
{
    "username": "john@example.com",
    "password": "password123"
}

// OPTIONS
// http://localhost:3000/users/credentials
```

## TURNS

```JSON
// GET
// http://localhost:3000/turns/

// GET
// http://localhost:3000/turns/:id

// POST
// http://127.0.0.1:3000/turns/schedule/
{
    "date": "2024-05-05",
    "time": "10:00 AM",
    "userId": 1
}

// PUT
// http://localhost:3000/turns/cancel/1
{
    "id": 1
}


```
