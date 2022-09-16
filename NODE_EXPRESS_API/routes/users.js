import express from "express";

import {
  getUsers,
  createUser,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";

const router = express.Router();

//all routes in here are starting with '/users'
router.get("/", getUsers);

router.post("/", createUser);

// ':id' means we can accep anything after 'http://localhost:3000/users/' this
router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
