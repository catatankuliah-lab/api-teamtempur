import express from 'express';
import * as vendorController from '../controllers/vendorController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/vendor', authMiddleware.authenticate, authMiddleware.authorizeRole([1,9,11]), vendorController.getAllVendors);
router.get('/vendor/count', authMiddleware.authenticate, authMiddleware.authorizeRole([1,9]), vendorController.getVendorCount);
router.get('/vendor/:id_vendor', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), vendorController.getVendorById);
router.post('/vendor', authMiddleware.authenticate, authMiddleware.authorizeRole([1,9]), vendorController.createVendor);
router.put('/vendor/:id_vendor', authMiddleware.authenticate, authMiddleware.authorizeRole([1,9]), vendorController.updateVendor);

export default router;
