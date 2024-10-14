import React from 'react'
import '../style.css'
import Navegador from '../Componentes/NavBar/Navegador'
import { Lateral } from '../Componentes/BarraIzquierda/Lateral'
import { lateral_izq } from '../Componentes/BarraIzquierda/lateralizquierda'
import Canales from '../Componentes/Canales/Canales'
import { canales_data } from '../Componentes/Canales/data_canales'
import Chat from '../Componentes/ChatPrincipal/Chat'
import { chats } from '../Componentes/ChatPrincipal/chat_data'


const HomePage = () => {
  return (
    <>
      <Navegador/>
      <div className='div'>
        <div className='lateral-app'>
        <Lateral lateral_izq={lateral_izq}/>
        </div>

        <div className='centro'>
          <div className='canales-app'>
        <Canales canales_data={canales_data}/>
          </div>
          <div className='chat-principal'>
            <Chat chats={chats} />
          </div>

       
        </div>
      </div> 
    </>
  )
}

export default HomePage
