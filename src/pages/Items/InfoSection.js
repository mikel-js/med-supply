import React from 'react';
import styled from 'styled-components';
import iconBuilding from '../../assets/icons/building.png';
import iconMed from '../../assets/icons/first-aid-kit.png';
import iconAdd from '../../assets/icons/add.png';

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledInfoContainer = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;


  margin-bottom: 36px;
  padding: 16px;
  border-radius 10px;
`;
const StyledInfo = styled.div`
  padding: 8px;
  h2 {
    margin 8px 0;
  }
  p {
    margin: 0;
  }
`;

const StyledDiv = styled.div``;
const StyledCount = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: #f2f2f2;

  img {
    margin-right: 8px;
  }
`;
const StyledItemCount = styled.div``;

const StyledTexts = styled.div`
  display: flex;
`;

const StyledActions = styled.div`
  button {
    display: flex;
    background-color: #bd9a60;
    color: white;
    align-items: center;
    justify-content: center;
    padding: 8px;
    border-radius: 10px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    img {
      margin-right: 8px;
    }
  }
`;
const InfoSection = ({ itemCount, onModalOpen }) => {
  return (
    <StyledContent>
      <StyledDiv>
        <StyledDiv>
          <StyledInfoContainer>
            <StyledTexts>
              <div>
                <img alt='buidling' src={iconBuilding} width='70px' />
              </div>
              <StyledInfo>
                <h2>K and J Medical Supply</h2>
                <p>Manila, Philippines</p>
              </StyledInfo>
            </StyledTexts>
            <StyledCount>
              <div>
                <img alt='first-aid' src={iconMed} width='40px' />
              </div>
              <StyledItemCount>Item Count: {itemCount} </StyledItemCount>
            </StyledCount>
          </StyledInfoContainer>
        </StyledDiv>
      </StyledDiv>
      <StyledActions>
        <button onClick={onModalOpen}>
          <img alt='buidling' src={iconAdd} width='30px' />
          Add new item
        </button>
      </StyledActions>
    </StyledContent>
  );
};

export default InfoSection;
