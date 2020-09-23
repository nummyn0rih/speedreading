import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import SchulteTable from './SchulteTable';
import WedgeTable from './WedgeTable';
import {
  SCHULTE,
  WEDGE,
  LANDOLT,
  useSidebarContext,
} from './sidebar/SidebarContext';

const style = styled.main`
  grid-area: content;
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
