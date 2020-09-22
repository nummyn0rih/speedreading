import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { useSidebarContext } from './SidebarContext';
import { Shadow, Down } from '../styled';

const StyledSidebar = styled.aside`
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

  Button {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .line {
    display: flex;
    justify-content: space-between;
  }
  .line > div {
    width: 47.5%;
  }
`;

const Sidebar = prefix(StyledSidebar);

const arr1 = [
  // { size: '3 x 3', value: '3', id: 'size-0', check: false },
  // { size: '4 x 4', value: '4', id: 'size-1', check: false },
  { option: '5 x 5', value: '5', id: 'size-2', check: true },
  { option: '6 x 6', value: '6', id: 'size-3', check: false },
  { option: '7 x 7', value: '7', id: 'size-4', check: false },
  { option: '8 x 8', value: '8', id: 'size-4', check: false },
];

const arr2 = [
  { option: 'Числовая', value: 'num', id: 'type-1', check: true },
  { option: 'Буквенная', value: 'char', id: 'type-2', check: false },
];

export default function (props) {
  const { visible } = useSidebarContext();

  if (!visible) return null;

  return (
    <Sidebar>
      <nav>
        <ul>{props.children}</ul>
      </nav>
    </Sidebar>
  );
}
