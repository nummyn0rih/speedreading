import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

const StyledInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
  id: props.id || '',
  name: props.name || '',
  value: props.placeholder || '',
}))`
  padding: 0.5rem 1rem;
  background: #fff;
  border: 1px solid rgba(31, 32, 65, 0.25);
  border-radius: 4px;
  color: rgba(31, 32, 65, 0.5);
  outline: none;

  font-family: inherit;
  font-weight: inherit;
  font-size: 1rem;

  &:hover,
  &:focus {
    color: rgba(31, 32, 65, 0.75);
    border: 1px solid rgba(31, 32, 65, 0.5);
  }
`;

const Input = prefix(StyledInput);

export default Input;
