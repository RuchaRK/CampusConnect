import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TeacherModal } from './TeacherModal';
import { updateTeacher } from '../../Reducer/teacherSlice';
import { BiEdit } from 'react-icons/bi';

export const EditTeacher = ({ objectToShow }) => {
  const dispatch = useDispatch();

  const [editModal, setEditModal] = React.useState(false);

  function openEditModal() {
    setEditModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  const editDetails = (updateData) => {
    dispatch(updateTeacher({ id: updateData._id, updateData }));
  };

  return (
    <div key={objectToShow.postID}>
      <button onClick={openEditModal}>
        <BiEdit />
      </button>
      <TeacherModal
        modalIsOpen={editModal}
        closeModal={closeEditModal}
        handleSubmit={editDetails}
        initialState={objectToShow}
      />
    </div>
  );
};
