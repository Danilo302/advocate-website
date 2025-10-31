import React from 'react'
import { GoLaw } from 'react-icons/go'
import { Item, ItensContainer, Title } from './styles'

const Works = () => {
  return (
    <section>
      <div className="container">
        <Title>Como funciona o acompanhamento processual jurídico?</Title>
        <ItensContainer>
          <Item>
            {React.createElement(GoLaw as unknown as React.ComponentType<any>, {
              size: 50
            })}
            <h3>Contato Inicial</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            </p>
          </Item>
          <Item>
            {React.createElement(GoLaw as unknown as React.ComponentType<any>, {
              size: 50
            })}
            <h3>Contato Inicial</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            </p>
          </Item>
          <Item>
            {React.createElement(GoLaw as unknown as React.ComponentType<any>, {
              size: 50
            })}
            <h3>Contato Inicial</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            </p>
          </Item>
          <Item>
            {React.createElement(GoLaw as unknown as React.ComponentType<any>, {
              size: 50
            })}
            <h3>Contato Inicial</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            </p>
          </Item>
        </ItensContainer>
      </div>
    </section>
  )
}

export default Works
