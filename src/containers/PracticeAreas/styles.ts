import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const Title = styled.h2`
  font-family: ${fonts.title};
  font-size: 48px;
  color: ${colors.primary};
  display: flex;
  justify-content: center;
  margin: 40px 0 40px 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
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

  @media (max-width: 1280px) {
    .item-divider {
      border-right: none;
      border-left: none;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    .item-divider {
      border-right: none;
      border-left: none;
      border-top: 2px solid ${colors.emphasis};
      border-bottom: 2px solid ${colors.emphasis};
      width: 80%;
      margin: 16px 0;
    }
  }

  @media (max-width: 480px) {
    .item-divider {
      width: 100%;
    }
  }
`
export const PracticeAreaItem = styled.li`
  padding: 20px 32px;

  @media (max-width: 768px) {
    padding: 16px 24px;
  }

  @media (max-width: 480px) {
    padding: 12px 16px;
  }
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

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 32px;
    padding: 0 16px;
  }

  @media (max-width: 480px) {
    font-size: 16px;
    margin-bottom: 24px;
  }
`
