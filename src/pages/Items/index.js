import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import InfoSection from './InfoSection';
import ItemsTable from './ItemsTable';
import AddItemModal from './AddItemModal';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import Navigation from '../../components/Navigation';

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
  const [isLoading, setIsLoading] = useState(false);

  const onModalOpen = () => setDisplayAddModal(true);
  const onModalClose = () => setDisplayAddModal(false);

  const dbUrl = 'https://db-med-supply.herokuapp.com';
  const getItems = async () => {
    try {
      setIsLoading(true);
      const res = await axios({
        method: 'get',
        url: `${dbUrl}/items/all`,
      });
      if (res) {
        setItems(res.data);
      }
    } catch (e) {
      console.error('Error', e);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getItems();
  }, []);
  const itemCount = items?.length || 0;
  return (
    <StyledSection>
      <Navigation />
      <InfoSection itemCount={itemCount} onModalOpen={onModalOpen} />
      <ItemsTable items={items} getItems={getItems} />
      {displayAddModal && (
        <AddItemModal closeModal={onModalClose} getItems={getItems} />
      )}
      {isLoading && <LoadingScreen />}
    </StyledSection>
  );
};

export default Items;
