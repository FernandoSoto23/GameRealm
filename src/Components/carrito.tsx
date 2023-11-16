import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";
import Swal from "sweetalert2";

export function Carrito() {
    const array = JSON.parse(localStorage.getItem("carrito") ?? "null");
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
    const [creditCardInfo, setCreditCardInfo] = useState({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        cardHolderName: "",
    });

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

        // Redireccionar a PayPal si se selecciona ese método de pago
        if (selectedMethod === "paypal") {
            window.location.href = "https://www.paypal.com"; // Reemplaza con la URL de PayPal
        } else {
            setSelectedPaymentMethod(selectedMethod);
        }
    };


    const handleNextButtonClick = () => {
        if (selectedPaymentMethod) {
            // Continuar a la pestaña de resumen si se ha seleccionado un método de pago
            navigate("/Resumen");
        } else {
            // Mostrar una alerta si no se ha seleccionado un método de pago
            Swal.fire({
                icon: "error",
                title: "Alto ahi papu, crees que es Gratis?",
                text: "Para Continuar Debes seleccionar un Metodo de Pago",

            });
        }
    };

    function handleQuantityChange(i: any, arg1: string): void {
        throw new Error("Function not implemented.");
    }

    return (
        <animated.div style={animation} className="container mt-4">
            <div className="text-center mb-3">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" />
            </div>

            {array != null && (
                <table className="table half-size-table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col" className="left">
                                Imagen
                            </th>
                            <th scope="col" className="text-left">
                                Nombre
                            </th>
                            <th scope="col" className="text-center">
                                Cantidad
                            </th>
                            <th scope="col" className="text-left">
                                Método de Pago
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {array.map((e: any, i: any) => (
                            <tr key={e.codigo} className="text-center">
                                <td>
                                    <img src={e.imagen} alt={e.titulo} className="img-fluid" />
                                </td>
                                <td>
                                    <p>{e.titulo}</p>
                                </td>
                                <td>
                                    <div className="d-flex align-items-center">

                                    </div>
                                </td>
                                <td>
                                    <select
                                        className="form-select"
                                        onChange={handlePaymentMethodChange}
                                    >
                                        <option value="" disabled selected>
                                            Selecciona Método de Pago
                                        </option>
                                        <option value="tarjetaCredito">Tarjeta de Crédito</option>
                                        <option value="efectivo">Efectivo</option>
                                        <option value="paypal">PayPal</option>
                                    </select>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <div className="text-center mt-3">
                <button className="btn btn-warning btn-lg" onClick={handleNextButtonClick}>
                    Siguiente
                </button>
            </div>

            {array != null && (
                <>
                    {/* Otro contenido relacionado con el carrito */}
                </>
            )}
        </animated.div>
    );
}
