/* eslint-disable import/extensions */
import express from 'express';
import router from './routers/users.router.js';

const app = express();

app.use(router);

export default app;