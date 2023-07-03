const { createLogger, format, transports } = require('winston');

const { combine, printf, timestamp } = format;

const myFormat = printf(
  // eslint-disable-next-line
  ({ message, timestamp, level }) => `${timestamp} [${level}] ${message}`
);
function loggerConfProd() {
  return createLogger({
    level: 'http',
    format: combine(
      format.colorize(),
      timestamp({ format: 'HH:mm:ss' }),
      myFormat,
    ),

    transports: [
      new transports.File({ filename: 'error.log', level: 'error' }),
      new transports.File({ filename: 'error.log', level: 'warn' }),
      new transports.File({ filename: 'error.log', level: 'info' }),
      new transports.File({ filename: 'error.log', level: 'http' }),
      new transports.File({ filename: 'combined.log' }),
    ],
  });
}
module.exports = loggerConfProd;
