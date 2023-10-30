import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTeachers = createAsyncThunk('teachers/fetchTeachers', async () => {
  const response = await axios.get('/api/teachers');
  return response.data?.allTeachers;
});

export const fetchATeacher = createAsyncThunk('teacher/fetchATeacher', async (id) => {
  const response = await axios.get(`/api/teachers/${id}`);
  return response.data?.teacher;
});

export const addNewTeacher = createAsyncThunk('teachers/addTeacher', async (newTeacher) => {
  const response = await axios.post('/api/teachers', newTeacher);
  return response.data?.allTeachers;
});

export const deleteTeacher = createAsyncThunk('teachers/deleteTeacher', async (id) => {
  const response = await axios.delete(`/api/teachers/${id}`);
  return response.data?.allTeachers;
});

export const updateTeacher = createAsyncThunk(
  'teachers/updateTeacher',
  async ({ id, updateData }) => {
    const response = await axios.post(`/api/teachers/${id}`, updateData);
    return response.data?.allTeachers;
  }
);

export const teacherSlice = createSlice({
  name: 'teachers',
  initialState: {
    status: 'idle',
    error: null,
    teachers: [],
    teacher: null,
    wizardStatus: 'idle',
    wizardError: 'idle'
  },
  reducers: {},
  extraReducers: {
    [fetchTeachers.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTeachers.fulfilled]: (state, action) => {
      state.status = 'success';
      state.teachers = action.payload;
    },
    [fetchTeachers.rejected]: (state, action) => {
      state.status = 'error';

      state.error = action.error.message;
    },
    [fetchATeacher.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchATeacher.fulfilled]: (state, action) => {
      state.status = 'success';
      state.teacher = action.payload;
    },
    [fetchATeacher.rejected]: (state, action) => {
      state.status = 'error';

      state.error = action.error.message;
    },
    [addNewTeacher.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [addNewTeacher.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.teachers = action.payload;
    },
    [addNewTeacher.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [deleteTeacher.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [deleteTeacher.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.teachers = action.payload;
    },
    [deleteTeacher.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    },
    [updateTeacher.pending]: (state) => {
      state.wizardStatus = 'loading';
    },
    [updateTeacher.fulfilled]: (state, action) => {
      state.wizardStatus = 'success';
      state.teachers = action.payload;
    },
    [updateTeacher.rejected]: (state, action) => {
      (state.wizardError = 'error'), (state.error = action.error.message);
    }
  }
});

export const teacherReducer = teacherSlice.reducer;
