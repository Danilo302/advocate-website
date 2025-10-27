import Button from '../../components/Button'
import Card from '../../components/Card'
import {
  DescriptionText,
  PracticeAreaItem,
  PracticeAreasList,
  Title
} from './styles'

const PractieAreas = () => {
  return (
    <section>
      <div className="container">
        <Title>ÁREAS DE ATUAÇÃO</Title>
        <PracticeAreasList>
          <PracticeAreaItem>
            <Card />
          </PracticeAreaItem>
          <PracticeAreaItem className="item-divider">
            <Card />
          </PracticeAreaItem>
          <PracticeAreaItem>
            <Card />
          </PracticeAreaItem>
        </PracticeAreasList>
        <DescriptionText>
          Para se aprofundar nas diversas áreas de atuação do Direito de
          Família, como divórcio, pensão alimentícia, guarda de filhos,
          inventário e planejamento patrimonial, entre em contato conosco e
          obtenha a orientação jurídica especializada que você precisa.
        </DescriptionText>
        <div className="button-area">
          <Button>Fale agora com a advogada</Button>
        </div>
      </div>
    </section>
  )
}

export default PractieAreas
