import Button from '../../components/Button'
import { Description, HomeContainer, TextContainer, Title } from './styles'
// import Profile from '../../assets/images/teste.png'
import Logo from '../../assets/images/Logo.png'

const Home = () => {
  return (
    <HomeContainer id="home">
      <Description className="container">
        <Title>
          <img src={Logo} alt="Logo" />
        </Title>
        <TextContainer>
          <h2>
            Aposentadoria Sem Complicação <br /> Garanta Seu Melhor Benefício.
            Fale Conosco no WhatsApp.
          </h2>
          <span>
            Atuação especializada em Direito Previdenciário para conquistar sua
            aposentadoria de forma segura, rápida e sem erros.
          </span>
          <Button>Entre em contato</Button>
        </TextContainer>
      </Description>
    </HomeContainer>
  )
}

export default Home
