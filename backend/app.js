import  Express  from "express";

const app = Express()


app.get("/", (req,res) => res.json({"message": "api server is up"}));


app.listen(5009, () => {
    console.log("task manager backend started on port 5009");
});