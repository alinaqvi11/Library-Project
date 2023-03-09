// import * as express from 'express'
// const app = express();
import { dataSource } from './src/infrastructure/database/mysqlConnection';
import app from './http/app';
import logger from './src/infrastructure/logger/logger';

const port  = process.env.PORT || 4000;
(async () => {
    try {
        await dataSource.initialize();
        app.listen(port, () => {
            logger.info(` Listening on port ${port} `);
        });
    } catch (e) {
        logger.error(`ServerError: ${e.message}`);
    }
})();