import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { useSidebarContext } from './sidebar/SidebarContext';
import Button from './Button';
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

export default function () {
  const { visible, toggle } = useSidebarContext();

  return (
    <Header>
      <div>
        {!visible && (
          <Button theme="green" icon="settings" onClick={toggle} green />
        )}
      </div>
      <Button theme="green" label="Обновить" onClick={toggle} />
      <Button theme="green" icon="question-mark" />
    </Header>
  );
}
