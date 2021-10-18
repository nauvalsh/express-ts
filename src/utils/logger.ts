import pino from 'pino';
import dayjs from 'dayjs';

const loger = pino({
  base: {
    pid: false
  },
  prettyPrint: true, // only valid for pinot v6.x.x
  timestamp: () => `,"time":"${dayjs().format('DD/MM/YYYY HH:mm:ss')}"`
});

export default loger;
