import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { useSidebarContext } from './SidebarContext';
import Button from '../Button';

const StyledSidebarItem = styled.li`
  /* margin-top: 1.5rem;

  @media (max-width: 769px) {
    margin-top: 0.5rem;
  } */
`;

const SidebarItem = prefix(StyledSidebarItem);

export default function ({ tabName, children, onClick, ...props }) {
  const { activeTab } = useSidebarContext();

  const active = tabName === activeTab;

  return (
    <SidebarItem>
      <Button theme={active && 'white'} onClick={onClick} {...props} />
      {active && children}
    </SidebarItem>
  );
}
