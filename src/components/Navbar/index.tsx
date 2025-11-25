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
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Atuação Previdenciária</a>
        </li>
        <li>
          <a href="">Sobre nós</a>
        </li>
        <li>
          <a href="">Funciona o acompanhamento</a>
        </li>
        <li>
          <a href="">Perguntas Frequentes</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </NavbarStyles>
  )
}

export default Navbar
