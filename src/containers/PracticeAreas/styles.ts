import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const Title = styled.h2`
  font-family: ${fonts.title};
  font-size: 48px;
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  margin: 40px 0 40px 0;
`
export const PracticeAreasList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 64px 0;

  .item-divider {
    border-right: 2px solid ${colors.emphasis};
    border-left: 2px solid ${colors.emphasis};
  }
`
export const PracticeAreaItem = styled.li`
  padding: 20px 32px;
`
export const DescriptionText = styled.span`
  display: block;
  font-family: ${fonts.text};
  color: #2c2c2c;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px auto;
  font-size: 24px;
  line-height: 1.6;
  font-weight: 700;
`
