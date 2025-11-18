/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { GoLaw } from 'react-icons/go'
import { CardContainer, CardText, CardTitle } from './styles'

type Props = {
  title: string
  text: string
  icon: string
}

const Card = ({ title, text, icon }: Props) => {
  return (
    <CardContainer>
      <img src={icon} />
      <CardTitle>{title}</CardTitle>
      <CardText>{text}</CardText>
    </CardContainer>
  )
}

export default Card
