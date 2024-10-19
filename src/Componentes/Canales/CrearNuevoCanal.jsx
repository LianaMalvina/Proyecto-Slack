import React, { useState } from 'react'
import { canales_data_inicial, crearNuevosCanales } from './data_canales'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import './estilonuevocanal.css'


const CrearNuevoCanal = () => {
    const navigation = useNavigate()
    const [nombre_canal, setNombre_canal] = useState('')
    const [errorCrearcanalRepeated, setErrorcrearcanalRepeated] = useState(false)

    const handleSubmit = (evento) => {
        evento.preventDefault()

        const formulario = new FormData(evento.target);
        const nuevoespacio = formulario.get('nombre-espacio')
        const canalnuevo = formulario.get('nombre_canal')


        if (nuevoespacio && canalnuevo && !errorCrearcanalRepeated) {
            const espacio = {
                titulo: nuevoespacio,
                canal: canalnuevo,
            }

            crearNuevosCanales(espacio)
            navigation('/inicio/home')
        }
    }

    const handleChangeCrearcanalname = (evento) => {
        setNombre_canal(evento.target.value)
    }

    const isInUseCrearCanalName = (nombre_canal) => {
        return canales_data_inicial.some(grupo =>
            grupo.canales.some(canal => canal.name === nombre_canal)
        )
    }

    useEffect(() => {
        setErrorcrearcanalRepeated(isInUseCrearCanalName(nombre_canal))
    }, [nombre_canal])

    return (
        <div className='padre-crear-canal'>
            <div className='contenedor-crear-canal'>
                <img className='imagen-crear-canal' src='https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg'
                    alt='Slack Logo' />
                <p className='mail-crear-canal'> Se confirmó como lianakachuk@gmail.com Cambiar</p>

                <div className='contenedor-form-crear-canal'>
                    <div className='form-crear-canal'>
                        <h2 className='h2-crear-nuevo'>Crear un nuevo espacio de trabajo de Slack</h2>
                        <p className='p-crear-nuevo'>Slack le da a tu equipo un lugar donde pueden hablar y trabajar juntos.
                            Para crear un nuevo espacio de trabajo, completa tus datos aquí debajo.</p>

                        <form onSubmit={handleSubmit} className='formulario-crear-canal'>
                            <label htmlFor='crear-espacio-name'>Nombre del Espacio</label>
                            <input placeholder='Escribí aquí el nombre de tu espacio' name='nombre-espacio' id='crear-espacio-name' required />
                            <label htmlFor='crear-canal-name'>Nombre del Canal</label>
                            <input
                                placeholder='Escribí aquí el nombre de tu canal'
                                name='nombre_canal'
                                id='crear-canal-name'
                                required
                                value={nombre_canal}
                                onChange={handleChangeCrearcanalname}
                            />
                            {errorCrearcanalRepeated ? (
                                <span style={{ color: 'red' }}>Nombre en uso</span>
                            ) : (
                                nombre_canal.length > 0 && <span style={{ color: 'green' }}>Nombre disponible</span>
                            )}
                            {<button type='submit' className='crear' disabled={errorCrearcanalRepeated || nombre_canal.length === 0}>
                            </button>}
                        </form>
                        <button>Crear canal</button>
                        <p className='p-crear-nuevo'>Quiero recibir comunicaciones de marketing sobre Salesforce, inclusive sobre Slack.</p>
                        <p className='p-crear-nuevos'>Al continuar, aceptas el Acuerdo de servicios principal, los Términos de servicio del usuario
                            y los Términos complementarios de Slack.</p></div>
                    <div>
                        <img className='imagen-crer-canal' src='./imagenes/equipo.png' alt='' /></div></div>
            </div></div>
    )
}

export default CrearNuevoCanal;

