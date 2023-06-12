import knex from "knex";
import { env } from "./config/index.js";

import { default as config } from "./config/knexfile.js";


export default knex(config[env]);