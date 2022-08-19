import express from "express";
import {
  createTodos,
  deleteTodo,
  readTodos,
  updateTodos,
} from "../controllers/todos.js";

const router = express.Router();

router.get("/", readTodos);
router.post("/", createTodos);
router.patch("/:id", updateTodos);
router.delete("/:id", deleteTodo);

export default router;
