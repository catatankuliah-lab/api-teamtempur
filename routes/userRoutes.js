// routes/userRoutes.js
import express from "express";
import * as userController from "../controllers/userController.js"; // Pastikan nama file sesuai

const router = express.Router();

// Route untuk mendapatkan semua user
router.get("/users", userController.getAllUsers);

// Route untuk menambahkan user baru
router.post("/users", userController.createUser);

// Route untuk memperbarui user berdasarkan id_user
router.put("/users/:id_user", userController.updateUser);

// Route untuk menghapus user berdasarkan id_user
router.delete("/users/:id_user", userController.deleteUser);

export default router;
