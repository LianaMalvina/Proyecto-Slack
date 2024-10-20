import React from 'react'
import '../homepage.css'
import Navegador from '../Componentes/NavBar/Navegador'
import { Lateral } from '../Componentes/BarraIzquierda/Lateral'
import { lateral_izq } from '../Componentes/BarraIzquierda/lateralizquierda'
import Canales from '../Componentes/Canales/Canales'
import { canales_data_inicial } from '../Componentes/Canales/data_canales'
import ChatList from '../Componentes/ChatPrincipal/ChatList'
import { chats } from '../Componentes/ChatPrincipal/chat_data'
import { IconosDerechos } from '../Componentes/ChatPrincipal/EnviarMensaje/titulochats'


const HomePage = () => {
  return (
    <>
      <Navegador />
      <div className='div'>
        <div className='lateral-app'>
          <span style={{
            color: 'black', textAlign: 'center', backgroundColor: '#ababad',
            width: '60%', justifyItems: 'center', marginLeft: '12px', height: '40px', alignContent: 'center',
            borderRadius: '6px', marginBottom: '35px', fontSize: '20px'
          }}>UP</span>
          <div className='iconos-importados' style={{ marginTop: '-30px' }}>
            <Lateral lateral_izq={lateral_izq} />
          </div>
        </div>

        <div className='centro'>
          <div className='canales-app'>
            <Canales canales_data={canales_data_inicial} />
          </div>

          <div className='chat-principal'>

            <div className='chat-ppal'>
              <IconosDerechos className='' />
            </div>
            <ChatList chats={chats} />
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage
