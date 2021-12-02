/* eslint-disable import/extensions */
import { Router } from 'express';
import {
  getAllCtrl,
  getByIdCtrl,
  addCtrl,
  updateCtrl,
  delCtrl,
} from '../controllers/users.controller.js';

const router = Router();

// Obtener todos los usuarios
router.get('/users', getAllCtrl);
// Obtener un usuario por su id
router.get('/users/:id', getByIdCtrl);
// Agregar a un usuario
router.post('/users', addCtrl);
// Actualizar un usuario por su id
router.put('/users/:id', updateCtrl);
// Eliminar a un usuatio por su id
router.delete('/users/:id', delCtrl);

export default router;
