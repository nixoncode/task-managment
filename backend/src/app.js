import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import database from "./database.js";
import complainantsRouter from "./routes/complainants.route.js";
import issuesRouter from "./routes/issues.route.js";
import authRoutes from "./features/auth/auth.routes.js";

// App
const app = express();

app.use(bodyParser.json());
app.use(morgan("common"));

app.get("/", function (req, res, next) {
  database
    .raw("SELECT @@VERSION")
    .then(([rows, _]) => rows[""])
    .then(row => res.json({ message: `Hello from ${row}` }))
    .catch(next);
});

app.use("/issues", issuesRouter);
app.use("/complainants", complainantsRouter);
app.use("/auth", authRoutes);

export default app;
