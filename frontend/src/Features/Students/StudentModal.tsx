import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Model } from '../../Components/Model';
import { ButtonContainer, FormContainer, Input, Title } from '../../Components/Model.styles';

export const StudentModal = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = useState(initialState ? initialState : {});
  const { wizardStatus } = useSelector((state) => state.students);

  useEffect(() => {
    if (wizardStatus === 'success') {
      closeModal();
    }
  }, [wizardStatus]);

  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <Model isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Example Modal">
        <Title>Add New Student</Title>
        <FormContainer>
          Name:
          <Input
            type="text"
            name="name"
            value={formInput.name}
            onChange={(event) => saveFormDetails(event)}
          />
          Age:
          <Input
            type="number"
            name="age"
            value={formInput.age}
            onChange={(event) => saveFormDetails(event)}
          />
          Gender
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px' }}>
            <div
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
              <Input
                type="radio"
                name="gender"
                value="Female"
                checked={formInput ?? formInput.gender === 'Female'}
                onChange={(event) => saveFormDetails(event)}
              />
              Male
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
              <Input
                type="radio"
                name="gender"
                value="Male"
                checked={formInput ?? formInput.gender === 'Male'}
                onChange={(event) => saveFormDetails(event)}
              />
              Female
            </div>
          </div>
          Grade:
          <Input
            type="number"
            name="grade"
            value={formInput.grade}
            onChange={(event) => saveFormDetails(event)}
          />
          Attendance:
          <Input
            type="number"
            name="attendance"
            value={formInput.attendance}
            onChange={(event) => saveFormDetails(event)}
          />
          Percentage:
          <Input
            type="number"
            name="percentage"
            value={formInput.percentage}
            onChange={(event) => saveFormDetails(event)}
          />
        </FormContainer>
        <ButtonContainer>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleSubmit(formInput);
            }}>
            Submit
          </button>
          <button onClick={closeModal}>close</button>
        </ButtonContainer>
      </Model>
    </div>
  );
};
