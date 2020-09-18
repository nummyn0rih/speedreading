import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { useSidebarContext } from './SidebarContext';
import Button from '../Button';
import CloseIcon from '../icons/CloseIcon';
import { Shadow, Down } from '../styled';

const style = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  animation: ${Down} 0.5s 1 cubic-bezier(0.49, 0.91, 0.52, 1.36);
  ${Shadow}
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
      <Button>Common Button</Button>
      <br />
      <Button white>White Button</Button>
      <br />
      <Button green>Green Button</Button>
    </Sidebar>
  );
}
