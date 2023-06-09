import knex from "knex";
import { database } from "./config.js";

const knex0 = knex({
  client: 'mssql',
  connection: database,
});

import { TYPES } from 'tedious';

console.log(database)
export default knex({
  client: 'mssql',
  connection: {
    server: database.host,
    authentication: {
      type: "default",
      options: {
        userName: database.user,
        password: database.password,
      },
    },
    options: {
      mapBinding: value => {
        // bind all strings to varchar instead of nvarchar
        if (typeof value === 'string') {
          return {
            type: TYPES.VarChar,
            value
          };
        }

        // allow dev to pass tedious type at query time
        if (value != null && value.type) {
          return {
            type: value.type,
            value: value.value
          };
        }
        // undefined is returned; falling back to default mapping function
      }
    }
  }
});
