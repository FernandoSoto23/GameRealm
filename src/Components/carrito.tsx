import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faGamepad, faGem, faHouse, faKey, faLaptop, faLayerGroup, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Swal from 'sweetalert2';
import Phasmophobia from '../assets/Phasmophobia.jpg';
import ATS from '../assets/American Truck Simulator.jpg';
import Consola from '../assets/image1.jpg'
import Dino from '../assets/ARK.png'
import Ciudad from '../assets/Cities Skylines II.jpg'
import logo from '../assets/GameRealmLogo.png'
import gta from '../assets/Grand Theft Auto.jpg'
import { log } from 'console';
import W10 from '../assets/Windows 10 Logo.png'
import { faFacebook, faInstagram, faSquareXTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Software from '../assets/McAfee Logo.jpg'
import W2 from '../assets/Watch_Dogs® 2.jpg'
import Tren from '../assets/Train Sim World.jpg'
import Office from '../assets/Office365.jpg'
import Deporte from '../assets/PGA TOUR 2K23.jpg'
import Deporte1 from '../assets/F5.jpg'
import Vuelo from '../assets/Microsoft Flight Simulator 40th Anniversary Edition.jpg'
import foot from '../assets/fifa23.jpg'
import hunter from '../assets/Monster Hunter World.jpg'


export function Carrito() {
    const array = JSON.parse(localStorage.getItem("carrito") ?? "null");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [depositNumber, setDepositNumber] = useState<number | null>(null);


    const navigate = useNavigate();

    const animation = useSpring({
        opacity: 1,
        transform: "scale(1)",
        from: { opacity: 0, transform: "scale(0.5)" },
    });


    const handlePaymentMethodChange = (e: {
        target: { value: React.SetStateAction<string | null> };
    }) => {
        const selectedMethod = e.target.value;

        if (selectedMethod === "paypal") {
            window.location.href = "https://www.paypal.com"; // Redireccionar a PayPal
        } else {
            setSelectedPaymentMethod(selectedMethod);

            if (selectedMethod === "tarjetaCredito") {
                // Mostrar formulario para datos de tarjeta de crédito
                Swal.fire({
                    html: `
                    
                <div>
                  <label for="cardNumber">Número de Tarjeta:</label>
                  <input type="text" id="cardNumber" class="swal2-input" 
                    onChange={(e) => setCreditCardData({ ...creditCardData, cardNumber: e.target.value })} />
                  
                  <label for="expirationDate">Fecha de Expiración:</label>
                  <input type="text" id="expirationDate" class="swal2-input" 
                    onChange={(e) => setCreditCardData({ ...creditCardData, expirationDate: e.target.value })} />
      
                  <label for="cvv">CVV:</label>
                  <input type="text" id="cvv" class="swal2-input" 
                    onChange={(e) => cvv: e.target.value })} />
      
                  <label for="cardHolderName">Nombre del Titular:</label>
                
                    onChange={(e) => setCreditCardData({ ...creditCardData, cardHolderName: e.target.value })} />
                </div>
              `,
                    icon: "info",
                    showCancelButton: true,
                    confirmButtonText: "Continuar",
                    cancelButtonText: "Cancelar",
                }).then((result) => {
                    if (result.isConfirmed) {
                        // Continuar con el siguiente paso o validar los datos según tus necesidades
                        navigate("/Resumen");
                    } else {
                        setSelectedPaymentMethod(null);
                    }
                });
                const handleProceedToPayment = () => {
                    Swal.fire({
                        title: "Are you sure?",
                        text: "You won't be able to revert this!",
                        icon: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "Yes, proceed to payment!"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            // Lógica adicional al confirmar el pago, por ejemplo, redirección a la página de resumen
                            navigate("/Resumen");
                        }
                    });
                };

            }
        }
    };



    const handleNextButtonClick = () => {
        if (selectedPaymentMethod === "efectivo") {
            // Generate a random deposit number
            const randomDepositNumber = Math.floor(Math.random() * 1000) + 2;

            // Set the deposit number in the state
            setDepositNumber(randomDepositNumber);

            // Show a message with the random deposit number
            Swal.fire({
                title: "Número de Depósito Generado",
                text: `Por favor, realiza un depósito de $${randomDepositNumber} en la cuenta indicada para completar tu compra.`,
                icon: "info",
                confirmButtonText: "Entendido",
            });
        }

        if (selectedPaymentMethod) {
            // Continuar a la pestaña de resumen si se ha seleccionado un método de pago
            navigate("/Resumen");
        } else {
            // Mostrar una alerta si no se ha seleccionado un método de pago
            Swal.fire({
                icon: "error",
                title: "Advertencia",
                text: "Antes de Continuar, Revisa bien tu carrito Una vez confirnado, Escoge un metodo de pago para continuar!",
            });
        }
        const handlePaymentMethodChange = (e: {
            target: { value: React.SetStateAction<string | null> };
        }) => {
            const selectedMethod = e.target.value;

            if (selectedMethod === "paypal") {
                window.location.href = "https://www.paypal.com"; // Redireccionar a PayPal
            } else {
                setSelectedPaymentMethod(selectedMethod);
            }

            // Mostrar alerta específica para tarjeta de crédito
            if (selectedMethod === "tarjetaCredito") {
                Swal.fire({
                    title: "Ingresa los Datos de la Tarjeta",
                    text: "Por favor, ingresa los datos de tu tarjeta de crédito para continuar.",
                    icon: "info",
                    confirmButtonText: "Entendido",
                });
            }
        };
    };

    const [productQuantities, setProductQuantities] = useState<number[]>(Array(array.length).fill(1));
    function handleQuantityChange(index: number, action: "increase" | "decrease"): void {
        const newQuantities = [...productQuantities];
        if (action === "increase") {
            newQuantities[index]++;
        } else if (action === "decrease" && newQuantities[index] > 1) {
            newQuantities[index]--;
        }
        setProductQuantities(newQuantities);
    };

    const handleProceedToPayment = () => {
        Swal.fire({
            title: "Selecciona al menos un producto para continuar",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirmar Productos!"
        }).then((result) => {
            if (result.isConfirmed) {

                navigate("/Resumen");
            }
        });

    };


    return (
        <animated.div style={animation} className="container mt-4">
            <div className="CardResumen">

                <div className="card-group">
                    <div className="card">

                        <div className="card-body">
                            <img src={Tren} alt='assets' />
                            {/* Agrega el icono junto al título */}
                            <h5 className="card-title">
                                Categoria: Simulacion
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 515.00 MXN</h5>
                            <h5 className="card-title">

                                Ultima Actualizacion 20 / NOV / 2023</h5>
                        </div>


                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '20px' }} />

                                TRAIN SIM WORLD 4

                            </small>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">

                            <img src={Dino} alt='assets' />
                            {/* Agrega el icono junto al título */}
                            <h5 className="card-title">

                                Categoria: Accion
                            </h5>
                            <h5 className="card-title">
                                Precio: $ 825.00 MXN

                            </h5>
                            <h5 className="card-title">
                                Ultima Actualizacion 18 / 05 / 2023

                            </h5>

                        </div>

                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} />
                                ARK: Survival Ascended</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Deporte} alt='assets' />

                            <h5 className="card-title">
                                Categoría: RPG
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 2000.00 MXN

                            </h5>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">
                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} /> PGA TOUR 2K23</small>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card-body">
                    </div>

                    <div className="">
                        <div className="card-body">
                        </div>

                    </div>
                </div>
                <div className="card-group">
                    <div className="card">

                        <div className="card-body">
                            <img src={Deporte1} alt='assets' />

                            {/* Agrega el icono junto al título */}
                            <h5 className="card-title">
                                Categoria: Deporte, Simulacion
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 1400.00 MXN</h5>
                        </div>


                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faKey} style={{ marginRight: '20px' }} />

                                Forza Horizon 5

                            </small>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">

                            <img src={Vuelo} alt='assets' />
                            {/* Agrega el icono junto al título */}
                            <h5 className="">

                                Categoria: Simulacion
                            </h5>

                            <h5 className="card-title">


                                <h5>Precio: $ 1399.00 MXN</h5>

                            </h5>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} />

                                Microsoft Flight Simulator 40th Anniversary Edition </small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={Phasmophobia} alt='assets' />

                            <h5 className="card-title">
                                Categoría: VR, TERROR
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 150.00 MXN

                            </h5>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">
                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} />Phasmophobia</small>
                        </div>
                    </div>
                </div>
                <div className="card-group">
                    <div className="card">

                        <div className="card-body">
                            <img src={W2} alt='assets' />
                            {/* Agrega el icono junto al título */}
                            <h5 className="card-title">
                                Categoria: Disparos, Accion
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 1000.00 MXN</h5>
                      
                        </div>


                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '20px' }} />

                                Watch_Dogs® 2
                            </small>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">

                            <img src={ATS} alt='assets' />
                            {/* Agrega el icono junto al título */}
                            <h5 className="card-title">

                                Categoria: Simulacion
                            </h5>
                            <h5 className="card-title">
                                Precio: $ 250.00 MXN

                            </h5>
                          
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} />
                                American Truck Simulator</small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={gta} alt='assets' />

                            <h5 className="card-title">
                                Categoría: Disparos, Accion, RPG
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 400.00 MXN

                            </h5>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">
                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} /> Grand Theft Auto V</small>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card-body">
                    </div>

                    <div className="">
                        <div className="card-body">
                        </div>

                    </div>
                </div>
                <div className="card-group">
                    <div className="card">
                        <img src={foot} alt='assets' />
                        <div className="card-body">

                            {/* Agrega el icono junto al título */}
                            <h5 className="card-title">
                                Categoria: Deporte
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 400.00 MXN</h5>
                        </div>


                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '20px' }} />

                                EA SPORTS™ FIFA 23

                            </small>
                        </div>
                    </div>

                    <div className="card">
                        <div className="card-body">

                            <img src={Ciudad} alt='assets' />
                            {/* Agrega el icono junto al título */}
                            <h5 className="">

                                Categoria: Estrategia
                            </h5>

                            <h5 className="card-title">


                                <i>Precio: $ 1600.00 MXN</i>

                            </h5>
                        </div>

                        <div className="card-footer">
                            <small className="text-muted">

                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} />

                                Cities: Skylines II </small>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <img src={hunter} alt='assets' />

                            <h5 className="card-title">
                                Categoría: Accion, RPG, Medieval
                            </h5>
                            <h5 className="card-title">

                                Precio: $ 1198.00 MXN

                            </h5>

                        </div>

                        <div className="card-footer">
                            <small className="text-muted">
                                <FontAwesomeIcon icon={faGamepad} style={{ marginRight: '10px' }} />Monster Hunter: World</small>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="card-body">
                    </div>

                    <div className="">
                        <div className="card-body">
                        </div>

                    </div>
                </div>
                <div className='Button'>
                    <button className="btn btn-warning" onClick={handleProceedToPayment}>
                        Continuar
                    </button>

                </div>
            </div >

            {array != null && (
                <>

                </>
            )}
        </animated.div>

    );
}