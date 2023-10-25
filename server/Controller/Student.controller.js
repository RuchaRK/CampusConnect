const express = require("express");

const studentRouter = express.Router();

const {
  showAllStudents,
  findStudentById,
  updateStudent,
  addNewStudent,
  deleteStudent,
} = require("../Services/Student.services");

studentRouter.get("/", async (req, res) => {
  try {
    const allStudents = await showAllStudents();
    res.status(200).json({ message: "Success", allStudents });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

studentRouter.get("/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const studentDetails = await findStudentById(studentId);
    res.status(200).json({ message: "Success", studentDetails });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

studentRouter.delete("/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const deletedStudent = await deleteStudent(studentId);
    const allStudents = await showAllStudents();
    res.status(200).json({ message: "Success", allStudents });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

studentRouter.post("/", async (req, res) => {
  try {
    const studentDetails = req.body;

    const newStudent = await addNewStudent(studentDetails);
    const allStudents = await showAllStudents();
    res.status(200).json({ message: "Success", allStudents });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

studentRouter.post("/:studentId", async (req, res) => {
  try {
    const { studentId } = req.params;
    const updateData = req.body;
    await updateStudent(studentId, updateData);
    const allStudents = await showAllStudents();

    res.status(200).json({ message: "Success", allStudents });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = studentRouter;
