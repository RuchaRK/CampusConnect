const express = require("express");

const teacherRouter = express.Router();

const {
  getAllTeachers,
  getATeacher,
  addNewTeacher,
  updateNewTeacher,
  deleteTeacher,
} = require("../Services/Teacher.services");

teacherRouter.get("/", async (req, res) => {
  try {
    const allTeachers = await getAllTeachers();
    res.status(200).json({ message: "Success", allTeachers });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

teacherRouter.get("/:teacherId", async (req, res) => {
  try {
    const { teacherId } = req.params;
    const teacher = await getATeacher(teacherId);
    res.status(200).json({ message: "Success", teacher });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

teacherRouter.delete("/:teacherId", async (req, res) => {
  try {
    const { teacherId } = req.params;
    await deleteTeacher(teacherId);
    const allTeachers = await getAllTeachers();
    res.status(200).json({ message: "Success", allTeachers });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

teacherRouter.post("/", async (req, res) => {
  try {
    const teacherDetails = req.body;
    await addNewTeacher(teacherDetails);
    const allTeachers = await getAllTeachers();
    res.status(200).json({ message: "Success", allTeachers });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

teacherRouter.post("/:teacherId", async (req, res) => {
  try {
    const { teacherId } = req.params;
    const updateData = req.body;

    console;

    console.log(teacherId, updateData);

    const updatedTeacher = await updateNewTeacher(teacherId, updateData);
    console.log(updatedTeacher);
    const allTeachers = await getAllTeachers();
    res.status(200).json({ message: "Success", allTeachers });
  } catch (error) {
    res.status(500).json({
      message: "Error occurred while fetching data.",
      error: error.message,
    });
  }
});

module.exports = teacherRouter;
