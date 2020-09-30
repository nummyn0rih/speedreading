import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { prefix } from 'inline-style-prefixer';
import { CSSTransition } from 'react-transition-group';

import Main from './components/Main';
import Header from './components/Header';
import Sidebar from './components/sidebar/Sidebar';
import {
  SidebarProvider,
  useSidebarContext,
} from './components/sidebar/SidebarContext';
import { Grow } from './components/styled';

const StyledApp = styled.div`
  display: grid;
  grid-template-areas: ${({ sidebarVisible }) => {
    if (sidebarVisible)
      return css`
    'sidebar header header header'
    'sidebar content content content'
    'sidebar footer footer footer';
    `;
    return css`
    'header header header header'
    'content content content content'
    'footer footer footer footer';
    `;
  }};
  grid-template-columns: repeat(4, 1fr);
  gap: 0.5rem;
  min-height: 100vh;
  padding: 0.5rem;
  background: #e5e5e5;
`;

// const StyledApp = styled.div`
//   display: flex;

//   min-height: 100vh;
//   padding: 0.5rem;
//   background: #e5e5e5;
//   /* transition: ${Grow} 1s ease; */
//   /* flex-basis: auto; */

//   /* CSSTransition classes */
//   .menu-enter {
//     flex: 0.00001;
//   }
//   .menu-enter-active {
//     flex: 1;
//   }
//   .menu-exit {
//     flex: 1;
//   }
//   .menu-exit-active {
//     flex: 0.00001;
//   }

//   .menu-primary-enter {
//     transform: translateX(-100%);
//   }
//   .menu-primary-enter-active {
//     transform: translateX(0%);
//     transition: all 1000ms ease;
//   }
//   .menu-primary-exit {
//     transform: translateX(0%);
//   }
//   .menu-primary-exit-active {
//     transform: translateX(-100%);
//     transition: all 1000ms ease;
//   }
// `;

// const WrapperSidebar = styled.div`
//   flex: 1;
//   overflow: hidden;
//   position: relative;

//   transition: all 500ms ease;
// `;

// const WrapperMain = styled.div`
//   flex: 3;
//   overflow: hidden;

//   transition: all 500ms ease;
// `;

const PrefixedApp = prefix(StyledApp);

function App() {
  const { visible } = useSidebarContext();

  return (
    <PrefixedApp sidebarVisible={visible}>
      {/* <CSSTransition in={visible} timeout={500} classNames="menu" unmountOnExit> */}
      {/* <WrapperSidebar> */}
      {/* <CSSTransition
            in={visible}
            timeout={1000}
            classNames="menu-primary"
            unmountOnExit
          > */}
      {/* <Sidebar /> */}
      {/* </CSSTransition> */}
      {/* </WrapperSidebar> */}
      {/* </CSSTransition> */}

      {/* <WrapperMain> */}
      <Sidebar />
      <Header />
      <Main />
      {/* </WrapperMain> */}
    </PrefixedApp>
  );
}

export default function () {
  return (
    <SidebarProvider>
      <App />
    </SidebarProvider>
  );
}
