const express = require("express");

const app = express();

app.use(express.json());

const users = [
    {
        id: "1",
        name: "Aradhya",
        email: "aradhya@example.com"
    },
    {
        id: "2",
        name: "Rahul",
        email: "rahul@example.com"
    }
];

// Home
app.get("/", (req, res) => {
    res.send("TODO API is working!");
});

// Get all todos
app.get("/todos", (req, res) => {
    res.json([
        {
            id: 1,
            title: "Learn Node.js",
            completed: false
        },
        {
            id: 2,
            title: "Build CRUD API",
            completed: false
        }
    ]);
});

// Get user by ID
app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    const user = users.find((user) => user.id === id);

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    res.json(user);
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});

// create user, post method- to accept the data

app.post("/users", (req, res) => {
    const {title} = req.body
    if(!title) {
        return res.status(400).json({
            message: "Title is required"
        });
    }
    const newTodo = {
        id: users.length + 1,
        title,
        completed: false
    };
    users.push(newTodo);
    res.status(201).json({
        message: "User created successfully",
        todo: newTodo, 
    });
})
