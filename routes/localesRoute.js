import express from 'express';
import { crear, editar, eliminar, listar } from '../controllers/localController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', listar)
router.post('/nuevo', authMiddleware, crear)
router.route('/:id').put(authMiddleware, editar).delete(authMiddleware, eliminar)

export default router