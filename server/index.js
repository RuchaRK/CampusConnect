const express = require("express");
require("dotenv").config();
require("./db");

const PORT = process.env.PORT || 3001;

const app = express();

const studentRouter = require("./Controller/Student.controller");
const teacherRouter = require("./Controller/Teacher.controller");

app.use(express.json());

app.use("/api/students", studentRouter);

app.use("/api/teachers", teacherRouter);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
