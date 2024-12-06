import express from 'express';
import * as poController from '../controllers/poController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/po', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), poController.getAllPO);
router.get('/po/:id_po', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), poController.getPOById);
router.post('/po', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), poController.createPO);
router.put('/po/:id_po', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), poController.updatePO);
router.delete('/po/:id_po', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), poController.deletePO);

export default router;
