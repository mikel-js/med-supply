import React from 'react';
import styled from 'styled-components';

const StyledTableContainer = styled.div``;
const StyledTable = styled.table`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const StyledHead = styled.thead`
  display: flex;

  tr {
    display: flex;
    width: 100%;
    th {
      flex: 1;
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
