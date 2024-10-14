import React from 'react'
import { GoChevronDown } from "react-icons/go";
import './iniciostyle.css'

const PaginaInicio = () => {

        return(
            <>
            <header className='header'>
            <nav className='nav-menu'>
                <ul>
                    <li>
                        <button>Funciones<span><GoChevronDown/></span></button>
                    </li>
                    <li>
                        <button>Soluciones<span><GoChevronDown/></span></button>
                    </li>
                    <li>
                        <button>Empresa<span><GoChevronDown/></span></button>
                    </li>
                    <li>
                        <button>Recursos<span><GoChevronDown/></span></button>
                    </li>
                    <li>
                        <button>Precios</button>
                    </li>
                </ul>
            </nav>
            <div className='botones-ventas'>
                <button className='ventas'>HABLAR CON VENTAS</button>
                <button className='ventas'>CREAR UN NUEVO ESPACIO DE TRABAJO</button>
            </div>
            </header>
            </>
        )
    }


export default PaginaInicio
