import Card from '../../components/Card'
import { PracticeAreasList, Title } from './styles'

const PractieAreas = () => {
  return (
    <section>
      <div className="container">
        <Title>Practice Areas</Title>
        <PracticeAreasList>
          <Card />
          <Card />
          <Card />
        </PracticeAreasList>
      </div>
    </section>
  )
}

export default PractieAreas
