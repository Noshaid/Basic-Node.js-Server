# Basic-Node.js-Server

Built basic Node.js server and implement CRUD requests using Express framework.

- Create user `POST`
- Get users `GET`
- Get specific user `GET`
- Delete User `DELETE`
- Update User `PATCH`

This basic server has no database. It's just a practice to implement backend server using `node.js` and `express.js`

## Commands

1. Initialzse backend javascript application `npm init -y`
2. `index.js` (create starting point of our server)
3. Install express.js `npm install express --save`
4. Run server `node index.js` or `npm start`
5. Install nodemon `npm install —save-dev nodemon` restart server automatically on save files 

## API Endpoints

- Home Page `http://localhost:3000` 
- Create user `http://localhost:3000/users` (POST)

    ``
    {
      "firstName": "John",
      "lastName": "Doe",
       "age": 18
    }
    ``
 - Get users `http://localhost:3000/users` (GET)
 - Get specific user `http://localhost:3000/users/124` (GET)
 - Delete specific user `http://localhost:3000/users/123` (DELETE)
 - Update user `http://localhost:3000/users/124` (PATCH)

    ``
    {
      "firstName": "John",
      "lastName": "Doe",
       "age": 10
    }
    ``

