import { createGlobalStyle } from 'styled-components';
import font from '../assets/fonts/Quicksand-Light.otf';

import colours from './global/colours.css';
import breakpoints from './global/breakpoints.css';
import typography from './global/typography.css';
import base from './global/base.css';
import animations from './global/animations.css';

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Quicksand Light';
    src: url(${font});
  }

  ${colours};
  ${breakpoints};
  ${typography};
  ${base};
  ${animations};
`;

export default GlobalStyles;
