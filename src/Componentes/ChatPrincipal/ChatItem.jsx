import React from "react"
const ChatItem = (props) => {
    return (
      <div>
        <span>{props.fecha}</span>
        <div>{props.nombre}</div>
        <p>{props.mensaje}</p>
      </div>
    )
  
  }

export default ChatItem
