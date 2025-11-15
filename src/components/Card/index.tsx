/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { GoLaw } from 'react-icons/go'
import { CardContainer } from './styles'

const Card = () => {
  return (
    <CardContainer>
      {React.createElement(GoLaw as unknown as React.ComponentType<any>, {
        size: 50
      })}
      <h3>Divórcio Extrajudicia</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum
        numquam sapiente officia dicta tempora voluptas quasi deserunt
        recusandae sequi vero beatae, delectus aspernatur voluptatibus quisquam
        blanditiis ipsam! Quis, unde.
      </p>
    </CardContainer>
  )
}

export default Card
