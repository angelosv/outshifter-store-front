import { createLogger, format, transports } from 'winston';

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
  transports: [new transports.Console()],
});

export default logger;
