import React from 'react';
import styled from 'styled-components';

const StyledDeleteModal = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModalContainer = styled.div`
  display: flex:
  max-width: 50%;
  background-color: white;
  padding: 48px;

  p {
    margin-bottom: 4px;
  }
`;

const StyledNo = styled.button``;
const StyledYes = styled.button``;

const DeleteModal = ({ confirmDelete, closeDeleteModal }) => {
  return (
    <StyledDeleteModal>
      <StyledModalContainer>
        <StyledNo onClick={closeDeleteModal}>No</StyledNo>
        <StyledYes onClick={confirmDelete}>Yes</StyledYes>
      </StyledModalContainer>
    </StyledDeleteModal>
  );
};

export default DeleteModal;
