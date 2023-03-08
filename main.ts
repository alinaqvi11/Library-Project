// import * as express from 'express'
// const app = express();
import { dataSource } from './infrastructure/database/mysqlConnection';
import app from './http/app';
import logger from './infrastructure/logger/logger';
// import books from './infrastructure/database/model/books';
// app.get('/books', (req,res) => {
//     const data = books.findAll()
//     res.send("ok")
// })
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