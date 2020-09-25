import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';

const DropdownMenu = styled.div`
  position: relative;
  box-sizing: content-box;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  overflow: hidden;
  transition: height 500ms ease;

  /* CSSTransition classes */
  .menu-primary-enter {
    position: absolute;
    transform: translateX(-110%);
  }
  .menu-primary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-primary-exit {
    position: absolute;
  }
  .menu-primary-exit-active {
    transform: translateX(-110%);
    transition: all 500ms ease;
  }

  .menu-secondary-enter {
    transform: translateX(110%);
  }
  .menu-secondary-enter-active {
    transform: translateX(0%);
    transition: all 500ms ease;
  }
  .menu-secondary-exit {
  }
  .menu-secondary-exit-active {
    transform: translateX(110%);
    transition: all 500ms ease;
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledDropdownItem = styled.button`
  height: 1.5rem;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border: none;
  border-radius: 4px;
  background: #fff;
  color: rgba(31, 32, 65, 0.5);
  font: inherit;
  outline: none;
  transition: background 500ms;
  cursor: pointer;

  &:hover,
  &:focus {
    color: rgba(31, 32, 65, 0.75);
    background: #f4f4f5;
  }
`;

export default function () {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <StyledDropdownItem
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        <span>{props.children}</span>
      </StyledDropdownItem>
    );
  }

  return (
    <DropdownMenu style={{ height: menuHeight }} ref={dropdownRef}>
      <CSSTransition
        in={activeMenu === 'main'}
        timeout={500}
        classNames="menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem goToMenu="size">Размер таблицы</DropdownItem>
          <DropdownItem goToMenu="type">Тип таблицы</DropdownItem>
          <DropdownItem goToMenu="view">Стиль таблицы</DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'size'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem goToMenu="main">back to settings</DropdownItem>
          <DropdownItem>4 x 4</DropdownItem>
          <DropdownItem>5 x 5</DropdownItem>
          <DropdownItem>6 x 6</DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'type'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem goToMenu="main">back to settings</DropdownItem>
          <DropdownItem>Числовая</DropdownItem>
          <DropdownItem>Буквенная</DropdownItem>
        </Menu>
      </CSSTransition>

      <CSSTransition
        in={activeMenu === 'view'}
        timeout={500}
        classNames="menu-secondary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <Menu>
          <DropdownItem goToMenu="main">back to settings</DropdownItem>
          <DropdownItem>Классический</DropdownItem>
          <DropdownItem>Без рамок</DropdownItem>
        </Menu>
      </CSSTransition>
    </DropdownMenu>
  );
}
