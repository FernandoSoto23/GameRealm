import { faAlignRight, faCalendarDays, faCreditCard, faEnvelope, faHashtag, faMinus, faPlus, faTrash, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ChangeEvent, useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, Form, Col, Row, FormGroup, InputGroup, InputGroupText, Input } from "reactstrap";
import { text } from "stream/consumers";
import Swal from "sweetalert2";
import { number } from "yargs";
import { WebServiceUrl } from "../clases/rutas";



export function Resumen() {
    const [contador, setContador] = useState(0);
    const [codigo, setCodigo] = useState(0);
    const [nombre, setNombre] = useState("");
    const [imagen, setImagen] = useState("");
    const [precio, setPrecio] = useState(0);
    const [total, setTotal] = useState(0);

    function Total (numer1 : number, numero2 : number, resultado : number){

    }
    function Alerta(respuesta: any, mensaje: string) {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        });
        if (respuesta) {
            Toast.fire({
                icon: "success",
                title: mensaje,
            });
        } else {
            Toast.fire({
                icon: "warning",
                title: mensaje,
            });
        }
    }
    function agregar() {
        if (contador < 10) setContador(contador + 1);
    }
    function quitar() {
        if (contador > 1) setContador(contador - 1);
    }

    function guardar() {
        if (contador <= 0) {
            console.log("NO MI REY, POR AQUI NO PASAS");
            return;
        }
        const objeto = [
            {
                codigo: codigo,
                nombre: nombre,
                cantidad: contador,
                imagen: imagen,
                precio: precio,
            },
        ];
        const carrito = localStorage.getItem("carrito") ?? "null";
        //este codigo esta funcional

        if (carrito == "null") {
            localStorage.setItem("carrito", JSON.stringify(objeto));
            Alerta(true, "Se añadio Correctamente");
        } else {
            //SobreEscribir
            SobreEscribir(JSON.parse(carrito));
            //Añadir un nuevo producto
            AddCarrito(JSON.parse(carrito));
        }
    }
    function SobreEscribir(JsonParam: any) {
        JsonParam.forEach((e: any, index: any) => {
            if (e["codigo"] === codigo) {
                JsonParam[index].cantidad = contador;
                localStorage.setItem("carrito", JSON.stringify(JsonParam));
                Alerta(true, "Se Actualizo su carrito");
            }
        });
    }

    function AddCarrito(JsonParam: any) {
        let existe: boolean = false;

        for (let i = 0; i < JsonParam.length; i++) {
            if (JsonParam[i]["codigo"] === codigo) {
                existe = true;
            }
        }

        if (!existe) {
            JsonParam.push({
                codigo: codigo,
                nombre: nombre,
                cantidad: contador,
                imagen: imagen,
                precio: precio,
            });
            localStorage.setItem("carrito", JSON.stringify(JsonParam));

            Alerta(true, "Se añadio Correctamente");
        }
    }


    const [modal, setModal] = useState(false);
    const [metodoDePago, setMetodoDePago] = useState("0");
    const [numeroDeTarjeta, setNumeroDeTarjeta] = useState("");
    const [fecha, setFecha] = useState("");
    const toggleModal = () => {
        setModal(!modal);
    };
    const Continuarcompra = () => {
        Swal.fire({
            title: "¿Quieres guardar los datos?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Si",
            denyButtonText: `No`
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire("Guardado con exito", "", "success");
                toggleModal();
            } else if (result.isDenied) {
                Swal.fire("Los datos no han sido guardados", "", "info");
            }
        });
    }
    const Separador = (event: any) => {
        const nuevoNumero = event.target.value;



        if (nuevoNumero.length === 4 || nuevoNumero.length === 9 || nuevoNumero.length === 14) {
            // Agregar guion después de cada 4 dígitos
            const nuevoNumeroConSeparador = nuevoNumero + "-";

            // Actualizar el estado con el nuevo número con guion
            setNumeroDeTarjeta(nuevoNumeroConSeparador);
        } else {
            // Actualizar el estado con el nuevo número sin guion
            setNumeroDeTarjeta(nuevoNumero);
        }
    }

    const SeparadorFecha = (event: any) => {
        const nuevaFecha = event.target.value;



        if (nuevaFecha.length === 2) {
            // Agregar guion después de cada 4 dígitos
            const nuevoNumeroConSeparador = nuevaFecha + "/";

            // Actualizar el estado con el nuevo número con guion
            setFecha(nuevoNumeroConSeparador);
        } else {
            // Actualizar el estado con el nuevo número sin guion
            setFecha(nuevaFecha);
        }
    }
    return (
        <div style={{ margin: "0 auto", width: "100rem" }}>
            <div className='contenedor-objetos'>
                <div className='card-derecha '>
                    <div className="card-header">
                        <h3>Tu carrito</h3>
                    </div>
                    <div className="card-body">
                        <div className="centrar-img">
                            <img className="imagen" src="https://i.ibb.co/qBrd2tN/minecraftr.jpg" />
                        </div>
                        <div className="titulo">
                            <strong>
                                <p className="p">Minecraft Java (PC)</p>
                            </strong>
                        </div>
                        <div className="cantidad">
                            <button className="btn" onClick={quitar}><FontAwesomeIcon icon={faMinus} /></button>
                            <strong>
                                <p className="contador">{contador}</p>
                            </strong>
                            <button className="btn" onClick={agregar}><FontAwesomeIcon icon={faPlus} /></button>
                            <strong>
                                <p className="precio">563.73 MXN</p>
                            </strong>
                        </div>
                        <div className="btn-Margen">
                            <button className="btn-eliminar"><FontAwesomeIcon icon={faTrash} /></button>
                        </div>
                    </div>
                    <div className="card-footer">
                        <p className="p">Al hacer una compra estas aceptando nuestros terminos y condiciones</p>
                    </div>
                </div>
                <div className='card-izquierda'>
                    <div className="card-header">
                        <h3>Resumen</h3>
                    </div>
                    <div className="card-body">
                        <div className="">
                            <input className="btn-compra" type="button" value="Continuar con la compra" onClick={toggleModal} />
                        </div>
                        <div className="card-resumen">
                            <strong>
                                <div>1 producto:
                                    <span className="span">10MXN</span>
                                </div>
                                <div>Servicio:
                                    <span className="span">100 MXN</span>
                                </div>
                            </strong>
                            <strong>
                                <div className="card-footer">Total:
                                    <span className="span">562625</span >
                                </div>
                            </strong>

                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Registre su tarjeta de debito o credito</ModalHeader>
                <ModalBody>
                    <Form>
                        <Row>
                            <FormGroup row>
                                <Col>
                                    <InputGroup>
                                        <InputGroupText>@</InputGroupText>
                                        <Input
                                            id="exampleSelect"
                                            name="select"
                                            type="select"
                                            value={metodoDePago}
                                            onChange={(e) => setMetodoDePago(e.target.value)}
                                        >
                                            <option disabled={metodoDePago !== "0"} selected>
                                                Seleccione un metodo de pago
                                            </option>
                                            <option value={"1"}>Tarjeta de Credito y Debito</option>
                                            <option value={"2"}>Mercado Pago</option>
                                            <option value={"3"}>Paypal</option>
                                        </Input>
                                    </InputGroup>
                                </Col>
                            </FormGroup>
                            {metodoDePago !== "0" &&
                                <><>
                                    <Col md={10}>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroupText><FontAwesomeIcon icon={faHashtag} /></InputGroupText>
                                                <Input min={0} maxLength={19} placeholder="Numero de tarjeta" onChange={Separador} value={numeroDeTarjeta} />
                                            </InputGroup>
                                        </FormGroup>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroupText><FontAwesomeIcon icon={faUserTie} /></InputGroupText>
                                                <Input placeholder="Nombre del propietario" />
                                            </InputGroup>
                                        </FormGroup>
                                        {
                                            (metodoDePago === "3" || metodoDePago === "2") &&
                                            <FormGroup>
                                                <InputGroup>
                                                    <InputGroupText><FontAwesomeIcon icon={faEnvelope} /></InputGroupText>
                                                    <Input type="email" placeholder="Correo electronico" />
                                                </InputGroup>
                                            </FormGroup>
                                        }

                                    </Col>

                                    <Col md={4}>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroupText><FontAwesomeIcon icon={faCalendarDays} /></InputGroupText>
                                                <Input min={0} maxLength={5} placeholder="MM/AA" onChange={SeparadorFecha} value={fecha} />
                                            </InputGroup>
                                        </FormGroup>
                                    </Col></>
                                    <Col md={3}>
                                        <FormGroup>
                                            <InputGroup>
                                                <InputGroupText><FontAwesomeIcon icon={faCreditCard} /></InputGroupText>
                                                <Input
                                                    min={0} maxLength={3}
                                                    type="password"
                                                    placeholder="CVV" />
                                            </InputGroup>
                                        </FormGroup>
                                    </Col></>

                            }

                        </Row>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={Continuarcompra} >Sí</Button>
                    <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
function flatpickr(arg0: string, arg1: { dateFormat: string; }) {
    throw new Error("Function not implemented.");
}