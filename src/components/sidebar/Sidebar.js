import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { useSidebarContext } from './SidebarContext';
import Button from '../Button';
import CloseIcon from '../icons/CloseIcon';
import TextField from '../TextField';
import { Shadow, Down } from '../styled';
import Select from '../Select ';

const style = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: stretch;
  padding: 2rem;
  animation: ${Down} 0.5s 1 cubic-bezier(0.49, 0.91, 0.52, 1.36);
  ${Shadow}

  font-family: 'Raleway', 'Roboto', 'Ubuntu', sans-serif;
  font-weight: 600;
`;

const Sidebar = prefix(style);

export default function () {
  const { visible, toggle } = useSidebarContext();

  if (!visible) return null;

  return (
    <Sidebar>
      <br />
      <Button onClick={toggle} green size="2.5rem">
        <CloseIcon />
      </Button>
      <br />
      <Button white>Таблицы Шульте</Button>
      <br />
      <TextField label="Размер таблицы" placeholder="5 x 5" />
      <br />
      <Select id="size" label="Размер таблицы" placeholder="5 x 5" />
      <br />
      <Button>Клиновидные таблицы</Button>
      <br />
      <Button>Кольца Ландольта</Button>
    </Sidebar>
  );
}
