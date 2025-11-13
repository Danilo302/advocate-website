import styled from 'styled-components'
import { colors } from '../../styles'

export const FaqList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f9f9f9;
  padding: 20px;

  li {
    margin-bottom: 10px;
  }

  span {
    font-weight: bold;
    margin-right: 10px;
    margin-left: 5px;
    font-size: 24px;
    color: ${colors.emphasis};
  }

  h3 {
    cursor: pointer;
    border-bottom: 1px solid #ddd;
    background-color: ${colors.primary};
    color: ${colors.alternative};
    padding: 10px;
  }

  p {
    background-color: ${colors.alternative};
    border-left: 4px solid ${colors.primary};
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: all 0.4s ease;

    &.open {
      max-height: 100px;
      opacity: 1;
      margin-bottom: 4px;
      padding: 10px;
    }
  }
`
export const AreaTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;

  h2 {
    font-family: 'Lora', serif;
    color: ${colors.emphasis};
    font-size: 32px;
    font-weight: 700;
  }
`
