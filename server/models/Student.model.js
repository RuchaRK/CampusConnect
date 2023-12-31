const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  attendance: {
    type: Number,
    required: true,
  },
  percentage: {
    type: Number,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
