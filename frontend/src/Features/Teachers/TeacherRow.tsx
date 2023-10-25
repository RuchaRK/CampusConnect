import * as React from 'react';
import { useDispatch } from 'react-redux';
import { TeacherModal } from './TeacherModal';
import { updateTeacher } from '../../Reducer/teacherSlice';

export const TeacherRow = ({ objectToShow }) => {
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
      <p>{objectToShow.name}</p>
      <p> {objectToShow.subject}</p>
      <p>{objectToShow.contactNumber}</p>
      <p> {objectToShow.address}</p>
      <button onClick={openEditModal}>Update Details</button>

      <TeacherModal
        modalIsOpen={editModal}
        closeModal={closeEditModal}
        handleSubmit={editDetails}
        initialState={objectToShow}
      />
    </div>
  );
};
