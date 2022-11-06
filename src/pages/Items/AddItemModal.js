import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import iconClose from '../../assets/icons/close.png';

const defaultItemProps = {
  name: null,
  category: null,
  quantity: null,
  price: null,
  brand: null,
  imageUrl: null,
};

const StyledAddModal = styled.div`
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

const StyledLabel = styled.p``;

const StyledName = styled.input``;

const StyledModalContainer = styled.div`
  display: flex:
  flex-direction: column;
  min-width: 30%;
  background-color: white;
  padding: 48px;

  p {
    margin-bottom: 4px;
  }
`;

const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledSubmit = styled.button`
  margin-top: 16px;
  padding: 8px;
  border-radius: 10px;
  background: #e6ffe6;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  border: none;
  cursor: pointer;
`;

const StyledImg = styled.img`
  cursor: pointer;
`;

const StyledImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledError = styled.p`
  color: red;
`;

const AddItemModal = ({ closeModal, getItems }) => {
  const [itemProps, setItemProps] = useState(defaultItemProps);
  const [errorMessage, setErrorMessage] = useState(null);

  const dbUrl = 'https://db-med-supply.herokuapp.com';

  const onInputChange = (e, propName) => {
    e.preventDefault();
    let value = e.target.value;
    if (propName === 'quantity' || propName === 'price') {
      value = parseInt(value);
    }
    const newInputProps = { ...itemProps, [propName]: value };
    setItemProps(newInputProps);
  };

  const onSubmit = async () => {
    const itemHasNull = Object.keys(itemProps).some(
      (key) => itemProps[key] === null
    );
    if (itemHasNull) {
      setErrorMessage('All fields are required!');
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
      return;
    }
    try {
      const res = await axios({
        method: 'post',
        url: `${dbUrl}/items/add`,
        data: itemProps,
      });
      if (res) {
        closeModal();
        getItems();
      }
    } catch (e) {
      console.error('Error', e);
    }
  };
  return (
    <StyledAddModal>
      <StyledModalContainer>
        <StyledImgContainer>
          <StyledImg
            alt='close'
            src={iconClose}
            width='30px'
            onClick={closeModal}
          />
        </StyledImgContainer>
        <StyledInputContainer>
          <StyledLabel>Item Name</StyledLabel>
          <StyledName onChange={(e) => onInputChange(e, 'name')} />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Category</StyledLabel>
          <StyledName onChange={(e) => onInputChange(e, 'category')} />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Quantity</StyledLabel>
          <StyledName
            type='number'
            onChange={(e) => onInputChange(e, 'quantity')}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Price</StyledLabel>
          <StyledName
            type='number'
            onChange={(e) => onInputChange(e, 'price')}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Brand</StyledLabel>
          <StyledName onChange={(e) => onInputChange(e, 'brand')} />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Image URL</StyledLabel>
          <StyledName onChange={(e) => onInputChange(e, 'imageUrl')} />
        </StyledInputContainer>
        <StyledSubmit onClick={onSubmit}>Add Item</StyledSubmit>
        {errorMessage && <StyledError>{errorMessage}</StyledError>}
      </StyledModalContainer>
    </StyledAddModal>
  );
};

export default AddItemModal;
