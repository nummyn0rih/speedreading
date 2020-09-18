import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import SchulteTable from './SchulteTable';
import WedgeShapedTable from './WedgeShapedTable';

const style = styled.main`
  grid-area: content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Main = prefix(style);

export default function () {
  return (
    <Main>
      <SchulteTable />
    </Main>
  );
}
