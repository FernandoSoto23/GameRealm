import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faCreditCard, faDollar, faGift, faLock, faMoneyBill, faSackDollar, faVials } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';
import { useSpring } from 'react-spring';
import gta from '../assets/Grand Theft Auto.jpg'
import { faFacebook, faInstagram, faPaypal, faSquareXTwitter, faYoutube, faCcVisa, faCcMastercard, faCcAmex, faBitcoin, faXTwitter, faReddit } from '@fortawesome/free-brands-svg-icons';
import Dino from '../assets/ARK.png'
import LogoGM from '../assets/GameRealmLogo.png'



const Resumen = () => {
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [creditCardData, setCreditCardData] = useState({
        cardNumber: '',
        expirationDate: '',
        cvv: '',
        cardHolderName: '',
    });



    const handlePagar = async () => {
        if (!selectedPaymentMethod) {
            // Mostrar alerta si no se ha seleccionado un método de pago
            Swal.fire({
                icon: "error",
                title: "Advertencia",
                text: "Antes de Continuar, Selecciona un Metodo de Pago",
            });
            return; // Detener la ejecución si no hay un método de pago seleccionado
        }
        if (selectedPaymentMethod === 'deposito') {
            // Generar un número de depósito aleatorio
            const depositNumber = Math.floor(Math.random() * 1000000000) + 1000000000; // Número de 10 dígitos

            // Mostrar alerta con el número de depósito
            Swal.fire({
                icon: 'success',
                title: 'Folio Generado',
                text: `¡Gracias por tu compra! Se envio un Correo con su Folio, Usted Cuenta con 48 horas para realizar su pago! ${depositNumber}`,

                confirmButtonText: 'OK',
            }).then(() => {
                // Redirigir o realizar otras acciones después del pago exitoso
                window.location.href = '/carrito'; // Cambia según tus necesidades
            });
        }

        if (selectedPaymentMethod === 'credito') {
            Swal.fire({
                icon: 'success',
                title: 'Pago Exitoso',
                text: '¡Gracias por tu compra! El pago con tarjeta ha sido exitoso.',
                confirmButtonText: 'OK',
            }).then(() => {
                // Redirigir o realizar otras acciones después del pago exitoso
                window.location.href = '/carrito'; // Cambia según tus necesidades
            });
        } else if (selectedPaymentMethod === 'paypal') {
            // Redireccionar a la página de PayPal
            window.location.href = 'https://www.paypal.com';
        }
    };

    const animation = useSpring({
        opacity: 1,
        transform: 'translateY(0px)',
    });

    const renderCreditCardForm = () => (
        <div>
            <label htmlFor="cardNumber">Número de Tarjeta:</label>
            <input
                type="text"
                id="cardNumber"
                className="form-control"
                value={creditCardData.cardNumber}
                onChange={(e) => setCreditCardData({ ...creditCardData, cardNumber: e.target.value })}
            />

            <label htmlFor="expirationDate">Fecha de Expiración:</label>
            <input
                type="text"
                id="expirationDate"
                className="form-control"
                value={creditCardData.expirationDate}
                onChange={(e) => setCreditCardData({ ...creditCardData, expirationDate: e.target.value })}
            />

            <label htmlFor="cvv">CVV:</label>
            <input
                type="password"
                id="cvv"
                className="form-control"
                value={creditCardData.cvv}
                onChange={(e) => setCreditCardData({ ...creditCardData, cvv: e.target.value })}
            />

            <label htmlFor="cardHolderName">Nombre del Titular:</label>
            <input
                type="text"
                id="cardHolderName"
                className="form-control"
                value={creditCardData.cardHolderName}
                onChange={(e) => setCreditCardData({ ...creditCardData, cardHolderName: e.target.value })}
            />
        </div>
    )

    const [productQuantity, setProductQuantity] = useState(1); // Default quantity is 1

    const handleIncreaseQuantity = () => {
        setProductQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleDecreaseQuantity = () => {
        if (productQuantity > 1) {
            setProductQuantity(prevQuantity => prevQuantity - 1);
        }
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card card-title text-center">
                        <h4>Resumen de Compra</h4>
                        <div className="card-title text-center">
                            <img src={Dino} alt="assets" />
                            <h5 className="card-text">ARK: Survival Ascended</h5>
                            <h5 className="card-text">CATEGORIA: ACCION</h5>
                        </div>
                        <div className="card-deck">
                            <div className="card-body">
                                <h5 className="card-text">
                                    REGALAR <FontAwesomeIcon icon={faGift} style={{ color: '#24b73d' }} />
                                </h5>
                                <h5><strong>Compra un producto y obtén un PDF de regalo listo para descargar</strong></h5>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Métodos de Pago */}


                <div className="col-md-6">
                    <div className="card">
                        <div className="card-title text-center">

                            <h5 className="card-title text-center">PAGOS FÁCILES Y SEGUROS</h5>
                            <FontAwesomeIcon icon={faLock} style={{ color: '#04ff00' }} />
                            <h5 className="card-title">Selecciona un Metodo de Pago</h5>

                            <div>
                                <input
                                    type="radio"
                                    id="credito"
                                    name="paymentMethod"
                                    value="credito"
                                    checked={selectedPaymentMethod === 'credito'}
                                    onChange={() => setSelectedPaymentMethod('credito')}
                                />
                                <FontAwesomeIcon icon={faCcVisa} /> <FontAwesomeIcon icon={faCcMastercard} /> <FontAwesomeIcon icon={faCcAmex} />
                            </div>

                            <div>
                                <input
                                    type="radio"
                                    id="paypal"
                                    name="paymentMethod"
                                    value="paypal"
                                    checked={selectedPaymentMethod === 'paypal'}
                                    onChange={() => setSelectedPaymentMethod('paypal')}
                                />
                                <FontAwesomeIcon icon={faPaypal} />
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="deposito"
                                    name="paymentMethod"
                                    value="deposito"
                                    checked={selectedPaymentMethod === 'deposito'}
                                    onChange={() => setSelectedPaymentMethod('deposito')}
                                />
                                <FontAwesomeIcon icon={faMoneyBill} /> <FontAwesomeIcon icon={faBitcoin} />
                            </div>
                        </div>


                        <div className="">

                            <div className="card-body text-center">
                                <div className="row">
                                    <h4 className="">Precio Total</h4>

                                    <h5 className="card-title"> $ 825.00 MXN</h5>
                                    <div className="card-body">
                                        <div className="">
                                            {selectedPaymentMethod === 'credito' && renderCreditCardForm()}

                                            <button className="btn btn-danger" onClick={handlePagar}>
                                                Pagar

                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>



                </div>
            </div>
            {/* Tarjeta "Ahorra más con nuestra membresía GMR Plus" */}

            <div className="col-md-16">
                <div className="card card-title text-center">
                    <div className=" text-center">

                        <p>Disfruta Mas Con Nuestra Membresia GMR Plus</p>
                        <h4 className="card-title">A tan solo $ 99 Pesos al Mes,</h4>
                        <h4 className="card-title">Prioridad en Betas</h4>
                        <h4 className="card-title">Juego gratuito cada mes</h4>
                        <h4 className="card-title">Cancela en cualquier momento en la configuración de tu cuenta</h4>
                        <img src={LogoGM} alt="Game Realm Logo" />
                    </div>
                </div>
            </div>
        </div>


    );
};
export default Resumen;