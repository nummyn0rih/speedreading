import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Label from './Label';
import Input from './Input';

const StyledSelect = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrefixedSelect = prefix(StyledSelect);

export default function Select({ type, id, label, placeholder, name }) {
  return (
    <PrefixedSelect>
      <Label>{label}</Label>
      <Input as="select">
        <option style={{ padding: '1rem' }} value="3">
          3 x 3
        </option>
        <option value="4">4 x 4</option>
        <option value="5" selected>
          5 x 5
        </option>
        <option value="6">6 x 6</option>
        <option value="7">7 x 7</option>
        <option value="8">8 x 8</option>
      </Input>
    </PrefixedSelect>
  );
}
