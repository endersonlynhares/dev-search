import {createGlobalStyle} from "styled-components"

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root{
    font-size: 62.5%;
    font-family: 'Ubuntu Mono', monospace;
  }

  body{
    font-size: 1.6rem;
    height: 100vh;
    background: ${props => props.theme.colors.background};
  }

  input, button, textarea{
    font-family: 'Ubuntu Mono', monospace;
    all: unset;
  }

`