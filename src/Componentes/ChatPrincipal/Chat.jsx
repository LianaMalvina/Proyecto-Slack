import React from 'react'



const Chat = (props) => {
    const ChatJSX = props.chats.map((chat)=>
{
    return(
        <div>
        <div classNamen='primer-titulo'>
        <h2>{chat.titulo}</h2>
        <img src='' alt=''/>
        <span>{chat.cantidad}</span>
        <span></span>
        </div>
        <div className='segundo-titulo'>
        <button>{chat.titulo1}</button><button>{chat.titulo2}</button><button>{chat.titulo3}</button>
        </div>
        <div className='chat'>
        <span>{chat.fecha}</span><h3>{chat.nombre}</h3><p>{chat.mensaje}</p>
        </div>

        </div>
    )
})

        
    
  return (
    <div>
      {ChatJSX}
    </div>
  )
}

export default Chat
