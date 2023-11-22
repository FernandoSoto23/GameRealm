/* utilidades */
/* Componentes importados */
import { useEffect, useState } from "react";

import { WebServiceUrl } from "../clases/rutas";
import { CardPerfil } from "../Tools/cardPerfil";

export const Perfil = (props: any) => {
  const [usuarioPerfil, setUsuarioPerfil] = useState([]);
  const [idPerfil, setIdPerfil] = useState(0);
  const { id } = props;

  // const fechaNacimiento = fecha_nacimiento.split(" ");
  const MostrarUsuario = () => {
    let usuarioGameRealm: any = localStorage.getItem("UsuarioGameRealm");
    usuarioGameRealm = usuarioGameRealm ? JSON.parse(usuarioGameRealm) : null;
    console.log(usuarioGameRealm);
    if (usuarioGameRealm !== null) {
      setUsuarioPerfil(usuarioGameRealm);
      setIdPerfil(usuarioGameRealm["id"]);
    }
  };

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
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Perfil</h3>
        <div className="card-tools">
          {/*       <!-- Buttons, labels, and many other things can be placed here! -->
                <!-- Here is a label for example --> */}
          <span className="badge badge-primary">Label</span>
        </div>
        {/*     <!-- /.card-tools --> */}
      </div>

      {/*   <!-- /.card-header --> */}
      {usuarioPerfil.map((usuario: any) => (
        <div className="card-body">
          <section style={{ backgroundColor: "#eee" }}>
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
                  usuario={usuario.usuario}
                ></CardPerfil>

                <div className="col-lg-8">
                  <div className="card mb-4">
                    <div className="card-body">
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
                          <p className="mb-0">Telefono</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{usuario.telefono}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Numero Celular</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{usuario.telefono}</p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Fecha de nacimiento</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {usuario.fecha_nacimiento.split(" ")[0]}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Domicilio</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {usuario.ciudad} {usuario.estado},{" "}
                            {usuario.domicilio}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Escolaridad</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">
                            {usuario.escolaridad}
                          </p>
                        </div>
                      </div>
                      <hr />
                      <div className="row">
                        <div className="col-sm-3">
                          <p className="mb-0">Titulo</p>
                        </div>
                        <div className="col-sm-9">
                          <p className="text-muted mb-0">{usuario.titulo}</p>
                        </div>
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
