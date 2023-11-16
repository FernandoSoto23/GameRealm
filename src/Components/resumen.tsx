import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useSpring, animated } from "react-spring";
import Swal from 'sweetalert2';


const Resumen = () => {
    const [showAlert, setShowAlert] = useState(false);
    const alertAnimation = useSpring({
        opacity: showAlert ? 1 : 0,
        transform: showAlert ? 'translateY(0px)' : 'translateY(-50px)',
    });

    const handlePagar = () => {
        // Lógica de pago aquí

        // Mostrar la alerta
        Swal.fire({
            title: "Desea Confirmar la Compra?",
            text: "Una Vez Confirmado, No se podra cancelar!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Compra Realizada Exitosamente!",
                    icon: "success"
                });
            }
        });

        // Borrar el resumen y regresar a la pestaña del carrito
        // Aquí puedes realizar la lógica necesaria para borrar el resumen
        // y navegar a la pestaña del carrito
        setShowAlert(true);
    };

    return (
        <div className="container">
            <div className="justify-content-center">
                <div className='card-container'>
                    <div className="card-deck">
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"></p>
                                <p className="card-text"><small className="text-muted"></small></p>
                            </div>
                        </div>
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"></p>
                                <p className="card-text"><small className="text-muted"></small></p>
                            </div>
                        </div>
                        <div className="card">

                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text"></p>
                                <p className="card-text"><small className="text-muted"></small></p>
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-2 mx-auto" style={{ margin: '50px auto' }}>

                        {/* Botón de "Pagar" con la lógica actualizada */}
                        <button
                            className="btn btn-warning btn-lg" style={{ marginLeft: '20px' }}
                            onClick={handlePagar}
                        >
                            PAGAR
                        </button>
                    </div>
                </div>
            </div>
        </div>


    );
};


export default Resumen;
