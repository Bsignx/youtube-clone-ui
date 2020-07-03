import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body, #root {
    height: 100%;
  }

  *, button, input {
    border: 0;
    outline: 0;

    font-family: 'Muli', sans-serif;
  }

  :root {
    --primary: #19202C;
    --secondary: #898989;

    --youtube: #FF0000;
    --white: #fff;
    --placeholder: rgba(48,56,76, 0.4);
    --legend: #C2C2C2;
  }

`;
