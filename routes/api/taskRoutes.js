
const express = require("express");
const router = express.router();
const  { createTask, getTasksByProject, updateTask, deleteTask} = require ("../controllers/taskController");
const { authMiddleware} = require ("../middleware/authMiddleware");

router.post ("/projects/:projectId/tasks", authMiddleware, createTask)

router.get("/projects/:projectId/tasks" , authMiddleware, getTasksByProject)

router.put("/tasks/:taskId" , authMiddleware , updateTask);

router.delete("/tasks/:taskId" ,authMiddleware, deleteTask);

module.exports= router;