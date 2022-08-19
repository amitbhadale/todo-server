import mongoose from "mongoose";
import Todo from "../models/todos.js";

export const readTodos = async (req, res) => {
  try {
    const Todos = await Todo.find();
    res.status(200).json(Todos);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const createTodos = async (req, res) => {
  const todo = new Todo(req.body);
  try {
    await todo.save();
    res.status(201).json(todo);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

export const updateTodos = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`the id ${id} is invalid!`);
  }
  const todo = { title, content, _id: id };
  await Todo.findByIdAndUpdate(id, todo, { new: true });
  res.json(todo);
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send(`the id ${id} is invalid!`);
  }
  await Todo.findByIdAndDelete(id);
  res.json({ message: "Todo deleted successfully" });
};
