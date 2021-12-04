/* eslint-disable no-useless-catch */
/* eslint-disable import/extensions */
import initModels from '../models/init-models.js';

const { users } = initModels();

// Obtener todos los usuarios
export const getAll = async () => {
  try {
    const result = await users.findAll();
    return result;
  } catch (error) {
    throw error;
  }
};
// Obtener un usuario por su id
export const getById = async (id) => {
  try {
    const result = await users.findByPk(id);
    return result;
  } catch (error) {
    throw error;
  }
};
// Agregar a un usuario
export const add = async (obj) => {
  try {
    const result = await users.create(obj);
    return result;
  } catch (error) {
    throw error;
  }
};
// Actualizar un usuario por su id
export const update = async (id, obj) => {
  try {
    const result = await users.update(obj, { where: { id } });
    return result;
  } catch (error) {
    throw error;
  }
};
// Eliminar a un usuatio por su id
export const del = async (id) => {
  try {
    const result = await users.destroy({ where: { id } });
    return result;
  } catch (error) {
    throw error;
  }
};
