/* eslint-disable import/extensions */
import {
  getAll,
  getById,
  add,
  update,
  del,
} from '../services/users.service.js';

// Obtener todos los usuarios
export const getAllCtrl = async (rep, res, next) => {
  try {
    const allUsers = await getAll();
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
};
// Obtener un usuario por su id
export const getByIdCtrl = async (req, res, next) => {
  const id = parseInt(req.param.id, 10);
  try {
    const user = await getById(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};
// Agregar a un usuario
export const addCtrl = async (req, res, next) => {
  const obj = req.body;
  try {
    const newUser = await add(obj);
    res.json(newUser);
  } catch (error) {
    next(error);
  }
};
// Actualizar un usuario por su id
export const updateCtrl = async (req, res, next) => {
  const id = parseInt(req.param.id, 10);
  const obj = req.body;
  try {
    const updUser = await update(obj, { where: { id } });
    res.json(updUser);
  } catch (error) {
    next(error);
  }
};
// Eliminar a un usuatio por su id
export const delCtrl = async (req, res, next) => {
  const id = parseInt(req.param.id, 10);
  try {
    const delUser = await del(id);
    res.json(delUser);
  } catch (error) {
    next(error);
  }
};
