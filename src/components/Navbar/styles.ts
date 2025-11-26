import styled from 'styled-components'
import { colors, fonts } from '../../styles'

export const NavbarStyles = styled.nav`
  background-color: ${colors.primary};
  font-family: ${fonts.text};
  padding: 1rem 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .icon {
    display: none;
    cursor: pointer;
  }

  h1 {
    margin: 0;
    display: flex;
    align-items: center;
  }

  h1 img {
    height: 40px;
  }

  ul {
    display: flex;
    gap: 1rem;
    margin: 0;
    padding: 0;

    li {
      a {
        color: ${colors.alternative};
        font-weight: 500;
        border-bottom: 2px solid transparent;
        transition: color 0.3s ease;

        &:hover {
          color: ${colors.emphasis};
          border-bottom: 2px solid ${colors.emphasis};
        }
      }
    }
  }

  @media (max-width: 768px) {
    .icon {
      display: flex;
    }

    ul {
      display: flex;
      opacity: 0;
      visibility: hidden;
      flex-direction: column;
      position: absolute;
      top: 70px;
      right: 0;
      background-color: ${colors.primary};
      width: 100%;
      text-align: center;
      padding: 1rem 0;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: opacity 0.3s ease, visibility 0.3s ease;
    }

    .open {
      opacity: 1;
      visibility: visible;

      li {
        margin: 0.5rem 0;
        transform: translateY(0);
        transition: transform 0.3s ease;
      }
    }
  }
`
