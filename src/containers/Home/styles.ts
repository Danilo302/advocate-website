import styled from 'styled-components'
import { colors, fonts } from '../../styles'
import backgroundhero from '../../assets/images/background-hero.png'

export const HomeContainer = styled.main`
  display: flex;
  height: 100vh;
  background-image: url(${backgroundhero});
  background-repeat: no-repeat;
  background-size: cover;
`
export const Description = styled.div`

  p {
    font-family: ${fonts.text};
    font-size: 24px;
    font-weight: 700;
    color: ${colors.emphasis};
    text-align: left;

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
`

export const Title = styled.h1`
  ddisplay: flex;
  text-align: center;
  justify-content: center;

  img {
    width: 600px;
    height: auto;
  }
`
export const ProfileConteiner = styled.div``

export const ProfileImage = styled.img`
  width: 900px;
  height: auto;
`
