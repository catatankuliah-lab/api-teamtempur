// routes/roleRoutes.js
import express from 'express';
import * as roleController from '../controllers/Rolecontroller.js';

const router = express.Router();

router.get('/role', roleController.getAllRoles);
router.post('/role', roleController.createRole);
router.put('/role/:id_role', roleController.updateRole);
router.delete('/role/:id_role', roleController.deleteRole);

export default router;
