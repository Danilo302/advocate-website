import styled from 'styled-components'
import { colors } from '../../styles'

export const FooterContainer = styled.footer`
  background-color: ${colors.secondary};
  color: ${colors.alternative};
  text-align: center;
  padding: 2rem 1rem;

  div {
    display: flex;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    margin-top: 1rem;

    p {
      font-size: 14px;
    }
  }

  a {
    border-bottom: 1px solid transparent;
    transition: all 0.3s ease;
    &:hover {
      font-weight: bold;
      border-bottom: 1px solid ${colors.alternative};
    }
  }

  @media (max-width: 600px) {
    padding: 1.5rem 0.5rem;

    div {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`
