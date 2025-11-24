import type { ComponentType } from 'react'
import { FaEnvelope, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { ContactContainer } from './styles'

type iconConfig = {
  size?: number
  color?: string
}

const Envelope = FaEnvelope as ComponentType<iconConfig>
const Whatsapp = FaWhatsapp as ComponentType<iconConfig>
const Instagram = FaInstagram as ComponentType<iconConfig>

const Contact = () => {
  return (
    <ContactContainer>
      <div className="container">
        <h1>Contato</h1>
        <ul>
          <li>
            <Envelope />
            <a href="">email@email.com.br</a>
          </li>
          <li>
            <Whatsapp />
            <a
              href="https://wa.me/5521998207416"
              target="_blank"
              rel="noreferrer"
            >
              (21) 99820-7416
            </a>
          </li>
          <li>
            <Instagram />
            <a href="">kilderadvogadosassociados</a>
          </li>
        </ul>
      </div>
    </ContactContainer>
  )
}

export default Contact
