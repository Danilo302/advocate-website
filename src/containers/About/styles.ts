import styled from 'styled-components'
import { colors } from '../../styles'
import backgroundAbout from '../../assets/images/background-about.png'

export const SectionAbout = styled.section`
  background-image: url(${backgroundAbout});
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  > * {
    position: relative;
    z-index: 2;
  }
`

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 80px;
`
export const Content = styled.div`
  background-color: ${colors.secondary};
  border-radius: 8px;
  padding: 32px;
  margin-left: 40px;
  height: fit-content;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;

  h2 {
    font-size: 32px;
    color: ${colors.emphasis};
    margin-bottom: 32px;
  }

  p {
    font-size: 18px;
    color: ${colors.alternative};
    line-height: 1.6;
  }
`
