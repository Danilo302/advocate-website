import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  max-width: 350px;
  width: 100%;
  padding: 30px;
  border-radius: 16px;
  color: ${colors.alternative};

  h3 {
    margin-top: 20px;
    margin-bottom: 16px;
    font-size: 24px;
  }

  p {
    text-align: center;
    font-size: 16px;
    line-height: 1.5;
  }
`
