import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const ContactContainer = styled.section`
  padding: 56px 0;
  background-color: ${colors.primary};

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
    text-align: center;
    font-weight: 700;
    font-family: ${fonts.title};
    color: ${colors.alternative};
  }

  ul {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 0 24px;
    font-size: 24px;
    color: ${colors.emphasis};
    display: flex;
    align-items: center;

    a {
      margin-left: 8px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
