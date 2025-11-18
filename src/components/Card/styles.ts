import styled from 'styled-components'
import { colors } from '../../styles'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${colors.primary};
  max-width: 350px;
  width: 100%;
  max-height: 400px;
  height: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 16px;
  color: ${colors.alternative};

  &&:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  img {
    width: 80px;
    height: 80px;
    object-fit: contain;
  }
`
export const CardTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 16px;
  font-size: 24px;
  text-align: center;
`
export const CardText = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 1.5;
`
