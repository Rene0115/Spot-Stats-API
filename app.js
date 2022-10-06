/* eslint-disable import/extensions */
import express from 'express';
import pino from 'pino';
import dotenv from 'dotenv';
import 'express-async-errors';
import router from './routes/index.routes.js';

dotenv.config();

const app = express();
const logger = pino();
// app.use('*', (req, res) => {
//   res.status(200).send('server is running, check documentation');
// });
app.use(router);

app.listen(process.env.PORT, () => {
  let port = process.env.PORT;
  if (port == null || port === '') {
    port = 4000;
  }

  logger.info(`Server is running on port ${port}`);
});

export default logger;
