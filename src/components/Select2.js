import React from 'react';
import styled from 'styled-components';
import { prefix } from 'inline-style-prefixer';

import Label from './Label';

const StyledWrapper = styled.div`
  .select-box {
    position: relative;
    display: block;
    width: 100%;
    margin: 0 auto;
    font: inherit;

    @media (min-width: 768px) {
      /* width: 70%; */
    }

    @media (min-width: 992px) {
      /* width: 50%; */
    }

    @media (min-width: 1200px) {
      /* width: 30%; */
    }

    &__current {
      position: relative;
      border: 1px solid #c7c7cf;
      border-radius: 4px;
      color: #575870;
      cursor: pointer;
      outline: none;

      &:focus {
        color: #1f2041;
        border: 1px solid #8f8fa0;
        border-radius: 4px 4px 0 0;

        & + .select-box__list {
          margin: 0;
          background: #fff;
          border: 1px solid #8f8fa0;
          border-top: none;
          border-radius: 0 0 4px 4px;
          opacity: 1;
          animation-name: none;

          .select-box__option {
            color: #1f2041;
            cursor: pointer;
          }
        }

        .select-box__icon {
          transform: translateY(-50%) rotate(180deg);
        }
      }
    }

    &__icon {
      position: absolute;
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      width: 20px;
      opacity: 0.3;
      transition: 0.2s ease;
    }

    &__value {
      display: flex;
    }

    &__input {
      display: none;

      &:checked + .select-box__input-text {
        display: block;
        padding: 0.6rem 1rem;
        background: none;
      }
    }

    &__input-text {
      display: none;
      width: 100%;
      margin: 0;
      padding: 1rem;
      background-color: #fff;
    }

    &__list {
      position: absolute;
      width: 100%;
      padding: 0;
      list-style: none;
      opacity: 0;

      animation-name: HideList;
      animation-duration: 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
      animation-timing-function: step-start;
    }

    &__option {
      display: block;
      padding: 15px;
      background-color: #fff;

      &:hover,
      &:focus {
        background: #f4f4f5;
      }
    }
  }

  @keyframes HideList {
    from {
      transform: scaleY(1);
    }
    to {
      transform: scaleY(0);
    }
  }
`;

const Wrapper = prefix(StyledWrapper);

export default function Select({ arr, label, name }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <div class="select-box">
        <div class="select-box__current" tabindex="1">
          {arr.map(({ option, value, id, check }) => (
            <div class="select-box__value">
              <input
                class="select-box__input"
                type="radio"
                id={id}
                value={value}
                name={name}
                checked="checked"
              />
              <p class="select-box__input-text">{option}</p>
            </div>
          ))}

          <img
            class="select-box__icon"
            src="http://cdn.onlinewebfonts.com/svg/img_295694.svg"
            alt="Arrow Icon"
            aria-hidden="true"
          />
        </div>

        <ul class="select-box__list">
          {arr.map(({ option, id }) => (
            <li>
              <label class="select-box__option" for={id} aria-hidden="true">
                {option}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </Wrapper>
  );
}
