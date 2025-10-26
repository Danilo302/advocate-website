import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import { ButtonStyles } from './styles'

type Props = {
  children: string
}

const Whatsapp = FaWhatsapp as unknown as React.ComponentType<{
  size?: number
  color?: string
}>

const Button = ({ children }: Props) => {
  return (
    <ButtonStyles>
      <Whatsapp size={24} color="#F5F5F5" />
      {children}
    </ButtonStyles>
  )
}

export default Button
