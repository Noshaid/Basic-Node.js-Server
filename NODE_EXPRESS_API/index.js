//https://www.youtube.com/watch?v=l8WPWK9mS5M&ab_channel=JavaScriptMastery

import express from "express"; //or const express = require('express');
import bodyParser from "body-parser"; //this allows us to take in POST request's body

import usersRoutes from "./routes/users.js";

const app = express(); //whole application lies in this 'app' variable
const PORT = 3000;

app.use(bodyParser.json()); //this allows us that we will use JSON data in our application

app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  // '/' is home route
  res.send("Hello from Home page.");
});

app.listen(PORT, () =>
  console.log(`Server running on port: http://localhost:${PORT}`)
); //make our app listen to incoming requests

//**************************************************** */
// Node.js API using Express:

// 1. Initialise backend javascript application (npm init -y)
// 2. Index.js (starting point of our server)
// 3. Install express.js (npm install express --save)
// 4. Run server (node index.js or npm start)
// 5. Install nodemon (npm install —save-dev nodemon)  restart server on save files

//******************************************************* */
