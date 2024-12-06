import express from 'express';
import * as armadaController from '../controllers/armadaController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get(
    '/armada',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    armadaController.getAllArmadas
);

router.get(
    '/armada/:id_armada',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    armadaController.getArmadaById
);

router.post(
    '/armada',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    armadaController.createArmada
);

router.put(
    '/armada/:id_armada',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    armadaController.updateArmada
);

router.delete(
    '/armada/:id_armada',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    armadaController.deleteArmada
);

export default router;
