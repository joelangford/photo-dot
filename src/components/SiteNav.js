import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const SiteNavStyles = styled.nav`
  flex-grow: 2;
  font-family: var(--typ-font-family-brand);
  font-size: 24px;
  letter-spacing: var(--typ-letter-spacing-brand);
  line-height: 80px;
  text-transform: lowercase;

  @media screen and (max-width: 767px) {
    display: inline-block;
    line-height: 60px;
    flex-grow: 1;
    width: 100%;
  }

  .site-nav__list {
    list-style-type: none;
    margin: 0;
    padding: 0;
    text-align: right;
  }

  .site-nav__item {
    display: inline-block;
    padding: 0 25px;
    text-align: center;
  }

  .first-load .site-nav__item {
    animation: pulseIn 1s both;
  }

  .site-nav__item:nth-child(1) {
    animation-delay: 0.5s;
  }

  .site-nav__item:nth-child(2) {
    animation-delay: 0.75s;
  }

  .site-nav__item:nth-child(3) {
    animation-delay: 1s;
  }

  @media screen and (max-width: 768px) {
    .site-nav__item {
      padding: 0 10px;
    }
  }

  @media screen and (max-width: 768px) {
    .site-nav__item {
      animation: none;
      display: block;
      opacity: 0;
      transform: scale(1.6);
      visibility: hidden;
      width: 100%;
    }

    .open .site-nav__item {
      opacity: 1;
      visibility: visible;
      transition: all 0.6s;
      transform: none;
    }

    .open .site-nav__item:nth-child(1) {
      transition-delay: 0.35s;
    }

    .open .site-nav__item:nth-child(2) {
      transition-delay: 0.45s;
    }

    .open .site-nav__item:nth-child(3) {
      transition-delay: 0.55s;
    }
  }

  .site-nav__link {
    border-bottom: 0 transparent;
    transition: border-color 0.5s;
  }

  .site-nav__link.active {
    animation: underscoreFade 0.5s both;
    border-bottom: 1px solid var(--colour-grey);
  }

  .first-load .site-nav__link {
    animation-delay: 1.5s;
  }

  .site-nav__link:hover {
    border-bottom: 1px solid var(--colour-grey);
  }
`;

const SiteNav = () => (
  <SiteNavStyles className="site-nav">
    <Burger />
    <ul className="site-nav__list">
      <li className="site-nav__item">
        <Link className="site-nav__link active js-nav-link">Home</Link>
      </li>
    </ul>
  </SiteNavStyles>
);

export default SiteNav;
