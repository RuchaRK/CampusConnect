import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchStudents = createAsyncThunk('students/fetchStudents', async () => {
  const response = await axios.get('/api/students');
  return response.data?.allStudents;
});

export const addStudent = createAsyncThunk('students/addStudent', async (newStudent) => {
  const response = await axios.post('/api/students', newStudent);
  return response.data?.allStudents;
});

export const deleteStudent = createAsyncThunk('/students/deleteStudent', async (id) => {
  const response = await axios.delete(`/api/students/${id}`);
  return response.data?.allStudents;
});

export const updateStudent = createAsyncThunk(
  '/students/updateStudent',
  async ({ id, updateData }) => {
    const response = await axios.post(`/api/students/${id}`, updateData);
    return response.data?.allStudents;
  }
);

export const studentSlice = createSlice({
  name: 'students',
  initialState: {
    status: 'idle',
    error: null,
    students: [],
    student: null,
    wizardStatus: 'idle',
    wizardError: 'idle'
  },
  reducers: {},
  extraReducers: {
    [fetchStudents.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchStudents.fulfilled]: (state, action) => {
      state.status = 'success';
      state.students = action.payload;
    },
    [fetchStudents.rejected]: (state, action) => {
      state.status = 'error';

      state.error = action.error.message;
    },
    [addStudent.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [addStudent.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.students = action.payload;
    },
    [addStudent.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [deleteStudent.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [deleteStudent.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.students = action.payload;
    },
    [deleteStudent.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [updateStudent.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [updateStudent.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.students = action.payload;
    },
    [updateStudent.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    }
  }
});

export const studentReducer = studentSlice.reducer;
