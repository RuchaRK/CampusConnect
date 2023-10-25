import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTeachers, addNewTeacher, updateTeacher } from '../../Reducer/teacherSlice';
import { TeacherModal } from './TeacherModal';
import { TableRow } from './TeacherRow';

export const Teachers = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { status, error, teachers } = useSelector((state) => state.teachers);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addTeacher = (teacherData) => {
    dispatch(addNewTeacher(teacherData));
  };

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTeachers());
    }
  }, [status, dispatch]);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Something is wrong {error}</p>}
      <div>
        <TeacherModal modalIsOpen={modalIsOpen} closeModal={closeModal} handleSubmit={addTeacher} />
        {teachers &&
          teachers.map((tutor) => {
            return <TableRow rowType="Teacher" objectToShow={tutor} />;
          })}
      </div>
    </div>
  );
};
