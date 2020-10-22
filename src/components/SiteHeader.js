import React from 'react';
import styled from 'styled-components';
import Brand from './Brand';

const SiteHeaderStyles = styled.header`
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  background-color: var(--colour-translucent-white);
  border-bottom: 1px solid var(--colour-transparent-black);
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  padding: 0 50px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;

  @media screen and (max-width: 767px) {
    animation: underscoreFade 1s both;
    height: 40px;
    padding: 0 10px;
    transition: all ease-in 0.35s;

    &.is-exiting {
      transition-delay: 0.5s;
    }

    &.first-load {
      animation-delay: 0.75s;
    }

    &.open {
      height: 100%;
    }
  }
`;

const SiteHeader = () => (
  <SiteHeaderStyles>
    <Brand />
    {/* <SiteNav /> */}
  </SiteHeaderStyles>
);

export default SiteHeader;
