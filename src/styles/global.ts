import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --pink: #e91e63;
    --green: #23ce6b;
    --blue: #00bcd4;
  }

  body {
    font-family: 'Red Hat Display', sans-serif;
    background-color: #1a1a1a;
    color: #ffffff;
  }
`;
