import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';

const port = config.get<number>('server.port')

const app = express();

app.listen(port, () => {
  logger.info(`App is running on port ${port}`);
  connect();
})