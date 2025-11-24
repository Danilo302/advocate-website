import styled from 'styled-components'
import { colors } from '../../styles'

export const ButtonStyles = styled.a`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 600;
  color: ${colors.alternative};
  background-color: ${colors.emphasis};
  cursor: pointer;
  margin-top: 32px;
  transition: background-color 0.3s ease;
  transition: transform 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;

  &:hover {
    filter: brightness(1.1);
    transform: scale(1.1);
  }
`
