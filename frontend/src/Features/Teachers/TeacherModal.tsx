import { useState } from 'react';
import Modal from 'react-modal';

export const TeacherModal = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = useState(initialState ? initialState : {});

  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <div>Add new Teacher</div>
        <form>
          Name:
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={(event) => saveFormDetails(event)}
          />
          Subject:
          <input
            type="text"
            name="subject"
            value={formInput.subject}
            onChange={(event) => saveFormDetails(event)}
          />
          Address:
          <input
            type="text"
            name="address"
            value={formInput.address}
            onChange={(event) => saveFormDetails(event)}
          />
          contactNumber:
          <input
            type="number"
            name="contactNumber"
            value={formInput.contactNumber}
            onChange={(event) => saveFormDetails(event)}
          />
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(formInput);
              closeModal();
            }}>
            Submit
          </button>
        </form>
        <button onClick={closeModal}>close</button>
      </Modal>
    </div>
  );
};
