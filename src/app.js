/* eslint-disable import/extensions */
import express from 'express';
import routerUsers from './routers/users.router.js';
import routerStatus from './routers/status.router.js';

const app = express();

app.use(express.json());

app.use(routerUsers);
app.use(routerStatus);

export default app;
