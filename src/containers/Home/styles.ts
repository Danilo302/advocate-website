import styled from 'styled-components'
import { colors, fonts } from '../../styles'
import backgroundhero from '../../assets/images/background-hero.png'

export const HomeContainer = styled.main`
  display: flex;
  height: 100vh;
  background-image: url(${backgroundhero});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  justify-content: center;
`
export const Description = styled.div`
  position: absolute;
  z-index: 2;

  p {
    font-family: ${fonts.text};
    font-size: 24px;
    font-weight: 700;
    color: ${colors.emphasis};
    text-align: left;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 10px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  h2 {
    font-family: ${fonts.text};
    font-size: 32px;
    font-weight: 700;
    color: ${colors.alternative};
  }

  span {
    display: block;
    margin-top: 20px;
    font-family: ${fonts.text};
    font-size: 18px;
    font-weight: 500;
    color: ${colors.emphasis};
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 24px;
    }

    span {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 20px;
    }

    span {
      font-size: 14px;
    }
  }
`

export const Title = styled.h1`
  ddisplay: flex;
  text-align: center;
  justify-content: center;

  img {
    width: 600px;
    height: auto;
  }

  @media (max-width: 768px) {
    img {
      width: 400px;
    }
  }

  @media (max-width: 480px) {
    img {
      width: 300px;
    }
  }
`
