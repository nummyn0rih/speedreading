import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Label from './Label';

const StyledWrapper = styled.div`
  $demo-blue: #005ba6;
  $demo-gray: #d6d6d6;
  $demo-placeholder: #c7c7c7;
  $demo-border: #e6e6e6;

  $border-width: 3px;

  .form-input-select {
    color: #005ba6;
    display: block;
    border-radius: 0;
    box-shadow: none;
    font-size: 16px;
    padding: 11px 15px;
    margin-top: 9px;
    margin-bottom: 15px;
    width: 100%;

    &::before,
    &::after {
      content: '';
      display: block;
      position: absolute;
      pointer-events: none;

      border: 1px solid transparent;
      width: 0;
      height: 0;
      right: 16px;
    }

    &::before {
      bottom: 55%;
      border-width: 0 6.5px 8px 6.5px;
      border-bottom-color: #d6d6d6;
    }

    &::after {
      border-width: 8px 6.5px 0 6.5px;
      border-top-color: #d6d6d6;
      top: 55%;
    }

    @-moz-document url-prefix() {
      border-right: 3px solid #e6e6e6;

      &:hover {
        border-right: 3px solid #005ba6;
      }
    }

    &:hover {
      select {
        box-shadow: 0 2px 3px rgba(#005ba6, 0.1) inset;
        border-color: #005ba6;

        &:focus {
          outline-color: transparent;
        }
      }

      &::before {
        border-bottom-color: #005ba6;
      }
      &::after {
        border-top-color: #005ba6;
      }
    }

    select {
      border: 3px solid #e6e6e6;
      border-radius: 0;
      font-weight: 400;
      color: inherit;
      padding: 11px 15px;
      line-height: normal;
      transition: border-color 0.2s ease, outline 0.2s ease;

      &:focus {
        box-shadow: 0 3px 4px rgba(#005ba6, 0.3) inset;
        outline: 3px solid #005ba6;
        outline-offset: -3px;
      }

      &[disabled],
      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }

      &:not(:focus):invalid {
        color: #c7c7c7;
      }
    }
  }
`;

const Wrapper = prefix(StyledWrapper);

export default function Select({ arr, label, name }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <div className="form-input-select">
        <select required>
          <option value="" hidden>
            Example Placeholder
          </option>

          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
          <option value="4">Option 4</option>
          <option value="5">Option 5</option>
        </select>
      </div>
    </Wrapper>
  );
}
