// import React from 'react';
import styled, { css } from 'styled-components';
import { prefix } from 'inline-style-prefixer';

const whiteTheme = css`
  color: #bc9cff;
  background: linear-gradient(to right, white, white),
    linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
`;

const greenTheme = css`
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%),
    linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
`;

const CommonButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  width: ${({ size }) => size || 'auto'};

  color: #fff;
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%),
    linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);

  ${({ white }) => white && whiteTheme}
  ${({ green }) => green && greenTheme}

  border: 2px solid transparent;
  border-radius: 22px;
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;

  font-family: inherit;
  font-weight: inherit;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.5;
  }
`;

const Button = prefix(CommonButton);

export default Button;
