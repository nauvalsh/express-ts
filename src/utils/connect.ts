import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
  const dbUri = config.get<string>('db.uri');

  try {
    await mongoose.connect(dbUri);
    return logger.info('Connected to DB');
  } catch (e) {
    logger.error('Could not connect to DB');
    process.exit(1);
  }
}

export default connect;
