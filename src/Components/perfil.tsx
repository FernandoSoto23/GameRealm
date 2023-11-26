/* utilidades */
/* Componentes importados */
import { useEffect, useState } from "react";

import { WebServiceUrl } from "../clases/rutas";
import { CardPerfil } from "../Tools/cardPerfil";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

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
 function LogOut(){
  localStorage.removeItem("UsuarioGameRealm");
  window.location.href ="./home";
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
                            <ModalHeader toggle={toggle}>
                              Editar Perfil
                            </ModalHeader>
                            <ModalBody>
                              <div className="row">
                                <div className="col">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="First name"
                                    aria-label="Nombre"
                                    value={usuario.nombre}
                                  />
                                </div>
                                <div className="col">
                                  <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Last name"
                                    aria-label="Usuario"
                                    value={usuario.nombreUsuario}
                                  />
                                </div>
                              </div>
                            </ModalBody>
                            <ModalFooter>
                              <Button color="primary" onClick={toggle}>
                                Do Something
                              </Button>{" "}
                              <Button color="secondary" onClick={toggle}>
                                Cancel
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
                        <Button onClick={LogOut}  color="danger"> Cerrar sesión</Button>
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
