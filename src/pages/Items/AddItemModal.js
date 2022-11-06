import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import iconClose from '../../assets/icons/close.png';

const defaultItemProps = {
  name: '',
  category: '',
  quantity: 0,
  price: 0,
  brand: '',
  imageUrl: '#',
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
const StyledName2 = styled.input``;
const StyledName3 = styled.input``;
const StyledName4 = styled.input``;

const StyledModalContainer = styled.div`
  display: flex:
  max-width: 50%;
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
const StyledModalContainer2 = styled.div``;
const StyledModalContainer3 = styled.div``;

const StyledSubmit = styled.button``;

const StyledImg = styled.img`
  cursor: pointer;
`;
const StyledImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const AddItemModal = ({ closeModal, getItems }) => {
  const [itemProps, setItemProps] = useState(defaultItemProps);

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
      </StyledModalContainer>
    </StyledAddModal>
  );
};

export default AddItemModal;
