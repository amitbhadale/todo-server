import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import todosRoutes from "./routes/todos.js";

const app = express();
dotenv.config();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/todos", todosRoutes);

const dbUrl =
  "mongodb://adminuser:hardwellamit@ac-re3mxvf-shard-00-00.lh65bgg.mongodb.net:27017,ac-re3mxvf-shard-00-01.lh65bgg.mongodb.net:27017,ac-re3mxvf-shard-00-02.lh65bgg.mongodb.net:27017/mernstack?ssl=true&replicaSet=atlas-8i9vjg-shard-0&authSource=admin&retryWrites=true&w=majority";
app.get("/", (req, res) => {
  res.send("welcome to server");
});
const PORT = process.env.PORT || 5000;
mongoose
  .connect(dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(PORT, () => console.log(`Server running on ${PORT} `)))
  .catch((error) => console.log(error));
