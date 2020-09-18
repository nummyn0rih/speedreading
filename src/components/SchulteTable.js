import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { Shadow } from './styled';

const StyledTableWrapper = styled.article`
  height: max-content;
  padding: 2rem;
  ${Shadow}
`;

const StyledTable = styled.section`
  display: grid;
  grid-template: repeat(5, 80px) / repeat(5, 80px);
  grid-gap: 5px;
  grid-auto-flow: dense;
`;

const StyledCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  color: rgba(31, 32, 65, 0.85);
  font-family: 'Titillium Web', sans-serif;
  font-size: 3.5rem;
`;

const TableWrapper = prefix(StyledTableWrapper);
const Table = prefix(StyledTable);
const Cell = prefix(StyledCell);

const arr = [...Array(25).keys()].sort(function () {
  return Math.random() - 0.5;
});

export default function SchulteTable(props) {
  return (
    <TableWrapper>
      <Table>
        {arr.map((el) => (
          <Cell key={el}>{el + 1}</Cell>
        ))}
      </Table>
    </TableWrapper>
  );
}
