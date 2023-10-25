const mongoose = require("mongoose");

const schoolSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  totalStudents: {
    type: Number,
    required: true,
  },
  averageAttendance: {
    type: Number,
    required: true,
  },
  averageMarks: {
    type: Number,
    required: true,
  },
  topStudent: {
    type: String,
    required: true,
  },
});

const School = mongoose.model("School", schoolSchema);

module.exports = School;
