import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ItemsTable from './ItemsTable';

const StyledSection = styled.div``;

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
  return (
    <StyledSection>
      items
      <ItemsTable items={items} />
    </StyledSection>
  );
};

export default Items;
