import * as React from 'react';
import { BiEdit } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { updateStudent } from '../../Reducer/studentSlice';
import { StudentModal } from './StudentModal';

export const EditStudent = ({ objectToShow }) => {
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
    <div>
      <button onClick={openEditModal}>
        <BiEdit />
      </button>
      <StudentModal
        modalIsOpen={editModal}
        closeModal={closeEditModal}
        handleSubmit={editDetails}
        initialState={objectToShow}
      />
    </div>
  );
};
