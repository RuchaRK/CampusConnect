import * as React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListPage } from '../../Components/ListPage';
import { addStudent, deleteStudent, fetchStudents } from '../../Reducer/studentSlice';
import { StudentModal } from './StudentModal';
import { EditStudent } from './EditStudent';

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

  const deleteStudentById = (id) => {
    dispatch(deleteStudent(id));
  };

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
