import styled, { css, keyframes } from 'styled-components';

export const Shadow = css`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
`;

export const Down = keyframes`
  from {
    transform: translateY(-100vh);
  }
  
  to {
    transform: translateY(0);
  }
`;
