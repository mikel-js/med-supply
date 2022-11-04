import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ItemsTable from './ItemsTable';
import iconBuilding from '../../assets/icons/building.png';
import iconMed from '../../assets/icons/first-aid-kit.png';

const StyledSection = styled.div`
  background-color: #f9f2ec;
  height: 100%;
  min-height: 100vh;
  padding: 48px;
`;

const StyledContent = styled.div`
  display: flex;
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

const Items = () => {
  const [items, setItems] = useState(null);
  const dbUrl = 'https://db-med-supply.herokuapp.com';
  useEffect(() => {
    const getItems = async () => {
      try {
        const res = await axios({
          method: 'get',
          url: `${dbUrl}/items/all`,
        });
        if (res) {
          setItems(res.data);
        }
      } catch (e) {
        console.error('Error', e);
      }
    };
    getItems();
  }, []);
  const itemCount = items?.length || 0;
  return (
    <StyledSection>
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
      </StyledContent>

      <ItemsTable items={items} />
    </StyledSection>
  );
};

export default Items;
