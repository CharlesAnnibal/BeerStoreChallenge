import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  html, body, #app {
    width:100%;
    height:100%;
    margin:0;
    font:300 14px 'PT Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  * {
    box-sizing: border-box;
  }

  input, button, textarea {
    cursor: pointer;
  }

  a{
    text-decoration:none;
  }
`
export const AppStyle = styled.div` height:100%; width:100%;`

