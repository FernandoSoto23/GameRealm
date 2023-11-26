/* utilidades */
/* Componentes importados */
import { useEffect, useState } from "react";

import { WebServiceUrl } from "../clases/rutas";
import { CardPerfil } from "../Tools/cardPerfil";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, InputGroup, Input, InputGroupText, Col, Row, Form } from "reactstrap";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faGlobe, faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export const Perfil = (props: any) => {
  const [usuarioPerfil, setUsuarioPerfil] = useState([]);
  const [idPerfil, setIdPerfil] = useState(0);
  const { id } = props;

  //ventana modal de reactstrap
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ErroresPantalla, setErroresPantalla]: any = useState([]);
  let Errores: string[] = [];
  /* Fin modal */
  // const fechaNacimiento = fecha_nacimiento.split(" ");
  const MostrarUsuario = () => {
    let usuarioGameRealm: any = localStorage.getItem("UsuarioGameRealm");
    usuarioGameRealm = [usuarioGameRealm ? JSON.parse(usuarioGameRealm) : null];
    console.log(usuarioGameRealm);
    if (usuarioGameRealm !== null) {
      setUsuarioPerfil(usuarioGameRealm);
      setIdPerfil(usuarioGameRealm["id"]);
    }
  };
  console.log("Desde ", usuarioPerfil);
  async function buscarID(id: any) {
    const url = `${WebServiceUrl}/api/Usuario/ObtenerUsuario?id=${id}`;
    try {
      const response = await fetch(url);
      const datos = await response.json();
      setUsuarioPerfil(datos.results);
      console.log(datos.results);
    } catch (error) {
      console.error("nuevos errores" + error);
    }
  }
  function LogOut() {
    localStorage.removeItem("UsuarioGameRealm");
    window.location.href = "./home";
  }

  const Separador = (event: any) => {
    const nuevoNumero = event.target.value;

    if (
      nuevoNumero.length === 2 ||
      nuevoNumero.length === 5 ||
      nuevoNumero.length === 8 ||
      nuevoNumero.length === 11 ||
      nuevoNumero.lenght === 14
    ) {
      // Agregar guion después de cada 4 dígitos
      const nuevoNumeroConSeparador = nuevoNumero + "-";

      // Actualizar el estado con el nuevo número con guion
      setTelefono(nuevoNumeroConSeparador);
    } else {
      // Actualizar el estado con el nuevo número sin guion
      setTelefono(nuevoNumero);
    }
  };
  const GuardarDatos = () => {
    Swal.fire({
      title: "¿Estas seguro de guardar los datos?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: `No`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Guardado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Los cambios no se guardaron", "", "info");
      }
    });

  }
  /*   function usuariolog(){
    let idUsuario : any = localStorage.getItem("usuario");
    idUsuario = JSON.parse(idUsuario);
    setUsuarioPerfil(usuarioIntranet);
  } */
  useEffect(() => {
    if (id !== undefined) {
      buscarID(id);
      return;
    }
    MostrarUsuario();
  }, [id]);
  return (
    <div className="card perfil-contenedor">
      {/*   <!-- /.card-header --> */}
      {usuarioPerfil !== null &&
        usuarioPerfil.map((usuario: any) => (
          <div className="card-body" style={{ backgroundColor: "#ededed" }}>
            <section>
              <div className="container py-5">
                <div className="row">
                  <div className="col"></div>
                </div>
                <div className="row">
                  <CardPerfil
                    perfil={usuario.perfil}
                    domicilio={usuario.domicilio}
                    ciudad={usuario.ciudad}
                    estado={usuario.estado}
                    usuario={usuario.nombreUsuario}
                    nombre={usuario.nombre}
                  ></CardPerfil>

                  <div className="col-lg-8">
                    <div className="card mb-4">
                      <div className="card-body">
                        <div className=" contenedor-botones">
                          <Button color="danger" onClick={toggle}>
                            Editar
                          </Button>
                        </div>
                        <div>
                          <Modal isOpen={modal} toggle={toggle}>
                            <ModalHeader style={{color: "white"}} className="bg-primary" toggle={toggle}>
                              Editar Perfil
                            </ModalHeader>
                            <ModalBody>
                              <Form>
                                <Row >
                                  <Col md={10}>
                                    {/* Nombre */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupText>Nombre</InputGroupText>
                                        <Input placeholder="" type="text" />
                                      </InputGroup>
                                    </FormGroup>
                                    {/* Apellido */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupText>Apellido</InputGroupText>
                                        <Input placeholder="" type="text" />
                                      </InputGroup>
                                    </FormGroup>
                                    {/* Email (deshabilitado) */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupText>Email</InputGroupText>
                                        <Input disabled value={usuario.email} />
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                  
                                  <Col md={3}>
                                    {/* Teléfono */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupText><FontAwesomeIcon icon={faMobileScreenButton} /></InputGroupText>
                                        <Input
                                          min={0}
                                          maxLength={14}
                                          placeholder="Teléfono"
                                          type="text"
                                          onChange={Separador}
                                          value={telefono}
                                        />
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>

                                  <Col md={3}>
                                    {/* País */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupText><FontAwesomeIcon icon={faGlobe} /></InputGroupText>
                                        <Input placeholder="País" type="text" />
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                  <Col md={3}>
                                    {/* Fecha de nacimiento */}
                                    <FormGroup>
                                      <InputGroup>
                                        <InputGroupText><FontAwesomeIcon icon={faCalendar} /></InputGroupText>
                                        <Input type="date" />
                                      </InputGroup>
                                    </FormGroup>
                                  </Col>
                                </Row>
                              </Form>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="success" onClick={GuardarDatos}>
                                Guardar
                              </Button>{" "}
                              <Button color="danger" onClick={toggle}>
                                Cancelar
                              </Button>
                            </ModalFooter>
                          </Modal>
                        </div>
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Nombre Completo:</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{usuario.nombre}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Correo Electronico</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{usuario.email}</p>
                          </div>
                        </div>
                        <hr />

                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Numero Celular</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              {usuario.telefono}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Pais</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">{usuario.pais}</p>
                          </div>
                        </div>
                        <hr />
                        <div className="row"></div>
                        <hr />
                        <div className="row">
                          <div className="col-sm-3">
                            <p className="mb-0">Fecha de nacimiento</p>
                          </div>
                          <div className="col-sm-9">
                            <p className="text-muted mb-0">
                              {usuario.fechaDeNacimiento.split(" ")[0]}
                            </p>
                          </div>
                        </div>
                        <hr />
                        <div className="btn-cerrarSesion">
                          <Button onClick={LogOut} color="danger"> Cerrar sesión</Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        ))}
      {/*   <!-- /.card-body --> */}
    </div>
    /* <!-- /.card --> */
  );
};
