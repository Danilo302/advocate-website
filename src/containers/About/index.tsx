import { AboutContainer, Content, SectionAbout } from './styles'
import Profile from '../../assets/images/hero.png'
import Profile2 from '../../assets/images/profile2.png'

const About = () => {
  return (
    <SectionAbout>
      <AboutContainer className="container">
        <h1>Sobre Nós</h1>
        <Content>
          <img src={Profile} alt="" />
          <div>
            <h2>Dra. Thayane Kilder</h2>
            <p>
              Dra. Thayane Kilder é advogada atuante nas áreas Cível, Família,
              Trabalhista, Tributário e Previdenciário, com sólida experiência
              em atendimento estratégico e humanizado. Pós-graduanda em Processo
              Civil pela Legale e cursando MBA em Gestão Fiscal e Tributária,
              alia conhecimento técnico à empatia no tratamento de cada caso.
              Comprometida com ética, transparência e resultados, oferece
              soluções jurídicas claras e eficazes, sempre focada na melhor
              defesa dos interesses de seus clientes.
            </p>
          </div>
        </Content>
        <Content className="alternateColor">
          <div>
            <h2>Dr. Dhiego Monteiro</h2>
            <p>
              Dr. Dhiego Monteiro é advogado especializado em Direito de Família
              e Direito Civil, com mais de quatro anos de experiência prática.
              Graduado pela UNISUAM e pós-graduando em Direito Previdenciário e
              de Família pela Legale, destaca-se pelo atendimento cuidadoso,
              estratégico e humanizado. Sua atuação é pautada na
              responsabilidade, empatia e entrega de soluções jurídicas
              eficientes, sempre priorizando a proteção e o bem-estar de seus
              clientes.
            </p>
          </div>
          <img src={Profile2} alt="" />
        </Content>
      </AboutContainer>
    </SectionAbout>
  )
}

export default About
