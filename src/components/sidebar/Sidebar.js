import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import SidebarItem from './SidebarItem';
import { useSidebarContext } from './SidebarContext';
import { SCHULTE, WEDGE, LANDOLT } from '../../constants';
import data from '../../api';

import { Shadow } from '../styled';
import Button from '../Button';
import Dropdown from '../Dropdown';

const StyledSidebar = styled.aside`
  grid-area: sidebar;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0.5rem 2rem;
  ${Shadow}
  font-family: 'Raleway', 'Roboto', 'Ubuntu', sans-serif;
  font-weight: 600;

  ul {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  @media (max-width: 769px) {
    height: fit-content;

    .close {
      display: none;
    }
    nav {
      width: 50%;
    }
    ul {
      gap: 0.5rem;
    }
  }
  @media (max-width: 426px) {
    nav {
      width: 100%;
    }
  }
`;

const Sidebar = prefix(StyledSidebar);

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
      <Button
        className="close"
        theme="green"
        icon="close"
        size="2.5rem"
        onClick={toggle}
      />
      <nav>
        <ul>
          <SidebarItem
            tabName={SCHULTE}
            value="Таблицы Шульте"
            size="100%"
            onClick={showSchulte}
          >
            <Dropdown data={data[SCHULTE]} />
          </SidebarItem>
          <SidebarItem
            tabName={WEDGE}
            value="Клиновидные таблицы"
            size="100%"
            onClick={showWedge}
          >
            <Dropdown data={data[WEDGE]} />
          </SidebarItem>
          <SidebarItem
            tabName={LANDOLT}
            value="Кольца Ландольта"
            size="100%"
            onClick={showLandolt}
          >
            <Dropdown data={data[LANDOLT]} />
          </SidebarItem>
        </ul>
      </nav>
    </Sidebar>
  );
}
