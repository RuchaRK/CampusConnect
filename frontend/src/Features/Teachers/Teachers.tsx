import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Error } from '../../Components/Error';
import { ListPage } from '../../Components/ListPage';
import { Loader } from '../../Components/Loader';
import { fetchTeachers, addNewTeacher, deleteTeacher } from '../../Reducer/teacherSlice';
import { TeacherModal } from './TeacherModal';
import { EditTeacher } from './EditTeacher';
import { AiOutlineDelete } from 'react-icons/ai';

export const Teachers = () => {
  const dispatch = useDispatch();
  const { status, error, teachers, wizardStatus } = useSelector((state) => state.teachers);
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

  const deleteTeacherById = (id) => {
    dispatch(deleteTeacher(id));
  };

  React.useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchTeachers());
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
        column={['name', 'subject', 'contactNumber', 'address', '']}
        data={teachers.map((teacher) => [
          teacher.name,
          teacher.subject,
          teacher.contactNumber,
          teacher.address,
          <EditTeacher objectToShow={teacher} />,
          <button onClick={() => deleteTeacherById(teacher._id)}>
            <AiOutlineDelete />
          </button>
        ])}
        title="Lets start by burning some calories!!!"
        description="Don't wish for a good body, work for it..."
        image=""
        openForm={openModal}
      />
      <TeacherModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        handleSubmit={addTeacher}
        initialState={{}}
      />
    </div>
  );
};
