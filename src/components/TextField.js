import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Label from './Label';
import Input from './Input';

const StyledTextField = styled.div`
  display: flex;
  flex-direction: column;
`;

const PrefixedTextField = prefix(StyledTextField);

export default function TextField({ type, id, label, placeholder, name }) {
  return (
    <PrefixedTextField>
      <Label htmlFor={id}>{label}</Label>
      <Input type={type} id={id} placeholder={placeholder} name={name} />
    </PrefixedTextField>
  );
}
