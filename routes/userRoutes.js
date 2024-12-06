import express from 'express';
import multer from 'multer';
import * as userController from '../controllers/userController.js';
import * as authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/users');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});
const upload = multer({ storage });

router.get('/user',  authMiddleware.authenticate, authMiddleware.authorizeRole([1,9]), userController.getAllUsers);
router.get('/user/:id_user', userController.getUserData);

router.post(
    '/user',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1,9,11]),
    upload.single('foto_user'),
    userController.createUser
);

router.put(
    '/user/:id_user',
    authMiddleware.authenticate,
    authMiddleware.authorizeRole([1, 9]),
    upload.single('foto_user'),
    userController.updateUser
);

router.delete('/user/:id_user',  authMiddleware.authenticate, authMiddleware.authorizeRole([1,9]), userController.deleteUser);

router.get('/dev/user', userController.getAllUsers);

router.get('/dev/user/:id_user', userController.getUserData);

router.post(
    '/dev/user',
    upload.single('profile_picture'),
    userController.createUser
);

router.put(
    '/dev/user/:id_user',
    upload.single('profile_picture'),
    userController.updateUser
);

router.delete('/dev/user/:id_user', userController.deleteUser);

export default router;
