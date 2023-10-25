import { useState } from 'react';
import Modal from 'react-modal';

export const StudentModal = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = useState(initialState ? initialState : {});

  console.log('FormInput - ', formInput);
  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
        <div>Add new Student</div>
        <form>
          Name:
          <input
            type="text"
            name="name"
            value={formInput.name}
            onChange={(event) => saveFormDetails(event)}
          />
          Age:
          <input
            type="number"
            name="age"
            value={formInput.age}
            onChange={(event) => saveFormDetails(event)}
          />
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={formInput ?? formInput.gender === 'Male'}
            onChange={(event) => saveFormDetails(event)}
          />
          Male
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={formInput ?? formInput.gender === 'Female'}
            onChange={(event) => saveFormDetails(event)}
          />
          Female Grade:
          <input
            type="number"
            name="grade"
            value={formInput.grade}
            onChange={(event) => saveFormDetails(event)}
          />
          Attendance:
          <input
            type="number"
            name="attendance"
            value={formInput.attendance}
            onChange={(event) => saveFormDetails(event)}
          />
          Percentage:
          <input
            type="number"
            name="percentage"
            value={formInput.percentage}
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
