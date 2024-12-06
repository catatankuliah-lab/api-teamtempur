import express from 'express';
import * as jenisKendaraanController from '../controllers/jenisKendaraanController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/jenis-kendaraan',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    jenisKendaraanController.getAllJenisKendaraan
);

router.get('/jenis-kendaraan/:id_jenis_kendaraan',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    jenisKendaraanController.getJenisKendaraanById
);

router.post('/jenis-kendaraan',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    jenisKendaraanController.createJenisKendaraan
);

router.put('/jenis-kendaraan/:id_jenis_kendaraan',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    jenisKendaraanController.updateJenisKendaraan
);

router.delete('/jenis-kendaraan/:id_jenis_kendaraan',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    jenisKendaraanController.deleteJenisKendaraan
);

export default router;
