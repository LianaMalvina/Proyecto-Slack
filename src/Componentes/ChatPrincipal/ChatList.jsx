import React from 'react'
import EnviarMensaje from './EnviarMensaje/EnviarMensaje'
import ChatItem from './ChatItem'
import './chatstilo.css'



const ChatList = (props) => {

  const ChatJSX = props.chats.map((chat) => {
    return (    

        <div className='chat'>
          <li>
            <ChatItem key={chat.id} fecha={chat.fecha} nombre={chat.nombre} mensaje={chat.mensaje} /></li>
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
