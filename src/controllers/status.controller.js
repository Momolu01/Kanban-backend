/* eslint-disable import/extensions */
import { getAll } from '../services/status.service.js';

export const getAllCtrl = async (req, res, next) => {
  try {
    const allStatus = await getAll();
    res.json(allStatus);
  } catch (error) {
    next(error);
  }
};

export const getByIdCtrl = async (req, res, next) => {};
