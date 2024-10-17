import React from 'react'
import { Link } from 'react-router-dom'

const Random = () => {
  return (
    <div>
      <img src='https://a.slack-edge.com/bv1-13/slack_logo-ebd02d1.svg'></img>
      <div>UP</div>
     <h1>Iniciando UTN PWI TM LUN Y MIE</h1>
<p>Haz clic en Abrir Slack para iniciar la aplicación para ordenador.</p>
 <p>¿No funciona? También puedes usar Slack en el navegador.</p>
      <Link to={'/inicio/home/'}>ir</Link>
  </div>
  )
}

export default Random
