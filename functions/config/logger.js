const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const logger = createLogger({
  level: 'debug',
  format: format.combine(
    format.errors({ stack: true }),
    format.metadata(),
    format.timestamp(),
    format.printf(
      ({ timestamp: datetime, level, message }) => `${datetime} [${level.toUpperCase()}]: ${message}`,
    ),
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'combined.log' })
  ]
});




module.exports = logger;
