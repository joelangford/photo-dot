import React from 'react';
import styled from 'styled-components';

const BurgerStyles = styled.button`
  border: 0;
  display: block;
  height: 18px;
  position: absolute;
  right: 10px;
  top: 10px;
  text-decoration: none;
  width: 20px;

  &:after {
    background-color: var(--colour-black);
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    transition: all 0.5s;
    bottom: 0;
    width: 20px;
  }

  .open .burger:after {
    transform: rotate(-45deg);
    bottom: 9px;
  }

  &:before {
    background-color: var(--colour-black);
    content: '';
    display: block;
    height: 1px;
    position: absolute;
    transition: all 0.5s;
    top: 0;
    width: 20px;
  }

  .open .burger:before {
    transform: rotate(45deg);
    top: 8px;
  }

  .burger__inner {
    background-color: var(--colour-black);
    display: block;
    position: absolute;
    transition: all 0.5s;
    top: 9px;
    height: 1px;
    width: 20px;

    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
  }

  .open .burger__inner {
    opacity: 0;
  }

  @media screen and (min-width: 768px) {
    display: none;
  }

  .first-load .burger {
    animation: pulseIn 0.5s both;
    animation-delay: 0.5s;
  }

  .loading .open .burger {
    animation: rotate 1.25s both;
    animation-iteration-count: infinite;
  }
`;

const Burger = () => (
  <BurgerStyles className="burger js-nav-toggle">
    <span className="burger__inner">open nav</span>
  </BurgerStyles>
);

export default Burger;
