import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

const StyledLabel = styled.label`
  color: #1f2041;
  text-transform: uppercase;
  font-size: 0.8rem;
`;

const Label = prefix(StyledLabel);

export default Label;
