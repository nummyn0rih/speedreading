import styled, { css, keyframes } from 'styled-components';

export const Shadow = css`
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  box-shadow: 0px 0px 25px rgba(0, 0, 0, 0.2);
`;

export const Grow = keyframes`
  from {
    grid-template-columns: 1fr 3fr;
  }
  
  to {
    grid-template-columns: 0 1fr;
  }
`;
