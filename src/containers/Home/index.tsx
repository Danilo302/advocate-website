import Button from '../../components/Button'
import {
  Description,
  HomeContainer,
  ProfileImage,
  TextContainer,
  Title
} from './styles'
import Profile from '../../assets/images/profile.png'

const Home = () => {
  return (
    <HomeContainer>
      <Description className="container">
        <div>
          <Title>Thayane Kilder</Title>
          <p>ADVOGADA</p>
          <TextContainer>
            <h2>
              Enfrentando um divórcio? <br /> Eu posso te ajudar.
            </h2>
            <span>Dra.Thayne Kilder - Especialista em Direito de Família</span>
            <Button>Entre em contato</Button>
          </TextContainer>
        </div>
        <div>
          <ProfileImage src={Profile} alt="" />
        </div>
      </Description>
    </HomeContainer>
  )
}

export default Home
