import { url } from "inspector";
import Swal from "sweetalert2";
import React, { useState } from "react";
import { Spinner } from "reactstrap";

export function RegistrarUsuario() {
  const [nombreCompleto, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [calendario, setCalendario] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ErroresPantalla, setErroresPantalla]: any = useState([]);
  const [errorCodigo, setErrorCodigo] = useState(false);
  const [pais, setPais] = useState("");
  const [spinner, setSpinner] = useState(false);
  let Errores: string[] = [];
  const imagen = require("../build/img/logo.png");

  const CrearUsuario = async () => {
    //VALIDACION DE ERRORES
    if (nombreCompleto === null || nombreCompleto === "") {
      Errores.push("Ingrese su nombre completo");
    }
    if (nombreUsuario === null || nombreUsuario === "") {
      Errores.push("Ingrese un nombre de usuario");
    }
    if (correo === null || correo === "") {
      Errores.push("Ingrese un correo valido");
    }
    if (contraseña === null || contraseña === "") {
      Errores.push("Por favor ingrese una contraseña");
    }
    if (confirmarContraseña === null || confirmarContraseña === "") {
      Errores.push("Confirme la contraseña");
    } else if (contraseña !== confirmarContraseña) {
      Errores.push("La contraseña no coincide");
    }
    if (telefono === null || telefono === "") {
      Errores.push("Ingrese un telefono");
    }
    if (pais === null || pais === "" || pais === "0") {
      Errores.push("Ingrese el pais");
    }
    if (calendario === null || calendario == "") {
      Errores.push("Ingrese fecha de nacimiento");
    }
    setErroresPantalla(Errores);
    if (!Errores[0]) {
      setSpinner(true);
      try {
        const url = "https://localhost:7092/api/Usuario/CrearUsuario";
        const construirJson = {
          nombre: nombreCompleto + " " + apellido,
          nombreUsuario: nombreUsuario,
          email: correo,
          pwd: contraseña,
          telefono: telefono,
          token: "",
          pais: pais,
          fechaDeNacimiento: calendario,
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(construirJson) ?? undefined,
        };
        console.log(requestOptions);
        const result = await fetch(url, requestOptions);
        if (result.status === 200) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "La cuenta fue creada correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
          setSpinner(false);

          setTimeout(function () {
            codigoDeVerificacion();
          }, 2000);
        } else {
          Swal.fire("No esta funcionadno!");
        }
      } catch (error) {
        setSpinner(false);
        console.log(error);
      }
    }
  };
  const codigoDeVerificacion = async () => {
    const { value: codigo } = await Swal.fire({
      title: "Ingresa el codigo de verificacion",
      input: "password",
      inputLabel: errorCodigo
        ? "El codigo que ingresaste no coincide"
        : "Revisa tu correo electronico",
      inputPlaceholder: "Ingresa el codigo",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off",
      },
    });
    if (codigo) {
      const url = `https://localhost:7092/api/Usuario/CorreoDeVerificacion?usuario=${nombreUsuario}&codigo=${codigo}`;
      const resp = await fetch(url);
      if (resp.status === 200) {
        const data = await resp.text(); // Obtener el contenido del cuerpo de la respuesta como texto
        if (data === "ok") {
          Swal.fire(`El usuario fue activado correctamente`);
          setTimeout(function() {
            window.location.href = "./Login"
        }, 1000);
        } else {
          setErrorCodigo(true);
          Swal.fire(`El codigo que ingresaste fue incorrecto`);
          setTimeout(function() {
           codigoDeVerificacion();
        }, 2000);
        }
      } else {
        Swal.fire(`Hubo un error en la solicitud: ${resp.status}`);
      }
    }
  };
  return (
    <div style={{ margin: "0 auto", width: "100rem" }}>
      <div className="contenedor-padre">
        <div className="card-logo">
          <img className="RUsuario" src={imagen} alt="" />
        </div>
        <div className="card-registrarUsuario">
          <form>
            <h1>Crear cuenta</h1>
            <div className="seccion-fila">
              <input
                className="input form-control"
                type="text"
                placeholder="Nombre"
                onChange={(e) => setNombre(e.target.value)}
              />
              <input
                className="input form-control"
                type="text"
                placeholder="Apellido"
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
            <div className="seccion-fila">
              <input
                className="input"
                type="text"
                placeholder="Nombre usuario"
                onChange={(e) => setNombreUsuario(e.target.value)}
              />
              <input
                type="date"
                className="input"
                onChange={(e: any) => setCalendario(e.target.value)}
              />
            </div>
            <input
              className="input"
              type="email"
              placeholder="Correo electronico"
              onChange={(e) => setCorreo(e.target.value)}
            />
            <div className="seccion-fila">
              <select
                name=""
                id=""
                className="input"
                onChange={(e: any) => setPais(e.target.value)}
              >
                <option value="0" selected>
                  -- Seleccione un pais --
                </option>
                <option value="ARG">Argentina</option>
                <option value="AUS">Australia</option>
                <option value="BGR">Bulgaria</option>
                <option value="BRA">Brasil</option>
                <option value="CAN">Canadá</option>
                <option value="CHE">Suiza</option>
                <option value="CHN">China</option>
                <option value="COL">Colombia</option>
                <option value="CZE">República Checa</option>
                <option value="DNK">Dinamarca</option>
                <option value="EGY">Egipto</option>
                <option value="ESP">España</option>
                <option value="ETH">Etiopía</option>
                <option value="FIN">Finlandia</option>
                <option value="FRA">Francia</option>
                <option value="GBR">Reino Unido</option>
                <option value="GER">Alemania</option>
                <option value="GRC">Grecia</option>
                <option value="HRV">Croacia</option>
                <option value="HUN">Hungría</option>
                <option value="IDN">Indonesia</option>
                <option value="IND">India</option>
                <option value="IRL">Irlanda</option>
                <option value="ITA">Italia</option>
                <option value="JPN">Japón</option>
                <option value="KEN">Kenia</option>
                <option value="KOR">Corea del Sur</option>
                <option value="MEX">México</option>
                <option value="MNG">Mongolia</option>
                <option value="MYS">Malasia</option>
                <option value="NGA">Nigeria</option>
                <option value="NLD">Países Bajos</option>
                <option value="NZL">Nueva Zelanda</option>
                <option value="PAK">Pakistán</option>
                <option value="PER">Perú</option>
                <option value="PHL">Filipinas</option>
                <option value="POL">Polonia</option>
                <option value="PRT">Portugal</option>
                <option value="ROU">Rumanía</option>
                <option value="RUS">Rusia</option>
                <option value="SAU">Arabia Saudita</option>
                <option value="SWE">Suecia</option>
                <option value="THA">Tailandia</option>
                <option value="TUR">Turquía</option>
                <option value="UKR">Ucrania</option>
                <option value="USA">Estados Unidos</option>
                <option value="VEN">Venezuela</option>
                <option value="VNM">Vietnam</option>
                <option value="ZAF">Sudáfrica</option>
              </select>
              <input
                className="input"
                type="telefono"
                placeholder="Teléfono"
                onChange={(e) => setTelefono(e.target.value)}
              />
            </div>
            <div className="seccion-fila">
              <input
                className="input"
                type="password"
                placeholder="Contraseña"
                onChange={(e) => setContraseña(e.target.value)}
              />
              <input
                className="input"
                type="password"
                placeholder="Confirmar contraseña"
                onChange={(e) => setConfirmarContraseña(e.target.value)}
              />
            </div>

            <div>
              {ErroresPantalla.map((e: any) => (
                <div className="bg-danger">
                  <p className="texto-centrado pErrores">{e}</p>
                </div>
              ))}
            </div>
            <div className="boton-orientacion">
              <div>
                <button className="boton-rojo">Cancelar</button>
              </div>
              <div>
                <input
                  className="boton boton-azul-verde"
                  type="button"
                  onClick={CrearUsuario}
                  value="Crear Cuenta"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      {spinner &&
            <div className="d-flex justify-content-center">
            <Spinner color="primary" type="grow">
              Loading...
            </Spinner>
            <Spinner color="secondary" type="grow">
              Loading...
            </Spinner>
            <Spinner color="success" type="grow">
              Loading...
            </Spinner>
            <Spinner color="danger" type="grow">
              Loading...
            </Spinner>
            <Spinner color="warning" type="grow">
              Loading...
            </Spinner>
            <Spinner color="info" type="grow">
              Loading...
            </Spinner>
            <Spinner color="light" type="grow">
              Loading...
            </Spinner>
            <Spinner color="dark" type="grow">
              Loading...
            </Spinner>
          </div>
    

      }
    </div>
  );
}
