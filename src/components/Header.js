import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import { useSidebarContext } from './sidebar/SidebarContext';
import Button from './Button';
import SettingsIcon from './icons/SettingsIcon';
import QuestionIcon from './icons/QuestionIcon';
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
          <Button onClick={toggle} green size="2.5rem">
            <SettingsIcon />
          </Button>
        )}
      </div>
      <Button onClick={toggle} green>
        Обновить
      </Button>
      <Button green size="2.5rem">
        <QuestionIcon />
      </Button>
    </Header>
  );
}
