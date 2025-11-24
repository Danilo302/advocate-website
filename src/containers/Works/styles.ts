import styled from 'styled-components'
import { colors, fonts } from '../../styles'
import backgroundImage from '../../assets/images/background-about.png'

export const WorksContainer = styled.section`
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    filter: brightness(50%);
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 150px; /* Altura do sombreado */
    background: linear-gradient(
      to bottom,
      rgba(36, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0.6) 70%,
      transparent 100%
    );
    z-index: 0;
  }

  & .container {
    position: relative;
    z-index: 2;
  }

  border-bottom: 8px solid transparent;
  border-image: linear-gradient(
      to right,
      #f6dba6,
      #ffebc4,
      #f0be79,
      #8f653b,
      #673d22,
      #ba7f3b,
      #eebc70
    )
    1;

  @media (max-width: 768px) {
    padding: 20px 0;
  }

  @media (max-width: 480px) {
    padding: 10px 0;
  }
`

export const Title = styled.h2`
  text-align: center;
  font-size: 40px;
  color: ${colors.emphasis};
  font-weight: 700;
  font-family: ${fonts.title};
  margin: 40px 0;
  padding-top: 40px;

  @media (max-width: 768px) {
    font-size: 32px;
    margin: 20px 0;
  }

  @media (max-width: 480px) {
    font-size: 28px;
    margin: 10px 0;
  }
`

export const ItensContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 80px 0;
  padding-top: 40px;
  padding-bottom: 80px;
  gap: 24px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 40px 0;
    gap: 64px;
  }

  @media (max-width: 480px) {
    margin: 20px 0;
    padding-bottom: 20px;
  }
`
export const Item = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 40px;
  max-width: 600px;
  margin: 0 auto;
  color: ${colors.background};

  h3 {
    margin: 16px 0;
    font-size: 24px;
    color: ${colors.emphasis};
  }

  p {
    font-size: 20px;
    color: ${colors.alternative};
    font-family: ${fonts.text};
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    padding: 20px;

    h3 {
      font-size: 20px;
    }

    p {
      font-size: 18px;
    }
  }

  @media (max-width: 480px) {
    padding: 10px;

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 16px;
    }
  }
`
