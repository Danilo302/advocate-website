import { useState } from 'react'
import { AreaTitle, FaqList } from './styles'
import Button from '../../components/Button'

const Faq = () => {
  const [isOpen, setIsOpen] = useState(0)

  const handleToggle = (index: number) => {
    if (isOpen === index) {
      setIsOpen(0)
    } else {
      setIsOpen(index)
    }
  }

  return (
    <section>
      <div className="container">
        <AreaTitle>
          <h2>Perguntas Frequentes</h2>
        </AreaTitle>
        <FaqList>
          <li>
            <h3 onClick={() => handleToggle(1)}>
              <span>{isOpen === 1 ? '-' : '+'}</span> Como posso agendar uma
              consulta?
            </h3>
            <p className={isOpen === 1 ? 'open' : ''}>
              Você pode agendar uma consulta entrando em contato pelo nosso site
              ou telefone.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(2)}>
              <span>{isOpen === 2 ? '-' : '+'}</span> Como posso agendar uma
              consulta?
            </h3>
            <p className={isOpen === 2 ? 'open' : ''}>
              Você pode agendar uma consulta entrando em contato pelo nosso site
              ou telefone.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(3)}>
              <span>{isOpen === 3 ? '-' : '+'}</span> Como posso agendar uma
              consulta?
            </h3>
            <p className={isOpen === 3 ? 'open' : ''}>
              Você pode agendar uma consulta entrando em contato pelo nosso site
              ou telefone.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(4)}>
              <span>{isOpen === 4 ? '-' : '+'}</span> Como posso agendar uma
              consulta?
            </h3>
            <p className={isOpen === 4 ? 'open' : ''}>
              Você pode agendar uma consulta entrando em contato pelo nosso site
              ou telefone.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(5)}>
              <span>{isOpen === 5 ? '-' : '+'}</span> Como posso agendar uma
              consulta?
            </h3>
            <p className={isOpen === 5 ? 'open' : ''}>
              Você pode agendar uma consulta entrando em contato pelo nosso site
              ou telefone.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(6)}>
              <span>{isOpen === 6 ? '-' : '+'}</span> Como posso agendar uma
              consulta?
            </h3>
            <p className={isOpen === 6 ? 'open' : ''}>
              Você pode agendar uma consulta entrando em contato pelo nosso site
              ou telefone.
            </p>
          </li>
        </FaqList>
        <AreaTitle>
          <Button>Entre em contato</Button>
        </AreaTitle>
      </div>
    </section>
  )
}

export default Faq
