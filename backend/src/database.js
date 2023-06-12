import knex from "knex";
import { database } from "./config.js";


export default knex({
  client: "mssql",
  connection: {
    server: database.host,
    user: database.user,
    password: database.password,
    database: database.database,
    options: {
      port: database.port,
      trustServerCertificate: true
    }
  }
});
