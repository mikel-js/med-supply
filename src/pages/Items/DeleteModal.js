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
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 50%;
  background-color: white;
  padding: 48px;

  p {
    margin-bottom: 4px;
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;

    button {
      width: 80px;
      margin-top: 16px;
      padding: 8px;
      border-radius: 10px;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      border: none;
      cursor: pointer;
    }
  }
`;

const StyledMessage = styled.p``;

const StyledNo = styled.button`
  background: #e6ffe6;
`;

const StyledYes = styled.button`
  background: #ff6666;
`;

const DeleteModal = ({ confirmDelete, closeDeleteModal }) => {
  return (
    <StyledDeleteModal>
      <StyledModalContainer>
        <StyledMessage>
          Are you sure you want to delete the item? This is irreversible!
        </StyledMessage>
        <div>
          <StyledNo onClick={closeDeleteModal}>No</StyledNo>
          <StyledYes onClick={confirmDelete}>Yes</StyledYes>
        </div>
      </StyledModalContainer>
    </StyledDeleteModal>
  );
};

export default DeleteModal;
