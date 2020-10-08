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
  grid-template-columns: 350px auto;
  grid-template-rows: repeat(2, min-content) auto min-content;
  grid-template-areas: ${({ sidebarVisible }) => {
    if (sidebarVisible)
      return css`
    'sidebar header'
    'sidebar content'
    'sidebar content'
    'sidebar footer';
    `;
    return css`
    'header header'
    'content content'
    'content content'
    'footer footer';
    `;
  }};
  gap: 0.5rem;
  align-items: center;
  min-height: 100vh;
  padding: 0.5rem;
  background: #e5e5e5;

  @media (max-width: 769px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'sidebar'
      'content'
      'footer';
  }
`;

const PrefixedApp = prefix(StyledApp);

function App() {
  const { visible } = useSidebarContext();

  return (
    <PrefixedApp sidebarVisible={visible}>
      <Sidebar />
      <Header />
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
