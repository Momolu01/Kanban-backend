/* eslint-disable no-useless-catch */
/* eslint-disable import/extensions */
import _sequelize from 'sequelize';
import Model from '../models/init-models.js';

const { Op } = _sequelize;
const { status } = Model();

// Obtener todos los Status
export const getAll = async () => {
  try {
    const result = await status.findAll({
      atributes: { exclude: ['create_at', 'updated_at'] },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

// Obtener un Status por su id
export const getById = async (id) => {
  try {
    const result = await status.findByPk(id);
    return result;
  } catch (error) {
    throw error;
  }
};

// Agregar un status nuevo
export const add = async (obj) => {
  try {
    const result = await status.create(obj);
    return result;
  } catch (error) {
    throw error;
  }
};

// Obtener el último status
export const getLast = async () => {
  try {
    const allStatus = await status.findAll({
      atributes: { exclude: ['create_at', 'updated_at'] },
    });
    const result = allStatus[allStatus.length - 1];
    return result;
  } catch (error) {
    throw error;
  }
};

// Obtener el primer status
export const getFirst = async () => {
  try {
    const allStatus = await status.findAll({
      atributes: { exclude: ['create_at', 'updated_at'] },
    });
    const result = allStatus[0];
    return result;
  } catch (error) {
    throw error;
  }
};

// obtener el siguiente status del un status seleccionado por id
export const getNext = async (id) => {
  try {
    const result = await status.findone({
      where: {
        after_status: id,
      },
    });
    return result;
  } catch (error) {
    throw error;
  }
};

// Actualizar status
export const update = async (id, obj) => {
  try {
    const statusA = await status.findByPk(id);
    const statusB = await getNext(id);
    if (statusA.id === (await getFirst()) && obj.status === statusB.id) {
      const statusC = await getNext(statusB.id);
      await status.update({ after_status: 0 }, { where: { id: statusB.id } });
      await status.update(
        { after_status: statusB.id },
        { where: { id: statusA.id } },
      );
      await status.update(
        { after_status: statusA.id },
        { where: { id: statusC.id } },
      );
    }
  } catch (error) {
    throw error;
  }
};

// Eliminar un status
export const del = async (id) => {};
