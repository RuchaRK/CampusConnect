import * as React from 'react';
import { useDispatch } from 'react-redux';
import { StudentModal } from '../../Features/Students/StudentModal';
import { updateStudent } from '../../Reducer/studentSlice';

export const StudentRow = ({ objectToShow }) => {
  const dispatch = useDispatch();

  const [editModal, setEditModal] = React.useState(false);

  function openEditModal() {
    setEditModal(true);
  }

  function closeEditModal() {
    setEditModal(false);
  }

  const editDetails = (updateData) => {
    dispatch(updateStudent({ id: updateData._id, updateData }));
  };

  return (
    <div key={objectToShow.postID}>
      <p>{objectToShow.name}</p>
      <p> {objectToShow.age}</p>
      <p>{objectToShow.grade}</p>
      <p> {objectToShow.gender}</p>
      <p>{objectToShow.attendance} </p>
      <p>{objectToShow.percentage}</p>

      <button onClick={openEditModal}>Update Details</button>

      <StudentModal
        modalIsOpen={editModal}
        closeModal={closeEditModal}
        handleSubmit={editDetails}
        initialState={objectToShow}
      />
    </div>
  );
};
