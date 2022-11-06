import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import iconClose from '../../assets/icons/close.png';

const StyledUpdateModal = styled.div`
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

const StyledLabel = styled.p`
  margin-bottom: 8px;
`;
const StyledName = styled.input``;

const StyledModalContainer = styled.div`
  display: flex:
  flex-direction: column;
  min-width: 30%;
  background-color: white;
  padding: 48px;
`;
const StyledInputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledImg = styled.img`
  cursor: pointer;
`;
const StyledImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
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

const UpdateItemModal = ({ item, closeModal, getItems }) => {
  const [itemProps, setItemProps] = useState(item);
  const { name, category, quantity, price, brand, imageUrl, id } = itemProps;

  const dbUrl = 'https://db-med-supply.herokuapp.com';
  // const dbUrl = 'http://localhost:1000';

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
    try {
      const res = await axios({
        method: 'patch',
        url: `${dbUrl}/items/${item.id}`,
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
    <StyledUpdateModal>
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
          <StyledName value={name} onChange={(e) => onInputChange(e, 'name')} />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Category</StyledLabel>
          <StyledName
            value={category}
            onChange={(e) => onInputChange(e, 'category')}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Quantity</StyledLabel>
          <StyledName
            type='number'
            value={quantity}
            onChange={(e) => onInputChange(e, 'quantity')}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Price</StyledLabel>
          <StyledName
            type='number'
            value={price}
            onChange={(e) => onInputChange(e, 'price')}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Brand</StyledLabel>
          <StyledName
            value={brand}
            onChange={(e) => onInputChange(e, 'brand')}
          />
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledLabel>Image URL</StyledLabel>
          <StyledName
            value={imageUrl}
            onChange={(e) => onInputChange(e, 'imageUrl')}
          />
        </StyledInputContainer>
        <StyledSubmit onClick={onSubmit}>Update Item</StyledSubmit>
      </StyledModalContainer>
    </StyledUpdateModal>
  );
};

export default UpdateItemModal;
