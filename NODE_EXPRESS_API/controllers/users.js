import { v4 as uuidv4 } from "uuid";

let users = [
  //   {
  //     firstName: "John",
  //     lastName: "Doe",
  //     age: 25,
  //   },
  //   {
  //     firstName: "Jane",
  //     lastName: "Doe",
  //     age: 24,
  //   },
];

export const getUsers = (req, res) => {
  res.send(users);
};

export const createUser = (req, res) => {
  const user = req.body;

  const userId = uuidv4(); //uuidv4() ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  const userWithId = { ...user, id: userId };

  users.push(userWithId);

  res.send(`User with the name ${user.firstName} added to database!`);
};

// '/users/2' => req.params {id: 2}
export const getUser = (req, res) => {
  const { id } = req.params; //or const id = req.params.id;

  const foundUser = users.find((user) => user.id === id);

  res.send(foundUser);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with ${id} deleted from the database!`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  const userToBeUpdated = users.find((user) => user.id === id);

  if (firstName) userToBeUpdated.firstName = firstName;
  if (lastName) userToBeUpdated.lastName = lastName;
  if (age) userToBeUpdated.age = age;

  res.send(`User with ${id} has been updated!`);
};
