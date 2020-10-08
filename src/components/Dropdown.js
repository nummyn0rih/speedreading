import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
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

  @media (max-width: 769px) {
    margin: 1rem 1rem 0.5rem;
  }

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

  ${({ active }) =>
    active &&
    css`
      color: rgba(31, 32, 65, 0.75);
      background: #f4f4f5;
    `}

  &:hover,
  &:focus {
    color: rgba(31, 32, 65, 0.75);
    background: #f4f4f5;
  }
`;

export default function ({ data }) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild?.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem({ children, goToMenu, ...props }) {
    return (
      <StyledDropdownItem
        onClick={() => goToMenu && setActiveMenu(goToMenu)}
        {...props}
      >
        <span>{children}</span>
      </StyledDropdownItem>
    );
  }

  console.log(data);

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
          {data.map((menuItem) => (
            <DropdownItem goToMenu={menuItem.id} key={`menu-${menuItem.id}`}>
              {menuItem.name}
            </DropdownItem>
          ))}
        </Menu>
      </CSSTransition>

      {data.map((menu) => (
        <CSSTransition
          in={activeMenu === menu.id}
          timeout={500}
          classNames="menu-secondary"
          unmountOnExit
          onEnter={calcHeight}
          key={menu.id}
        >
          <Menu>
            <DropdownItem goToMenu="main">back to settings</DropdownItem>

            {menu.children.map((item) => (
              <DropdownItem key={item.id} active={menu.current === item.id}>
                {item.value}
              </DropdownItem>
            ))}
          </Menu>
        </CSSTransition>
      ))}
    </DropdownMenu>
  );
}
