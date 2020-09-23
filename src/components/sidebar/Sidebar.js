import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import SidebarItem from './SidebarItem';
import { SCHULTE, WEDGE, LANDOLT, useSidebarContext } from './SidebarContext';
import Select from '../Select';

import { Shadow, Down } from '../styled';
import Button from '../Button';

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: stretch; */
  padding: 0.5rem 2rem;
  animation: ${Down} 0.5s 1 cubic-bezier(0.49, 0.91, 0.52, 1.36);
  ${Shadow}

  font-family: 'Raleway', 'Roboto', 'Ubuntu', sans-serif;
  font-weight: 600;
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
  const {
    visible,
    toggle,
    showSchulte,
    showWedge,
    showLandolt,
  } = useSidebarContext();

  if (!visible) return null;

  return (
    <Sidebar>
      <Button theme="green" icon="close" size="2.5rem" onClick={toggle} />
      <nav>
        <ul>
          <SidebarItem
            tabName={SCHULTE}
            value="Таблицы Шульте"
            size="100%"
            onClick={showSchulte}
          >
            {/* <Select id="size" value="Размер таблицы" />
            <Select id="type" value="Тип таблицы" /> */}
            <p>lorem</p>
            <p>ipsum</p>
            {/* <Select2 value="Размер таблицы" name="size" arr={arr1} />
            <Select2 value="Тип таблицы" name="type" arr={arr2} /> */}
          </SidebarItem>
          <SidebarItem
            tabName={WEDGE}
            value="Клиновидные таблицы"
            size="100%"
            onClick={showWedge}
          >
            <p>lorem</p>
            <p>ipsum</p>
          </SidebarItem>
          <SidebarItem
            tabName={LANDOLT}
            value="Кольца Ландольта"
            size="100%"
            onClick={showLandolt}
          >
            <p>lorem</p>
            <p>ipsum</p>
          </SidebarItem>
        </ul>
      </nav>
    </Sidebar>
  );
}
