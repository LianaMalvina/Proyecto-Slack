import React from 'react'
import './enviarmsj.css'
import { MdFoggy, MdFormatListNumbered } from "react-icons/md";
import { FiList, FiAlignLeft } from "react-icons/fi";
import { FaCode  } from "react-icons/fa6";
import { LuUnderline } from "react-icons/lu";
import { GoBold } from "react-icons/go";
import { GiBreakingChain } from "react-icons/gi";
import { PiCodeBlock } from "react-icons/pi";
import { RxFontItalic } from "react-icons/rx";



const EnviarMensaje = () => {      
    
    
        return(
            <>
            <div className='contenedor-form-msj'>
                <div className='contenedor-nav-msj'>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><GoBold/></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><RxFontItalic/></button>
                    </div>
                    <div className='iconos-nav-msj'>
                    <button className='botones-msj-nav'><LuUnderline/></button>
                </div>
                <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><GiBreakingChain/></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><FiList/></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><FiAlignLeft/></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><MdFormatListNumbered/></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><FaCode/></button>
                    </div>
                    <div className='iconos-nav-msj'>
                        <button className='botones-msj-nav'><PiCodeBlock/></button>
                    </div>
                </div>
            </div>
            </>
        )
    }

    
export default EnviarMensaje
