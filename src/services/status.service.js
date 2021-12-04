/* eslint-disable no-useless-catch */
/* eslint-disable import/extensions */
import _sequelize from 'sequelize';
import Model from '../models/init-models.js';

const { Op } = _sequelize;
const { status } = Model();

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

export const getById = async () => {};
