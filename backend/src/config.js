import fs from "fs";


const readFileSync = filename => fs.readFileSync(filename).toString("utf8");


export const database = {
    host: process.env.DATABASE_HOST || "localhost",
    port: parseInt(process.env.DATABASE_PORT),
    database: process.env.DATABASE_DB,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD
  };
  export const port = process.env.PORT || 8080;
