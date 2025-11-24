import express from 'express';
import { login, perfil, registro } from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', registro)
router.post('/login', login)

router.get('/perfil', authMiddleware, perfil);

export default router;