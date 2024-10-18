import React from 'react'
import './canalestilo.css'
import { ICONS_CANALES } from './iconos-canales'
import { obtenerNuevoCanal } from './data_canales'
import { Link } from 'react-router-dom'



const Canales = () => {

    const espaciosnuevos = obtenerNuevoCanal()

     
        return(
            <>
            <h2>UTN PWI TM LUN-MIE</h2>
            <h3>Hilos de conversación</h3>
            <h4>Borradores y enviados</h4>
            <h4>Canales</h4>
            {
              espaciosnuevos.map((espacionuevo)=>{
               
                return(
                  <div key={espacionuevo.id}>
                    <Link><h3># {espacionuevo.titulo}</h3></Link>
                                     
                  </div>
                )
              })
            }
            <div className=''>
                <div className=''>
                <p>Mensajes directos</p>
                <p>Liana Kachuk</p>
                <p>Añadir compañeros de trabajo</p>
               <p> Aplicaciones</p>

            </div></div>

            </>
        )
    }



export default Canales
