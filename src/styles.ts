import { createGlobalStyle } from 'styled-components'

export const colors = {
  primary: '#1E3A5F',
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
`
