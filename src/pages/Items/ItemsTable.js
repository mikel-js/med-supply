import React from 'react';
import styled from 'styled-components';

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
    td {
      flex: 1;
    }
  }
`;

const ItemsTable = ({ items }) => {
  const tableHeadings = ['name', 'brand', 'category', 'quantity', 'price'];
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
          {items?.map(({ name, brand, category, quantity, price }, i) => (
            <tr key={i}>
              <td>{name}</td>
              <td>{brand}</td>
              <td>{category}</td>
              <td>{quantity}</td>
              <td>{price}</td>
            </tr>
          ))}
        </StyledBody>
      </StyledTable>
    </StyledTableContainer>
  );
};

export default ItemsTable;
