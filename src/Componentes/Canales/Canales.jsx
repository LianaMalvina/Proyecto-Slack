import React from 'react'
import './canalestilo.css'
import { ICONS_CANALES } from './iconos-canales'

const Canales = (props) => {

    const CanalesJSX = props.canales_data.map((canal)=> {

      const IconChannel = ICONS_CANALES[canal.icon]
        return(
            <>
            <div className='contenedor-canales'>
                <div className='canales-hashtag'>
                  <button className='canales-titulo'>#{canal.titulo}</button>
                  <button className='canales-icons'><IconChannel/></button>
                </div>

                <div className='canales-text'>
                    {canal.text}
                </div>
                <div>

                </div>

            </div>

            </>
        )
    })

  return (
    <div>
      {CanalesJSX}
    </div>
  )
}

export default Canales
