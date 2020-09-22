import React, { useState } from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Button from '../Button';

const StyledSidebarItem = styled.li`
  margin-bottom: 1.5rem;
`;

const SidebarItem = prefix(StyledSidebarItem);

export default function ({ children, onClick, ...props }) {
  const [open, setOpen] = useState(false);

  return (
    <SidebarItem>
      <Button onClick={onClick || (() => setOpen(!open))} {...props} />
      {open && children}
    </SidebarItem>
  );
}
