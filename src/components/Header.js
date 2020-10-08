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
  padding: 0.5rem 2rem;
  ${Shadow}
  transition: all 500ms ease;

  div {
    width: 2.5rem;
  }

  @media (min-width: 769px) {
    .close {
      display: none;
    }
  }

  @media (max-width: 376px) {
    padding: 0.5rem 1rem;
  }
`;

const Header = prefix(style);

export default function () {
  const { visible, toggle } = useSidebarContext();

  return (
    <Header>
      <div>
        {visible ? (
          <Button
            className="close"
            theme="green"
            icon="close"
            onClick={toggle}
          />
        ) : (
          <Button theme="green" icon="settings" onClick={toggle} />
        )}
      </div>
      <Button theme="green" value="Обновить" onClick={() => {}} />
      <Button theme="green" icon="question-mark" />
    </Header>
  );
}
