import * as React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../Components/Error';
import { ListPage } from '../../Components/ListPage';
import { Loader } from '../../Components/Loader';
import { Link } from 'react-router-dom';
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

  const addNewStudent = (studentData) => {
    dispatch(addStudent(studentData));
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
      {status === 'loading' && <p>Loading...</p>}
      {error && <p>Something is wrong {error}</p>}
      <div>
        <ListPage
          column={['Name', 'Age', 'Grade', 'Percentage']}
          data={students.map((student) => [
            <Link to={student._id}>{student.name}</Link>,
            student.age,
            student.grade,
            student.percentage,
            <EditStudent key={student._id} objectToShow={student} />,
            <button key={student._id} onClick={() => deleteStudentById(student._id)}>
              <AiOutlineDelete />
            </button>
          ])}
          title="Students"
          description=""
          image=""
          openForm={openModal}
        />
        <StudentModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          handleSubmit={addNewStudent}
        />
      </div>
    </div>
  );
};
