import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfoSection from './InfoSection';
import ItemsTable from './ItemsTable';
import AddItemModal from './AddItemModal';
import Cookies from 'js-cookie';

const StyledSection = styled.div`
  background-color: #f9f2ec;
  height: 100%;
  min-height: 100vh;
  padding: 48px;
`;

const StyledContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Items = () => {
  const [items, setItems] = useState(null);
  const [displayAddModal, setDisplayAddModal] = useState(false);

  const onModalOpen = () => setDisplayAddModal(true);
  const onModalClose = () => setDisplayAddModal(false);

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
      <InfoSection itemCount={itemCount} onModalOpen={onModalOpen} />
      <ItemsTable items={items} />
      {displayAddModal && <AddItemModal closeModal={onModalClose} />}
    </StyledSection>
  );
};

export default Items;
