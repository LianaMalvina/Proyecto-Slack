import React from 'react';
import { crearNuevosCanales } from './data_canales';
import { useNavigate } from 'react-router-dom';

const CrearNuevoCanal = () => {

    const navigation = useNavigate()
    const handleSubmit = (evento) => {
        evento.preventDefault()

        const formulario = new FormData(evento.target);
        const nuevoespacio = formulario.get('nombre-espacio')
        const canalnuevo = formulario.get('nombre-canal')
       

        if (nuevoespacio) {
            const espacio = {
                titulo: nuevoespacio,
                canal: canalnuevo,
             
            }
            crearNuevosCanales(espacio)
          
        }  navigation('/inicio/home')
    };

    return (
        <>
            <div className='contenedor-form-msj'>
                <img src='https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg' alt='Slack Logo' />
                <p>Se confirmó como lianakachuk@gmail.com Cambiar</p>
                <h2>Crear un nuevo espacio de trabajo de Slack</h2>
                <p>Slack le da a tu equipo un lugar donde pueden hablar y trabajar juntos. Para crear un nuevo espacio de trabajo, haz clic en el botón de abajo</p>
                <form onSubmit={handleSubmit} className='formulario-crear-canal'>
                    <label htmlFor='crear-espacio-name'>Nombre del Espacio</label>
                    <input placeholder='Escribí aquí el nombre de tu espacio' name='nombre-espacio' id='crear-espacio-name' required />
                    <label htmlFor='crear-canal-name'>Nombre del Espacio</label>
                    <input placeholder='Escribí aquí el nombre de tu canal' name='nombre-canal' id='crear-canal-name' required />
                    <button type='submit' className='crear'>Crear</button>
                </form>
                <button>Crear un espacio de trabajo</button>
                <p>Quiero recibir comunicaciones de marketing sobre Salesforce, inclusive sobre Slack. Puedo cancelar mi suscripción en cualquier momento.</p>
                <p>Al continuar, aceptas el Acuerdo de servicios principal, los Términos de servicio del usuario y los Términos complementarios de Slack. Hay divulgaciones adicionales en nuestras Política de privacidad y Política de cookies.</p>
                <img alt='' />
            </div>
        </>
    );
};

export default CrearNuevoCanal;
