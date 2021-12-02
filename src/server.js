/* eslint-disable import/extensions */
import dotenv from 'dotenv';
import app from './app.js';

dotenv.config();
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Servidor escuchando sobre el puerto ${PORT}`);
});
