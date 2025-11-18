import Button from '../../components/Button'
import Card from '../../components/Card'
import {
  DescriptionText,
  PracticeAreaItem,
  PracticeAreasList,
  Title
} from './styles'

import Calc from '../../assets/images/icons/lucro.png'

const PractieAreas = () => {
  return (
    <section>
      <div className="container">
        <Title>Sobre a Atuação Previdenciária</Title>
        <PracticeAreasList>
          <PracticeAreaItem>
            <Card
              icon={Calc}
              title="Cálculo do Melhor Benefício"
              text="Garantimos que você descubra qual é a aposentadoria mais vantajosa conforme seu histórico de contribuições. Realizamos cálculos completos, análises detalhadas e identificamos direitos ocultos que podem aumentar o valor do benefício."
            />
          </PracticeAreaItem>
          <PracticeAreaItem className="item-divider">
            <Card
              icon={Calc}
              title="Aposentadoria (Idade, Tempo, Especial e Híbrida)"
              text="Atuamos em todas as modalidades de aposentadoria, orientando desde a análise inicial até o protocolo no INSS. Nosso objetivo é assegurar que você receba o benefício correto, sem erros e sem perdas financeiras."
            />
          </PracticeAreaItem>
          <PracticeAreaItem>
            <Card
              icon={Calc}
              title="Recursos e Revisões no INSS"
              text="Se o INSS negou sua aposentadoria ou concedeu um valor menor do que deveria, realizamos recursos administrativos, revisões e acompanhamento integral até a Justiça, quando necessário."
            />
          </PracticeAreaItem>
        </PracticeAreasList>
        <DescriptionText>
          Para orientar você de forma completa sobre aposentadoria, revisões e
          direitos previdenciários, analisamos cada caso de maneira individual.
          Seja cálculo do melhor benefício, revisão de aposentadoria, benefício
          por incapacidade ou dúvidas sobre quando se aposentar, nossa equipe
          está pronta para ajudar com atendimento técnico e humanizado.
        </DescriptionText>
        <div className="button-area">
          <Button>Fale agora com a advogada</Button>
        </div>
      </div>
    </section>
  )
}

export default PractieAreas
