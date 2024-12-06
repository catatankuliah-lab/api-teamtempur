import express from "express";
import * as projekController from "../controllers/projekController.js"; // Pastikan nama file sesuai

const router = express.Router();

// Route untuk mendapatkan semua projek
router.get("/projek", projekController.getAllProjek);

// Route untuk menambahkan projek baru
router.post("/projek", projekController.createProjek);

// Route untuk memperbarui projek berdasarkan id_projek
router.put("/projek/:id_projek", projekController.updateProjek);

// Route untuk menghapus projek berdasarkan id_projek
router.delete("/projek/:id_projek", projekController.deleteProjek);

export default router;
