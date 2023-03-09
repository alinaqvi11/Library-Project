import * as dotenv from 'dotenv';
dotenv.config();
const dbConfig: any =  {
    HOST: process.env.DBHOST,
    USER: process.env.DBUSER,
    PASSWORD: process.env.DBPASSWORD,
    DB: process.env.DBNAME,
    PORT: process.env.DBPORT,
    DIALECT: process.env.DBDIALECT, 
    SYNCHRONIZE: process.env.SYNCHRONIZE,
    LOGGING: process.env.LOGGING
  };
  export default dbConfig