import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const Title = styled.h2`
  font-family: ${fonts.title};
  font-size: 48px;
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`
export const PracticeAreasList = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  flex-wrap: wrap;
`
