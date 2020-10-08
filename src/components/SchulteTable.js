import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { createShuffledArray } from '../utils';
import { Shadow } from './styled';

const StyledTable = styled.section`
  height: max-content;
  padding: 2rem;
  ${Shadow}

  .table {
    display: grid;
    grid-template: repeat(5, 80px) / repeat(5, 80px);
    gap: 5px;
  }
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(31, 32, 65, 0.25);
    border-radius: 4px;
    color: rgba(31, 32, 65, 0.85);
    font-family: 'Titillium Web', sans-serif;
    font-size: 3.5rem;
  }

  @media (max-width: 426px) {
    padding: 1rem;

    .table {
      grid-template: repeat(5, 60px) / repeat(5, 60px);
    }
    .cell {
      font-size: 2.5rem;
    }
  }

  @media (max-width: 321px) {
    padding: 0.7rem;

    .table {
      grid-template: repeat(5, 50px) / repeat(5, 50px);
    }
    .cell {
      font-size: 2rem;
    }
  }
`;

const Table = prefix(StyledTable);

export default function SchulteTable(props) {
  const arr = createShuffledArray(25);

  return (
    <Table>
      <article className="table">
        {arr.map((el) => (
          <div className="cell" key={el}>
            {el + 1}
          </div>
        ))}
      </article>
    </Table>
  );
}
