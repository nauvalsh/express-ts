import './paths';
import express from 'express';
import config from 'config';
import connect from './utils/connect';
import logger from './utils/logger';
import routes from './routes';
import actuator from 'express-actuator';

const port = config.get<number>('server.port');

const app = express();

app.use(express.json());

// Health check: https://github.com/rcruzper/express-actuator
app.use(actuator());

app.listen(port, () => {
  logger.info(`App is running on port ${port}`);
  connect();
  routes(app);
});
