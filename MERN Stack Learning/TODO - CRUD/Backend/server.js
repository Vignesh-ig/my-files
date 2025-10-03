//Using express
const express = require("express");

//Using mongoDB via mongoose
const mongoose = require("mongoose");

//Adding CORS to overcome CORS policy error and this is used to allow froontend accress ---- Its a middleware\
const cors = require("cors");

//Creating an instance of express
const app = express();
app.use(express.json());
app.use(cors());

//Start the server using port
const port = 8000;

app.listen(port, () => {
  console.log("Server listerning to " + port);
});

//Sample in-memory storage
// let todos = [];

//Connection to mongoDB
mongoose
  .connect("mongodb://localhost:27017/first-mern-crud")
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//Creating Schema
const todoSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  description: String,
});

//Creating model
const todoModel = mongoose.model("Todo", todoSchema);

//Route 1 - create item
app.post("/todos", async (req, res) => {
  const { title, description } = req.body;
  // const newTodo = {
  //   id: todos.length + 1,
  //   title,
  //   description,
  // };

  // todos.push(newTodo);

  // new todoModel({title, description}).save();

  try {
    const newTodo = new todoModel({ title, description });
    await newTodo.save();
    res.status(201).json({ newTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Route 2 - get all items
app.get("/todos", async (req, res) => {
  try {
    const todos = await todoModel.find();
    res.status(200).json({ todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Route 3 - update item
app.put("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { title, description } = req.body;
    const updatedTodo = await todoModel.findByIdAndUpdate(
      id,
      {
        title,
        description,
      },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ updatedTodo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});

//Route 4 - delete item
app.delete("/todos/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deleteTodo = await todoModel.findByIdAndDelete(id);

    if (!deleteTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(204).end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
});
