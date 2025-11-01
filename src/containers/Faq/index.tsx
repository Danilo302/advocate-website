import { useState } from 'react'
import { FaqList } from './styles'

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
        <h2>Perguntas Frequentes</h2>
        <FaqList>
          <li>
            <h3 onClick={() => handleToggle(1)}>
              <span>{isOpen === 1 ? '-' : '+'}</span> Como posso agendar uma
              consulta?
            </h3>
            {isOpen === 1 && (
              <p>
                Você pode agendar uma consulta entrando em contato pelo nosso
                site ou telefone.
              </p>
            )}
          </li>
        </FaqList>
      </div>
    </section>
  )
}

export default Faq
