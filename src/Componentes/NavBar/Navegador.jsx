import React from 'react'
import './navegador.css'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { LuClock3 } from "react-icons/lu";
import { IoSearch } from "react-icons/io5";
import { RiQuestionLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';

const Navegador = () => {

    const navigate = useNavigate();

  const goToInicio = () => {
    navigate('/inicio')}

  return (
    <div>
    <header className='header'>
        <nav className='navbar'>
            <a href='#' className='arrows'>
            <div className='vacio-uno'></div>
                <button className='arrow'onClick={goToInicio}><FaArrowLeft /></button>
                <button className='arrow'><FaArrowRight /></button>
                <button className='clock'><LuClock3 /></button>
            </a>

            <a href='#' className='buscador'>
                <button className='buscador-icon'>
                    <input type='text' placeholder='Buscar en UTN PWI TM LUN Y MIE' className='buscador_text' />
                    <span className='interno-buscador'><IoSearch /></span>
                </button>
            </a>
            <div className='vacio-dos'></div>
            <a href='#' className='pregunta'>
                <button className='pregunta-icon'><RiQuestionLine /></button>
            </a>
        </nav>
    </header>
</div>
  )
}

export default Navegador
