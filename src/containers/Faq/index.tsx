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
    <section id="faq">
      <div className="container">
        <AreaTitle>
          <h2>Perguntas Frequentes</h2>
        </AreaTitle>
        <FaqList>
          <li>
            <h3 onClick={() => handleToggle(1)}>
              <span>{isOpen === 1 ? '-' : '+'}</span> Quando posso me aposentar?
            </h3>
            <p className={isOpen === 1 ? 'open' : ''}>
              A idade mínima e o tempo de contribuição variam conforme seu
              histórico profissional. Analisamos seu CNIS e calculamos a data
              exata da sua aposentadoria.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(2)}>
              <span>{isOpen === 2 ? '-' : '+'}</span> Qual é o melhor tipo de
              aposentadoria para mim?
            </h3>
            <p className={isOpen === 2 ? 'open' : ''}>
              Aposentadoria por idade, tempo, especial, híbrida… cada caso é
              diferente. Realizamos cálculos comparativos para descobrir qual
              modalidade garante o maior valor possível para você.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(3)}>
              <span>{isOpen === 3 ? '-' : '+'}</span> O que fazer se o INSS
              negar meu pedido?
            </h3>
            <p className={isOpen === 3 ? 'open' : ''}>
              Nossa equipe avalia o motivo da negativa, corrige eventuais falhas
              e entra com recurso administrativo ou ação judicial, conforme
              necessário.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(4)}>
              <span>{isOpen === 4 ? '-' : '+'}</span> Posso aumentar o valor da
              minha aposentadoria?
            </h3>
            <p className={isOpen === 4 ? 'open' : ''}>
              Sim. Em muitos casos é possível identificar contribuições não
              contabilizadas, vínculos não registrados ou aplicar revisões que
              aumentam o benefício.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(5)}>
              <span>{isOpen === 5 ? '-' : '+'}</span> Como funciona o
              acompanhamento do processo?
            </h3>
            <p className={isOpen === 5 ? 'open' : ''}>
              Você recebe atualizações claras em cada etapa. Monitoramos o
              protocolo no INSS e, se houver necessidade, atuamos também na
              Justiça.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(6)}>
              <span>{isOpen === 6 ? '-' : '+'}</span> Quanto custa para dar
              entrada na aposentadoria?
            </h3>
            <p className={isOpen === 6 ? 'open' : ''}>
              Os valores variam conforme a complexidade do caso. A primeira
              análise é gratuita, e explicamos tudo antes de qualquer
              contratação.
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(7)}>
              <span>{isOpen === 7 ? '-' : '+'}</span> É possível revisar um
              benefício já concedido?
            </h3>
            <p className={isOpen === 7 ? 'open' : ''}>
              Sim — revisões podem corrigir erros do INSS e aumentar o valor.
              Mas é importante respeitar o prazo de 10 anos (decadência).
            </p>
          </li>
          <li>
            <h3 onClick={() => handleToggle(8)}>
              <span>{isOpen === 8 ? '-' : '+'}</span> O INSS errou no cálculo da
              minha aposentadoria. Posso corrigir?
            </h3>
            <p className={isOpen === 8 ? 'open' : ''}>
              Pode sim. Avaliamos os erros e entramos com pedido de revisão
              administrativa ou ação judicial.
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
