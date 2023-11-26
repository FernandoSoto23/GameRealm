import { faAlignRight, faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { text } from "stream/consumers";
import Swal from "sweetalert2";



export function Resumen() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
      setModal(!modal);
    };
const Continuarcompra = ()=>{
    Swal.fire({
        title: "¿Quieres guardar los datos?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Si",
        denyButtonText: `No`
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success");
          toggleModal();
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
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
                            <p className="p">Minecraft Java (PC)</p>
                        </div>
                        <div className="precio">
                            <button className="btn"><FontAwesomeIcon icon={faMinus} /></button>
                            <p>50</p>
                            <button className="btn"><FontAwesomeIcon icon={faPlus} /></button>
                            <p>563.73 MXN</p>
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
                    <div className="card-footer">
                        <h3>Resumen</h3>
                    </div>
                    <div className="card-body">
                        <div className="btn-compra">
                            <input type="button" value="Continuar con la compra" onClick={toggleModal} />
                        </div>
                        <ul className="card-resumen">
                            <li>1 producto
                                <strong>
                                    <span className="span">a</span>
                                </strong>
                            </li>
                            <li>Total:
                                <strong>
                                    <span className="span">562625</span >
                                </strong>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Registre su tarjeta de debito o credito</ModalHeader>
        <ModalBody>
          <input type="text" placeholder="Nombre"/>
          <input type="text" placeholder="Apellido"/>
          <input type="text" placeholder="Numero de tarjeta"/>
          <input type="text" placeholder="Fecha de caducidad"/>
          <input type="text" placeholder="CCV"/>
            </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Continuarcompra} >Sí</Button>
          <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
    )
}