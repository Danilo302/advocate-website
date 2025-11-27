import { ComponentType, useState } from 'react'
import { FaList, FaRegWindowClose } from 'react-icons/fa'

import { colors } from '../../styles'
import { NavbarStyles } from './styles'

import Logo from '../../assets/images/logo_secundary.png'

const List = FaList as ComponentType<{ size?: number; color?: string }>
const Closed = FaRegWindowClose as ComponentType<{
  size?: number
  color?: string
}>

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <NavbarStyles>
      <h1>
        <img src={Logo} alt="Kilder Advogados Associados" />
      </h1>
      <div onClick={() => setOpen(!open)} className="icon">
        {open ? (
          <Closed size={30} color={colors.emphasis} />
        ) : (
          <List size={30} color={colors.emphasis} />
        )}
      </div>
      <ul className={open ? 'open' : ''}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#practice-areas">Atuação Previdenciária</a>
        </li>
        <li>
          <a href="#about">Sobre nós</a>
        </li>
        <li>
          <a href="#works">Funciona o acompanhamento</a>
        </li>
        <li>
          <a href="#faq">Perguntas Frequentes</a>
        </li>
        <li>
          <a href="#contact">Contato</a>
        </li>
      </ul>
    </NavbarStyles>
  )
}

export default Navbar
