import React from 'react'
import NavbarLogo from '../Componentes/Inicio/NavBarLogo/NavbarLogo'
import PaginaInicio from '../Componentes/Inicio/PaginaInicio'
import './style.css'
import Main from '../Componentes/Inicio/Main/Main'

const InitPage = () => {
  return (
    <>
    <nav className='contenedor-init'>
    <div className='logo'>
      <NavbarLogo/>
    </div>
    <div><PaginaInicio/></div>
    
    </nav>
    <main>
      <Main/>
    </main>
    </>
  )
}

export default InitPage
