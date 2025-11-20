import Perfil from '../../assets/images/hero.png'
import Button from '../../components/Button'
import { ProfileImage } from '../Home/styles'
import { AboutContainer, Content, SectionAbout } from './styles'

const About = () => {
  return (
    <SectionAbout className="background-dark">
      <h2>Sobre nós</h2>
      <AboutContainer className="container">
        <div>
          <ProfileImage src={Perfil} alt="" />
        </div>
        <div>
          <Content>
            <h2>Quem vai acompanhar seu Processo?</h2>
            <p>
              Prazer, sou a Dra. Thayane Kilder. Sou advogada e atuo com
              dedicação nas áreas Cível, de Família, Tributária e Trabalhista,
              sempre com o compromisso de oferecer um atendimento ético,
              humanizado e voltado a resultados. Sou pós-graduanda em Processo
              Civil (Legale) e cursando MBA em Gestão Fiscal e Tributária,
              buscando constantemente o aprimoramento para entregar o melhor em
              cada causa⚖️.
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
