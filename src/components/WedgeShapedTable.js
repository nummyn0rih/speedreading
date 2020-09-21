import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: 'Titillium Web', sans-serif;

  .active {
    background: red;
  }
`;

const StyledLine = styled.li`
  display: flex;
  justify-content: space-between;
  height: 1.5rem;
  width: ${({ size }) => size || '50%'};
  /* padding: 0 2rem; */

  .start,
  .middle,
  .end {
    /* width: 1.5rem; */
  }
`;

const StyledFill = styled.div`
  flex: 1 0;
  border-bottom: 1px dotted #000;
  height: 1em;
  margin: 0 0.4em;
`;

const Ul = prefix(StyledUl);
const Line = prefix(StyledLine);
const Fill = prefix(StyledFill);

const randomArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const startOfLine = randomArray(25, 50);
const endOfLine = randomArray(25, 50);
const lines = startOfLine.reduce((acc, elem, index) => {
  const newLine = {
    id: index,
    start: elem,
    end: endOfLine[index],
    size: `${(index + 2) * 3}%`,
    active: index === 0,
  };
  return [...acc, newLine];
}, []);

export default function WedgeShapedTable() {
  return (
    <Ul>
      {lines.map((elem) => (
        <Line
          size={elem.size}
          key={elem.id}
          className={elem.active ? 'active' : ''}
        >
          <div className="start">{elem.start}</div>
          <Fill />
          <div className="middle">{elem.id}</div>
          <Fill />
          <div className="end">{elem.end}</div>
        </Line>
      ))}
    </Ul>
  );
}
