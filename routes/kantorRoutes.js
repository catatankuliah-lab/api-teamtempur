import express from 'express';
import * as kantorController from '../controllers/kantorController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/kantor', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kantorController.getAllKantorCabang);
router.get('/kantor/count', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kantorController.getKantorCabangCount);
router.get('/kantor/:id_kantor', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kantorController.getKantorCabangById);
router.post('/kantor', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kantorController.createKantorCabang);
router.put('/kantor/:id_kantor', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kantorController.updateKantorCabang);
router.delete('/kantor/:id_kantor', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), kantorController.deleteKantorCabang);

export default router;
