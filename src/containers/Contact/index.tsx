import type { ComponentType } from 'react'
import {
  FaEnvelope,
  FaWhatsapp,
  FaInstagram,
  FaLocationArrow
} from 'react-icons/fa'

import { ContactContainer } from './styles'

type iconConfig = {
  size?: number
  color?: string
}

const Envelope = FaEnvelope as ComponentType<iconConfig>
const Whatsapp = FaWhatsapp as ComponentType<iconConfig>
const Instagram = FaInstagram as ComponentType<iconConfig>
const Location = FaLocationArrow as ComponentType<iconConfig>

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <div className="container">
        <h1>Contato</h1>
        <ul>
          <li>
            <Envelope />
            <a
              href="mailto:kilderadvogadosassociados@gmail.com?subject=Contato%20pelo%20site&body=Olá,%20gostaria%20de%20falar%20sobre..."
              target="_blank"
              rel="noreferrer"
            >
              kilderadvogadosassociados@gmail.com
            </a>
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
            <a
              href="https://www.instagram.com/kilderadvogadosassociados/?igsh=c2JqZnVzNDdnbDJ0#"
              target="_blank"
              rel="noreferrer"
            >
              kilderadvogadosassociados
            </a>
          </li>
        </ul>
        <span>
          <Location />
          <a
            href="https://maps.app.goo.gl/QjoM6yvCH9akV6rz6"
            target="_blank"
            rel="noreferrer"
          >
            Avenida Ministro fernando Costa, 483, Seropédica/RJ
          </a>
        </span>
      </div>
    </ContactContainer>
  )
}

export default Contact
