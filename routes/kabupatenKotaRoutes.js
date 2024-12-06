import express from 'express';
import * as kabupatenKotaController from '../controllers/kabupatenKotaController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/kabupaten-kota', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9, 11]), kabupatenKotaController.getAllKabupatenKota);
router.get('/kabupaten-kota/count', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kabupatenKotaController.getKabupatenKotaCount);
router.get('/kabupaten-kota/:id_kabupaten_kota', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kabupatenKotaController.getKabupatenKotaById);
router.post('/kabupaten-kota', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kabupatenKotaController.createKabupatenKota);
router.put('/kabupaten-kota/:id_kabupaten_kota', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kabupatenKotaController.updateKabupatenKota);

export default router;
