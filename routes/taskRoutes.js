import express from "express";
import * as taskController from "../controllers/taskController.js"; // Pastikan nama file sesuai

const router = express.Router();

// Route untuk mendapatkan semua task
router.get("/task", taskController.getAllTasks);

// Route untuk menambahkan task baru
router.post("/task", taskController.createTask);

// Route untuk memperbarui task berdasarkan id_task
router.put("/task/:id_task", taskController.updateTask);

// Route untuk menghapus task berdasarkan id_task
router.delete("/task/:id_task", taskController.deleteTask);

export default router;
