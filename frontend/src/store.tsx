import { configureStore } from '@reduxjs/toolkit';
import { studentReducer } from './Reducer/studentSlice';
import { teacherReducer } from './Reducer/teacherSlice';

// eslint-disable-next-line react-refresh/only-export-components
export const store = configureStore({
  reducer: {
    students: studentReducer,
    teachers: teacherReducer
  }
});
