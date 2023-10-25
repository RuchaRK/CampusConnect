import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../../Reducer/studentSlice';
import { StudentModal } from './StudentModal';
import { addStudent } from '../../Reducer/studentSlice';
import { StudentRow } from './StudentRow';

export const Students = () => {
  const state = useSelector((state) => state);
  const { status, error, students } = useSelector((state) => state.students);
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addNewStudent = (studentData) => {
    dispatch(addStudent(studentData));
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      <StudentModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={addNewStudent}
      />
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Something is wrong {error}</p>}
      <div>
        {students &&
          students.map((peer) => {
            return <StudentRow objectToShow={peer} />;
          })}
      </div>
    </div>
  );
};
