import {DataSource, DataSourceOptions} from "typeorm";
import dbConfig from '../config/index';
import logger from '../logger/logger'
import { Authors } from "./model/authors";
import { Books } from "./model/books";
import { Library } from "./model/library";
import { LibraryBooks } from "./model/libraryBooks";

const dataSourceOptions: DataSourceOptions = {
    type: "mysql",
    host: dbConfig.HOST,
    port: Number(dbConfig.PORT),
    username: dbConfig.USER,
    password: dbConfig.PASSWORD,
    database: dbConfig.DB,
    entities: [
        Authors,Library,Books,LibraryBooks
    ],
    synchronize: true,
    logging: true
};

export const dataSource = new DataSource(dataSourceOptions);