import React from 'react';
import styled, { css } from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import SidebarItem from './components/sidebar/SidebarItem';
import {
  SidebarProvider,
  useSidebarContext,
} from './components/sidebar/SidebarContext';
import Button from './components/Button';
import Select from './components/Select';

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
  const { visible, toggle } = useSidebarContext();

  return (
    <PrefixedApp sidebarVisible={visible}>
      <Header>
        <div>
          {!visible && (
            <Button theme="green" icon="settings" onClick={toggle} green />
          )}
        </div>
        <Button theme="green" value="Обновить" onClick={toggle} />
        <Button theme="green" icon="question-mark" />
      </Header>
      <Sidebar>
        <SidebarItem theme="green" icon="close" onClick={toggle} />
        <SidebarItem theme="white" value="Таблицы Шульте" size="100%" active>
          <Select id="size" value="Размер таблицы" />
          <Select id="type" value="Тип таблицы" />
          {/* <Select2 value="Размер таблицы" name="size" arr={arr1} />
            <Select2 value="Тип таблицы" name="type" arr={arr2} /> */}
        </SidebarItem>
        <SidebarItem value="Клиновидные таблицы" size="100%" />
        <SidebarItem value="Кольца Ландольта" size="100%" />
      </Sidebar>
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
