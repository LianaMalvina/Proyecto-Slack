import React, { useEffect, useState } from 'react';
import { GoChevronDown } from "react-icons/go";
import { GoX } from "react-icons/go"; // Importa el ícono de cerrar
import './iniciostyle.css';

const PaginaInicio = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    useEffect(() => {
        const menuToggle = document.getElementById('menu-toggle');
        const menuList = document.getElementById('menu-list');

        // Cleanup function for event listeners is not needed as we're using state

        return () => {};
    }, []); // Dependencias vacías para que solo se ejecute una vez al montar el componente

    return (
        <>
            <header className='header'>
                <nav className='nav-menu'>
                    <button className='menu-toggle' id='menu-toggle' onClick={toggleMenu}>
                        {menuVisible ? <GoX /> : '☰ Menú'}
                    </button>
                    <ul className={`menu-list ${menuVisible ? 'show' : ''}`} id='menu-list'>
                        <li>
                            <button>Funciones<span><GoChevronDown /></span></button>
                        </li>
                        <li>
                            <button>Soluciones<span><GoChevronDown /></span></button>
                        </li>
                        <li>
                            <button>Empresa<span><GoChevronDown /></span></button>
                        </li>
                        <li>
                            <button>Recursos<span><GoChevronDown /></span></button>
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
    );
}

export default PaginaInicio;
