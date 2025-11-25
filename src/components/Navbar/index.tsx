import { NavbarStyles } from './styles'
import Logo from '../../assets/images/logo_secundary.png'

const Navbar = () => {
  return (
    <NavbarStyles>
      <h1>
        <img src={Logo} alt="Kilder Advogados Associados" />
      </h1>
      <ul>
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
