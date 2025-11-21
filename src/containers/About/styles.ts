import styled from 'styled-components'
import { colors } from '../../styles'

export const SectionAbout = styled.section`
  background-color: ${colors.primary};
  background: #020024;
background: linear-gradient(3deg, rgba(36, 0, 0, 1) 10%, rgba(64, 10, 10, 1) 30%, rgba(90, 15, 15, 1)
100%);
startColorstr="#020024",
endColorstr="#5A0FOF",
GradientType=0
)
  width: 100%;
  min-height: 100vh;

  border-top: 8px solid transparent;
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
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px 0;
  }


`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 80px;

  h1 {
    font-size: 48px;
    color: ${colors.emphasis};
    margin-bottom: 40px;
  }

  .alternateColor {
    background-color: ${colors.primary};

    p {
      color: ${colors.alternative};
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
      text-align: center;
    }

    .alternateColor {
      flex-direction: column-reverse;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 28px;
    }
  }
`
export const Content = styled.div`
  background-color: ${colors.alternative};
  border-radius: 10px;
  padding: 32px;
  margin-left: 40px;
  height: fit-content;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  margin-top: 40px;
  display: flex;

  h2 {
    font-size: 32px;
    color: ${colors.emphasis};
    margin-bottom: 32px;
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(
        to right,
        #f6dba6,
        #f0be79,
        #8f653b,
        #673d22,
        #ba7f3b,
        #eebc70
      )
      1;
    padding-bottom: 8px;
  }

  p {
    font-size: 24px;
    color: ${colors.secondary};
    line-height: 1.6;
  }

  img {
    width: 350px;
    height: auto;
    border-radius: 50%;
    margin: 32px;
    background-color: ${colors.primary};
    border: 4px solid ${colors.emphasis};
  }

  &&: hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    border: 3px solid transparent;
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
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-left: 0;
    padding: 20px;

    h2 {
      font-size: 28px;
    }

    p {
      font-size: 20px;
    }

    img {
      width: 250px;
      margin: 16px 0;
    }
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 24px;
    }

    p {
      font-size: 18px;
    }

    img {
      width: 200px;
    }
  }
`
