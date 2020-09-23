import React from 'react';
import styled, { css } from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import {
  SidebarProvider,
  useSidebarContext,
} from './components/sidebar/SidebarContext';

const StyledApp = styled.div`
  display: grid;
  grid-template-areas: ${({ sidebarVisible }) => {
    if (sidebarVisible)
      return css`
    'sidebar header header header'
    'sidebar content content content'
    'sidebar footer footer footer';
    `;
    return css`
    'header header header header'
    'content content content content'
    'footer footer footer footer';
    `;
  }};
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  height: 100vh;
  padding: 0.5rem;
  background: #e5e5e5;
`;

const PrefixedApp = prefix(StyledApp);

function App() {
  const { visible } = useSidebarContext();

  return (
    <PrefixedApp sidebarVisible={visible}>
      <Header />
      <Sidebar />
      <Main />
    </PrefixedApp>
  );
}

export default function () {
  return (
    <SidebarProvider>
      <App />
    </SidebarProvider>
  );
}
