import React from 'react'
import EnviarMensaje from './EnviarMensaje/EnviarMensaje'
import ChatItem from './ChatItem'


const ChatList = (props) => {
  

  
  const ChatJSX = props.chats.map((chat) => {
    return (
      <div key={chat.id}>
        <div classNamen='primer-titulo'>
          <h2>
            {chat.titulo}
            </h2>
          <img src='' alt='' />
          <span>
            {chat.cantidad}
            </span>
          <span></span>
        </div>

        <div className='segundo-titulo'>
          <button>{chat.titulo1}</button>
          <button>{chat.titulo2}</button>
          <button>{chat.titulo3}</button>
        </div>

        <div className='chat'>
          <li>
            <ChatItem key={chat.id} fecha={chat.fecha} nombre={chat.nombre} mensaje={chat.mensaje} /></li>
        </div>
        
      </div>
    )
  })


  return (
    <>
      <div>
        {ChatJSX}
      </div>
      <div className='enviar-mensaje'>
        <EnviarMensaje />
        
      </div>
      
    </>
  )
}



export default ChatList
