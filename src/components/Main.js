import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import SchulteTable from './SchulteTable';
import WedgeTable from './WedgeTable';
import { useSidebarContext } from './sidebar/SidebarContext';
import { SCHULTE, WEDGE, LANDOLT } from '../constants';

const style = styled.main`
  grid-area: content;
  flex: 1 1 auto;
  align-items: center;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const Main = prefix(style);

export default function () {
  const { activeTab } = useSidebarContext();

  return (
    <Main>
      {activeTab === SCHULTE && <SchulteTable />}
      {activeTab === WEDGE && <WedgeTable />}
      {activeTab === LANDOLT && <p>Здесь будут кольца Ландольта</p>}
    </Main>
  );
}
