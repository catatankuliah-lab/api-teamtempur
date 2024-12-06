// routes/roleRoutes.js
import express from "express";
import * as roleController from "../controllers/roleController.js"; // Pastikan nama file sesuai

const router = express.Router();

// Route untuk mendapatkan semua role
router.get("/role", roleController.getAllRoles);

// Route untuk menambahkan role baru
router.post("/role", roleController.createRole);

// Route untuk memperbarui role berdasarkan id_role
router.put("/role/:id_role", roleController.updateRole);

// Route untuk menghapus role berdasarkan id_role
router.delete("/role/:id_role", roleController.deleteRole);

export default router;
