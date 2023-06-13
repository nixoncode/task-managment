import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import database from "./database.js";
import complainantsRouter from "./routes/complainants.route.js";
import issuesRouter from "./routes/issues.route.js";


// App
const app = express();

app.use(morgan("common"));

app.get("/", function(req, res, next) {
  database.raw("SELECT @@VERSION")
    .then(([rows, columns]) => rows[''])
    .then((row) => res.json({ message: `Hello from ${row}` }))
    .catch(next);
});

app.use("/issues", issuesRouter);
app.use("/complainants", complainantsRouter);


export default app;