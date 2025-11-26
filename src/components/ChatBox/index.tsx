import { FaWhatsapp } from 'react-icons/fa'
import { ChatBoxContainer } from './styles'

const WhatsappIcon = FaWhatsapp as React.ComponentType<{
  size?: number
  color?: string
}>

const ChatBox = () => {
  return (
    <ChatBoxContainer>
      <a
        className="icon-pulse"
        href="https://wa.me/5521998207416"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsappIcon color="#ffff" />
        <span>Falar com o Advogado</span>
      </a>
    </ChatBoxContainer>
  )
}

export default ChatBox
