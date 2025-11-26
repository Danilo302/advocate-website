import styled from 'styled-components'
import { colors } from '../../styles'

export const ChatBoxContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  .icon-pulse {
    animation: pulse 3s ease-in-out 15;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.1);
    }
  }

  a {
    height: 72px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 32px;
    background-color: #55a630;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease;

    span {
      color: ${colors.alternative};
      font-size: 16px;
      font-weight: 700;
      margin-left: 12px;
    }

    &:hover {
      box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
      transform: translateY(-2px);
    }

    svg {
      width: 50px;
      height: 50px;
    }
  }
`
