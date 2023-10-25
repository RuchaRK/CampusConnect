const express = require("express");

const {
  showAllStudents,
  findStudentById,
  updateStudent,
  addNewStudent,
  deleteStudent,
} = require("../Services/Student.services");

const schoolRouter = express.Router();

schoolRouter.get("/", async (req, res) => {
  try {
    const allStudents = await showAllStudents();
    const totalStudents = await allStudents.length;
    res.status(200).json({ message: "Success", totalStudents });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

schoolRouter.get("/", async (req, res) => {
  try {
    const allStudents = await showAllStudents();
    const totalStudents = await allStudents.length;
    res.status(200).json({ message: "Success", totalStudents });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});
