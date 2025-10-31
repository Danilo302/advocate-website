import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  color: ${colors.emphasis};
  font-weight: 700;
  font-family: ${fonts.title};
  margin: 64px 0;
`

export const ItensContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 80px 0;
  padding-top: 80px;
  padding-bottom: 80px;
  gap: 24px;
`
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;

  h3 {
    margin: 16px 0;
    font-size: 24px;
    color: ${colors.primary};
  }

  p {
    font-size: 18px;
    color: ${colors.secondary};
  }
`
