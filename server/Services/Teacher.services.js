const Teacher = require("../models/Teacher.model");

async function getAllTeachers() {
  try {
    const teachers = await Teacher.find();
    return teachers;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getATeacher(teacherId) {
  try {
    const teacher = Teacher.findById(teacherId);
    return teacher;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addNewTeacher(teacherData) {
  try {
    const teacher = new Teacher(teacherData);
    const newTeacher = await teacher.save();
    return newTeacher;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function updateNewTeacher(teacherId, teacherData) {
  try {
    const updatedTeacherData = await Teacher.findByIdAndUpdate(
      teacherId,
      teacherData,
      { new: true }
    );
    return updatedTeacherData;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteTeacher(teacherId) {
  try {
    const deletedTeacher = await Teacher.findByIdAndDelete(teacherId);
    return deletedTeacher;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  getAllTeachers,
  getATeacher,
  addNewTeacher,
  updateNewTeacher,
  deleteTeacher,
};
