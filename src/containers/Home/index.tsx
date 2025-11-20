import Button from '../../components/Button'
import {
  Description,
  HomeContainer,
  ProfileConteiner,
  ProfileImage,
  TextContainer,
  Title
} from './styles'
// import Profile from '../../assets/images/teste.png'
import Logo from '../../assets/images/Logo.png'

const Home = () => {
  return (
    <HomeContainer>
      <Description className="container">
        <div>
          <Title>
            <img src={Logo} alt="Logo" />
          </Title>
          <TextContainer>
            <h2>
              Aposentadoria Sem Complicação <br /> Garanta Seu Melhor Benefício.
              Fale Conosco no WhatsApp.
            </h2>
            <span>
              Atuação Especializada em Direito Previdenciário para Conquistar
              sua Aposentadoria de Forma Segura, Rápida e sem Erros
            </span>
            <Button>Entre em contato</Button>
          </TextContainer>
        </div>
        {/* <ProfileConteiner>
          <ProfileImage src={Profile} alt="" />
        </ProfileConteiner> */}
      </Description>
    </HomeContainer>
  )
}

export default Home
