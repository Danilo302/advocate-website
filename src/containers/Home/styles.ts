import styled from 'styled-components'
import { colors, fonts } from '../../styles'
import backgroundhero from '../../assets/images/background-hero.png'

export const HomeContainer = styled.main`
  display: flex;
  align-items: center;
  height: 100vh;
  background-image: url(${backgroundhero});
  background-repeat: no-repeat;
  background-size: cover;
`
export const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-family: ${fonts.text};
    font-size: 24px;
    font-weight: 700;
    color: ${colors.emphasis};
    text-align: left;

`
export const TextContainer = styled.div`
  h2 {
    font-family: ${fonts.text};
    font-size: 32px;
    font-weight: 700;
    color: ${colors.alternative};
    margin-top: 40px;
  }

  span {
    display: block;
    margin-top: 20px;
    font-family: ${fonts.text};
    font-size: 18px;
    font-weight: 500;
    color: ${colors.alternative};
  }
`

export const Title = styled.h1`
  padding-top: 60px;
  font-family: ${fonts.title};
  font-size: 64px;
  font-weight: 700;
  color: ${colors.background};
`
export const ProfileImage = styled.img`
  width: 660px;
`
