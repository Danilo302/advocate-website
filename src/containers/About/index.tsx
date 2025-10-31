import Perfil from '../../assets/images/profile.png'
import Button from '../../components/Button'
import { ProfileImage } from '../Home/styles'
import { AboutContainer, Content, SectionAbout } from './styles'

const About = () => {
  return (
    <SectionAbout className="background-dark">
      <AboutContainer className="container">
        <div>
          <ProfileImage src={Perfil} alt="" />
        </div>
        <div>
          <Content>
            <h2>Quem vai acompanhar seu Processo?</h2>
            <p>
              Olá! Eu sou a Thayane, advogada apaixonada por ajudar pessoas a
              navegarem pelo sistema jurídico com confiança e tranquilidade. Com
              anos de experiência em diversas áreas do direito, estou aqui para
              oferecer suporte jurídico personalizado e eficaz.
            </p>
          </Content>
          <div className="button-area">
            <Button>Fale agora com a advogada</Button>
          </div>
        </div>
      </AboutContainer>
    </SectionAbout>
  )
}

export default About
