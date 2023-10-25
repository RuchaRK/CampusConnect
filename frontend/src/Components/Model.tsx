import * as React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    width: '25%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

export const Model = ({ children, onRequestClose, isOpen }) => {
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={onRequestClose}>
      {children}
    </Modal>
  );
};
