# Contact Manager Node.js Application

This is a simple Node.js application for managing contacts and user authentication. It provides RESTful APIs for creating, reading, updating, and deleting contacts, as well as user management and authentication.

## Features

- **User Management**: Users can register with a username, email, and password. Users can log in with their email and password.

- **Contact Management**: Users can perform CRUD operations (Create, Read, Update, Delete) on their own contacts.

- **Authentication**: Users can authenticate via the `/login` endpoint to access protected resources.

- **Current User**: Users can retrieve information about the currently logged-in user via the `/current` endpoint.

## API Endpoints

### User Management

- **Register a New User**
  - URL: `/api/user`
  - Method: POST
  - Request Body:
    - `username`: User's username
    - `email`: User's email address
    - `password`: User's password

- **Login**
  - URL: `/login`
  - Method: POST
  - Request Body:
    - `email`: User's email address
    - `password`: User's password

- **Get Current User**
  - URL: `/current`
  - Method: GET
  - Authentication Required: Yes

### Contact Management

- **Create a New Contact**
  - URL: `/api/contact`
  - Method: POST
  - Request Body:
    - `name`: Contact's name
    - `email`: Contact's email address
    - `phone`: Contact's phone number
  - Authentication Required: Yes

- **Get All Contacts**
  - URL: `/api/contact`
  - Method: GET
  - Authentication Required: Yes

- **Get a Single Contact**
  - URL: `/api/contact/:contactId`
  - Method: GET
  - Authentication Required: Yes

- **Update a Contact**
  - URL: `/api/contact/:contactId`
  - Method: PUT
  - Request Body (Fields to Update):
    - `name`: Contact's name
    - `email`: Contact's email address
    - `phone`: Contact's phone number
  - Authentication Required: Yes

- **Delete a Contact**
  - URL: `/api/contact/:contactId`
  - Method: DELETE
  - Authentication Required: Yes

## Authentication

To perform operations that require authentication (e.g., creating, updating, or deleting contacts), users must first log in using their email and password. After logging in, they will receive an authentication token that they should include in the `Authorization` header of their requests.

Example Authorization Header:
```
Authorization: Bearer <authentication_token>
```

## Getting Started

1. Clone this repository to your local machine.
2. Install the required dependencies by running:
   ```
   npm install
   ```
3. Start the Node.js server by running:
   ```
   npm start
   ```
4. The server will start on `http://localhost:3000`. You can access the API endpoints using a tool like Postman or curl.

## Usage

- Register a new user by making a POST request to `/api/user/register`.
- Log in with your registered user credentials by making a POST request to `/api/user/login`.
- Create, read, update, and delete contacts using the corresponding contact endpoints with proper authentication.
- Retrieve information about the currently logged-in user by making a GET request to `/api/user/current`.

## Contributions

Contributions are welcome! If you find a bug or have any suggestions for improvement, please open an issue or submit a pull request.

## License

This Contact Manager Node.js Application is open-source and available under the [MIT License](LICENSE).

---

Happy managing your contacts with our Node.js application! If you have any questions or need further assistance, please feel free to reach out.