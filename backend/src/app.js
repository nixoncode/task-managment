import express from "express";
import morgan from "morgan";
import database from "./database.js";
import router from "./routes/issues.route.js";
import bodyParser from "body-parser";

// App
const app = express();

app.use(bodyParser.json());
app.use(morgan("common"));

app.get("/", function(req, res, next) {
  database.raw("SELECT @@VERSION")
    .then(([rows, _]) => rows[""])
    .then((row) => res.json({ message: `Hello from ${row}` }))
    .catch(next);
});

app.use("/issues", router);

export default app;