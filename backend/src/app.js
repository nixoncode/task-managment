import express  from "express";
import morgan from "morgan";
import database from "./database.js";

// App
const app = express();

app.use(morgan("common"));

app.get("/", function(req, res, next) {
  database.raw("select VERSION() version")
    .then(([rows, columns]) => rows[0])
    .then((row) => res.json({ message: `Hello from MySQL ${row.version}` }))
    .catch(next);
});


export default app;