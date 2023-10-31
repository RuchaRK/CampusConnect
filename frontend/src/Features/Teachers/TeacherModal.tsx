import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Model } from '../../Components/Model';
import { ButtonContainer, FormContainer, Input, Title } from '../../Components/Model.styles';

export const TeacherModal = ({ modalIsOpen, closeModal, handleSubmit, initialState }) => {
  const [formInput, setFormInput] = useState(initialState ? initialState : {});
  const { wizardStatus } = useSelector((state) => state.teachers);

  const saveFormDetails = (event) => {
    setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    if (wizardStatus === 'success') {
      closeModal();
    }
  }, [wizardStatus]);

  return (
    <div>
      <Model isOpen={modalIsOpen} onRequestClose={closeModal}>
        <FormContainer>
          <Title>New Teacher</Title>
          Name:
          <Input
            type="text"
            name="name"
            value={formInput.name}
            onChange={(event) => saveFormDetails(event)}
          />
          Subject:
          <Input
            type="text"
            name="subject"
            value={formInput.subject}
            onChange={(event) => saveFormDetails(event)}
          />
          Address:
          <Input
            type="text"
            name="address"
            value={formInput.address}
            onChange={(event) => saveFormDetails(event)}
          />
          contactNumber:
          <Input
            type="number"
            name="contactNumber"
            value={formInput.contactNumber}
            onChange={(event) => saveFormDetails(event)}
          />
          <ButtonContainer>
            <button
              disabled={wizardStatus === 'loading'}
              onClick={(e) => {
                e.preventDefault();
                handleSubmit(formInput);
                closeModal();
              }}>
              {wizardStatus === 'loading' ? 'Submitting...' : 'Submit'}
            </button>
            <button onClick={closeModal}>close</button>
          </ButtonContainer>
        </FormContainer>
      </Model>
    </div>
  );
};
