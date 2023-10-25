const Student = require("../models/Student.model");

async function showAllStudents() {
  try {
    const allStudents = await Student.find();
    return allStudents;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function findStudentById(studentId) {
  try {
    const student = Student.findById(studentId);
    return student;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function addNewStudent(studentData) {
  try {
    const data = new Student(studentData);
    const newStudent = await data.save();
    return newStudent;
  } catch (error) {
    console.error(error.message);
    throw new Error(error.message);
  }
}

async function updateStudent(studentId, studentInfo) {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      studentId,
      studentInfo,
      {
        new: true,
      }
    );
    return updatedStudent;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function deleteStudent(studentId) {
  try {
    const deletedStudent = await Student.findByIdAndDelete(studentId);
    return deletedStudent;
  } catch (error) {
    throw new Error(error.message);
  }
}

module.exports = {
  showAllStudents,
  findStudentById,
  updateStudent,
  addNewStudent,
  deleteStudent,
};
