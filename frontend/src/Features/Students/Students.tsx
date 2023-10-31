import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../Components/Error';
import { ListPage } from '../../Components/ListPage';
import { Loader } from '../../Components/Loader';

import { AiOutlineDelete } from 'react-icons/ai';
import { addStudent, deleteStudent, fetchStudents } from '../../Reducer/studentSlice';
import { EditStudent } from './EditStudent';
import { StudentModal } from './StudentModal';

export const Students = () => {
  const dispatch = useDispatch();
  const { status, error, students, wizardStatus } = useSelector((state) => state.students);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addTeacher = (teacherData) => {
    dispatch(addStudent(teacherData));
  };

  const deleteStudentById = (id) => {
    dispatch(deleteStudent(id));
  };

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchStudents());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <Loader />;
  }
  if (error) {
    return <Error />;
  }

  return (
    <div>
      <ListPage
        column={['name', 'age', 'grade', 'gender', 'attendance', 'percentage', '', '']}
        data={students.map((student) => [
          student.name,
          student.age,
          student.grade,
          student.gender,
          student.attendance,
          student.percentage,
          <EditStudent objectToShow={student} />,
          <button onClick={() => deleteStudentById(student._id)}>
            <AiOutlineDelete />
          </button>
        ])}
        title="Lets start by burning some calories!!!"
        description="Don't wish for a good body, work for it..."
        image=""
        openForm={openModal}
      />
      <StudentModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={addTeacher}
        initialState={{}}
      />
    </div>
  );
};
