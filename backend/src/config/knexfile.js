import { database, env } from "./index.js";

export default {
  development: {
    client: "mssql",
    connection: {
      server: database.host,
      user: database.user,
      password: database.password,
      database: `${database.database}_${env}`,
      options: {
        port: database.port,
        trustServerCertificate: true,
      },
    },
  },

  staging: {
    client: "mssql",
    connection: {
      server: database.host,
      user: database.user,
      password: database.password,
      database: `${database.database}_${env}`,
      options: {
        port: database.port,
        trustServerCertificate: true,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mssql",
    connection: {
      server: database.host,
      user: database.user,
      password: database.password,
      database: `${database.database}_${env}`,
      options: {
        port: database.port,
        trustServerCertificate: true,
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
