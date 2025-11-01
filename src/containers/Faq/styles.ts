import styled from 'styled-components'
import { colors } from '../../styles'

export const FaqList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px;

  li {
  }

  span {
    font-weight: bold;
    margin-right: 10px;
    margin-left: 5px;
    font-size: 24px;
  }

  h3 {
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    background-color: ${colors.primary};
    color: ${colors.alternative};
    padding: 10px;
  }

  p {
    margin-bottom: 20px;
    padding: 10px;
    background-color: ${colors.alternative};
  }
`
