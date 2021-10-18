import logger from 'pino';
import dayjs from 'dayjs';


const transport = logger.transport({
  target: 'pino-pretty',
  options: { destination: 1 } // use 2 for stderr
})

const log = logger({
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format("DD/MM/YYYY HH:mm:ss")}"`
},transport)



export default log;