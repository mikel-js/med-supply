import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import UpdateItemModal from './UpdateItemModal';
import DeleteModal from './DeleteModal';
import iconBin from '../../assets/icons/trash-bin.png';

const StyledTableContainer = styled.div`
  background-color: #f2f2f2;
`;
const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  text-align: left;
  border-radius: 10px;
  border: solid 0.5px #cccccc;

  td {
    padding: 8px;
  }
`;

const StyledHead = styled.thead`
  display: flex;

  tr {
    display: flex;
    width: 100%;
    background-color: #e6e6e6;
    padding: 8px 0;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    th {
      flex: 1;
      padding: 0 8px;
      &:not(:last-of-type) {
        border-right: 1px solid black;
      }
    }
  }
`;

const StyledBody = styled.tbody`
  display: flex;
  flex-direction: column;
  tr {
    display: flex;
    width: 100%;
    &:not(:last-of-type) {
      border-bottom: 1px solid #d9d9d9;
    }

    td {
      flex: 1;
      display: flex;
      gap: 12px;
      align-items: center;
    }
  }
`;

const StyledAction = styled.td`
  button {
    background: #e6ffe6;
    border: none;
    padding: 8px;
    border-radius: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  }
  img,
  button {
    cursor: pointer;
  }
`;

const ItemsTable = ({ items, getItems }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const dbUrl = 'https://db-med-supply.herokuapp.com';

  const tableHeadings = [
    'Name',
    'Brand',
    'Category',
    'Quantity',
    'Price',
    'Action',
  ];
  const onItemDelete = (itemId) => {
    setSelectedItemId(itemId);
    setShowDeleteModal(true);
  };

  const onDeleteModalClose = () => {
    setSelectedItemId(null);
    setShowDeleteModal(false);
  };

  const onDeleteConfirm = async () => {
    try {
      const res = await axios({
        method: 'delete',
        url: `${dbUrl}/items/delete/${selectedItemId}`,
      });
      if (res) {
        onDeleteModalClose();
        getItems();
      }
    } catch (e) {
      console.error('Error', e);
    }
  };

  const onUpdateModalOpen = (itemId) => {
    const foundItem = items.find((item) => item.id === itemId);
    setSelectedItem(foundItem);
    setShowUpdateModal(true);
  };

  const onUpdateModalClose = () => setShowUpdateModal(false);

  return (
    <StyledTableContainer>
      <StyledTable>
        <StyledHead>
          <tr>
            {tableHeadings.map((heading, i) => (
              <th key={i}>{heading}</th>
            ))}
          </tr>
        </StyledHead>
        <StyledBody>
          {items?.map(({ id, name, brand, category, quantity, price }, i) => (
            <tr key={i}>
              <td>{name}</td>
              <td>{brand}</td>
              <td>{category}</td>
              <td>{quantity}</td>
              <td>{price}</td>
              <StyledAction>
                <button onClick={() => onUpdateModalOpen(id)}>Update</button>
                <img
                  alt='delete'
                  src={iconBin}
                  width='40px'
                  onClick={() => onItemDelete(id)}
                />
              </StyledAction>
            </tr>
          ))}
        </StyledBody>
      </StyledTable>
      {showUpdateModal && (
        <UpdateItemModal
          item={selectedItem}
          closeModal={onUpdateModalClose}
          getItems={getItems}
        />
      )}
      {showDeleteModal && (
        <DeleteModal
          confirmDelete={onDeleteConfirm}
          closeDeleteModal={onDeleteModalClose}
        />
      )}
    </StyledTableContainer>
  );
};

export default ItemsTable;
