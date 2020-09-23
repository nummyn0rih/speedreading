import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Icon from './Icon';

const CommonButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: ${({ size }) => size || 'auto'};

  color: #fff;
  border: 2px solid transparent;
  border-radius: 22px;

  font: inherit;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;

  &:hover {
    opacity: 0.5;
  }
`;

const StyledPurpleButton = styled(CommonButton)`
  background: linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%),
    linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

const StyledWhiteButton = styled(CommonButton)`
  color: #bc9cff;
  background: linear-gradient(to right, white, white),
    linear-gradient(180deg, #bc9cff 0%, #8ba4f9 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

const StyledGreenButton = styled(CommonButton)`
  background: linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%),
    linear-gradient(180deg, #6fcf97 0%, #66d2ea 100%);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
`;

export const PurpleButton = prefix(StyledPurpleButton);
export const WhiteButton = prefix(StyledWhiteButton);
export const GreenButton = prefix(StyledGreenButton);

export default function Button({ icon, value, theme, onClick, ...props }) {
  const inner = (
    <>
      {icon && <Icon icon={icon} />}
      {value && <span>{value}</span>}
    </>
  );

  switch (theme) {
    case 'white':
      return (
        <WhiteButton onClick={onClick} {...props}>
          {inner}
        </WhiteButton>
      );

    case 'green':
      return (
        <GreenButton onClick={onClick} {...props}>
          {inner}
        </GreenButton>
      );

    default:
      return (
        <PurpleButton onClick={onClick} {...props}>
          {inner}
        </PurpleButton>
      );
  }
}
