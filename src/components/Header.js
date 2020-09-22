import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { Shadow } from './styled';

const style = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: max-content;
  padding: 0.5rem;
  ${Shadow}
`;

const Header = prefix(style);

export default function ({ children }) {
  return <Header>{children}</Header>;
}
