/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { GoLaw } from 'react-icons/go'
import { FaFileAlt, FaPhone, FaRegListAlt } from 'react-icons/fa'
import { Item, ItensContainer, Title, WorksContainer } from './styles'

const Works = () => {
  return (
    <WorksContainer>
      <div className="container">
        <Title>Como funciona o acompanhamento processual jurídico?</Title>
        <ItensContainer>
          <Item>
            {React.createElement(
              FaPhone as unknown as React.ComponentType<any>,
              {
                size: 50
              }
            )}
            <h3>Contato Inicial</h3>
            <p>
              Você entra em contato com nossa equipe, informando sua situação e
              dúvidas sobre aposentadoria, revisão ou benefício negado.
            </p>
          </Item>
          <Item>
            {React.createElement(
              FaFileAlt as unknown as React.ComponentType<any>,
              {
                size: 50
              }
            )}
            <h3>Análise do Histórico Contributivo</h3>
            <p>
              Realizamos uma análise completa do seu CNIS, contribuições,
              vínculos e possíveis irregularidades. Identificamos se há direito
              à revisão ou ao melhor benefício
            </p>
          </Item>
          <Item>
            {React.createElement(GoLaw as unknown as React.ComponentType<any>, {
              size: 50
            })}
            <h3>Estratégia e Protocolo no INSS</h3>
            <p>
              Montamos toda a estratégia previdenciária, organizamos a
              documentação e protocolamos o seu pedido de forma técnica para
              aumentar as chances de aprovação
            </p>
          </Item>
          <Item>
            {React.createElement(
              FaRegListAlt as unknown as React.ComponentType<any>,
              {
                size: 50
              }
            )}
            <h3>Acompanhamento e Atualizações</h3>
            <p>
              Acompanhamos cada etapa do processo no INSS ou na Justiça,
              informando você sobre qualquer andamento até a concessão do
              benefício.
            </p>
          </Item>
        </ItensContainer>
      </div>
    </WorksContainer>
  )
}

export default Works
