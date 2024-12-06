import express from 'express';
import * as customerController from '../controllers/customerController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/customer', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9, 11]), customerController.getAllCustomers);
router.get('/customer/count', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), customerController.getCustomerCount);
router.get('/customer/:id_customer', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), customerController.getCustomerById);
router.post('/customer', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), customerController.createCustomer);
router.put('/customer/:id_customer', authMiddleware.authenticate, authMiddleware.authorizeRole([1, 9]), customerController.updateCustomer);

export default router;

