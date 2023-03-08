import * as bunyan from 'bunyan';
const logger = bunyan.createLogger({
    name: 'library-project',
    streams: [
        {
            level: 'info',
            stream: process.stdout
        },
        {
            level: 'error',
            stream: process.stdout
        }
    ]
});

export default logger;