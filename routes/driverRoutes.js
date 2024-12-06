import express from 'express';
import multer from 'multer';
import * as driverController from '../controllers/driverController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/drivers');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});
const upload = multer({ storage }).fields([
    { name: 'foto_ktp_driver', maxCount: 1 },
    { name: 'foto_sim_driver', maxCount: 1 }
]);

router.get('/driver', authMiddleware.authenticate, authMiddleware.authorizeRole([1,9,11]), driverController.getAllDrivers);
router.get('/driver/count', authMiddleware.authenticate, authMiddleware.authorizeRole([1,9,11]), driverController.getDriverCount);
router.get('/driver/search', authMiddleware.authenticate, authMiddleware.authorizeRole([1,9,11]), driverController.searchDriverByName);
router.get('/driver/:id_driver', authMiddleware.authenticate, driverController.getDriverById);

router.post(
    '/driver',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1,11]),
    upload,
    driverController.createDriver
);

router.put('/driver/:id_driver', authMiddleware.authenticate, authMiddleware.authorizeRole([1,11]), driverController.updateDriver);
router.delete('/driver/:id_driver', authMiddleware.authenticate, authMiddleware.authorizeRole([1,11]), driverController.deleteDriver);

export default router;
