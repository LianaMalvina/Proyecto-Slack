import { AiFillCustomerService, AiOutlineDown } from "react-icons/ai";
import { FaEllipsisVertical } from "react-icons/fa6";
import '../chatstilo.css'
import { GrAdd, GrMultiple, GrDocumentVerified } from "react-icons/gr";
import { RiChat1Fill } from "react-icons/ri";

export const IconosDerechos = () => {

    return (

        <div className='contenedor-chat'>
            <div className="contenedor-chat-hijo">
                <div className='primer-titulo'>
                    <div className='primer-contact-titulo'>
                        <h2>
                            #consultas
                        </h2>
                    </div>
                </div>

                < div className='primer-contact-icon'>
                    <div className='sub-primer-contact-icon'>
                        <img className="image-contact" src='https://ca.slack-edge.com/T077N88610A-U077P07F3N1-9e39be761a9f-24' alt='' />
                        <img className="image-contact" src='https://ca.slack-edge.com/T077N88610A-U07BUNT71HR-f90524af2a17-24' alt='' />
                        <img className="image-contact" src='https://ca.slack-edge.com/T077N88610A-U078EMYQHME-92685084ee9c-24' alt='' />
                        <span className="image-number">
                            47
                        </span>
                    </div>
                    <div className='subsub-primer-contact-icon'>
                        <span><AiFillCustomerService /></span>
                        <span><AiOutlineDown /></span>
                    </div>
                    <span><FaEllipsisVertical /></span>
                </div>
            </div>
            <div className="contenedor-btn-chats">
                <div className="children-chat">
                   <span>< RiChat1Fill/></span> <button className="btn-children"> Mensajes</button>
                </div>
                <div className="children-chat">
              <span><GrDocumentVerified /></span><button className="btn-children">Añadir canvas</button>
                </div>
                <div className="children-chat">
                <span><GrMultiple /></span><button className="btn-children">Archivos</button>
                </div>
                <div className="children-chat">
                <button className="btn-children"><GrAdd /></button>
                </div>
            </div>
        </div>
    )
}