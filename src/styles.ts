import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#5A0F0F',
  secondary: '#2C2C2C',
  background: '#F5F5F5',
  emphasis: '#C6A664',
  alternative: '#FAF8F2'
}

export const fonts = {
  title: 'Lora, serif',
  text: 'Roboto, sans-serif'
}
export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: ${colors.emphasis} ${colors.secondary};

    body {
      background-color: ${colors.background};
      }
}

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
    padding-top: 40px;
  }

  .button-area {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .background-dark {
    background-color: ${colors.primary};
    color: ${colors.alternative};
  }

  a {
    color: inherit;
  }
`
