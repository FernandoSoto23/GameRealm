import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faGamepad, faGlobe, faKey } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import ModalVideo from './modal';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

export function Producto() {
        const [showModal, setShowModal] = useState(false);

        const openModal = () => {
            setShowModal(true);
        };

        const closeModal = () => {
            setShowModal(false);
        };
        return (
            <div style={{ margin: "auto", width: "120rem" }}>
                <div className="contenido-padre">
                    <div className="card-imagen">
                        <img src="https://i.ibb.co/qBrd2tN/minecraftr.jpg" />
                        <div>
                            <button className='boton-trailer' onClick={openModal}>Ver trailer <span><FontAwesomeIcon icon={faYoutube} style={{color: "#fd0808",}} size='lg' /></span></button>
                            {showModal && (
                                <div className='modal'>
                                    <ModalVideo
                                    videoSrc="https://www.youtube-nocookie.com/embed/MmB9b5njVbA?si=JjXcoaUwSQ-9gfPo"
                                    onClose={closeModal}
                                />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="card-producto">
                        <div>
                            <h1>Minecraft Java edition (PC)</h1>
                        </div>
                        <div className="seccion-fila">
                            <div className="seccion-columna">
                                <FontAwesomeIcon icon={faGamepad} size="2xl" className="margen-top" />
                                <FontAwesomeIcon icon={faKey} size="2xl" className="margen-top" />
                            </div>
                            <div className="seccion-columna">
                                <p>Plataforma: PC</p>
                                <p>Tipo: Clave</p>
                            </div>
                            <div className='seccion-columna'>
                                <FontAwesomeIcon icon={faBagShopping} size="2xl" className='separador' />
                                <FontAwesomeIcon icon={faGlobe} size="2xl" className='separador' />
                            </div>
                            <div className="seccion-columna">
                                <p className="">Cantidad : 1</p>
                                <p className=""> Región: Global</p>
                            </div>
                        </div>
                        <div>
                            <p className="separacion">Minecraft es un videojuego sandbox enfocado en permitirle al jugador explorar y modificar un mundo generado dinámicamente hecho de bloques de un metro cúbico. Es mantenido por Mojang Studios, que forma parte de Xbox Game Studios, que a su vez es parte de Microsoft.</p>
                        </div>
                    </div>
                    <div className="card-compra">
                        <form >
                            <p>Stock disponible</p>
                            <p>563.73 MXN</p>
                            <p>Vendedor oficial : Mojang</p>
                            <button className="boton-compra">Comprar ahora</button>
                            <div>
                                <button className="boton-agregar">Agregar al carrito</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }