import express  from "express";
import morgan from "morgan";
import database from "./database.js";

// App
const app = express();

app.use(morgan("common"));

app.get("/", function(req, res, next) {
  database.raw("SELECT @@VERSION")
    .then(([rows, columns]) => rows[''])
    .then((row) => res.json({ message: `Hello from ${row}` }))
    .catch(next);
});

export default app;