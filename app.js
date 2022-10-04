/* eslint-disable import/extensions */
import express from 'express';
import pino from 'pino';
import dotenv from 'dotenv';
import 'express-async-errors';
import middleware from './middlewares/index.middleware.js';

dotenv.config();

const app = express();
const logger = pino();

middleware(app);

app.listen(process.env.PORT, () => {
  let port = process.env.PORT;
  if (port == null || port === '') {
    port = 4000;
  }

  logger.info(`Server is running on port ${port}`);
});

export default logger;
