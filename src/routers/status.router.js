/* eslint-disable import/extensions */
import { Router } from 'express';
import { getAllCtrl } from '../controllers/status.controller.js';

const router = Router();

router.get('/status', getAllCtrl);

export default router;
