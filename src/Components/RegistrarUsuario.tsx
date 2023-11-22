import { url } from "inspector";
import { useState } from "react";
import Swal from 'sweetalert2'

export function RegistrarUsuario() {
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [confirmarContraseña, setConfirmarContraseña] = useState("");
  const [telefono, setTelefono] = useState("");
  const [ErroresPantalla, setErroresPantalla]: any = useState([]);
  let Errores: string[] = [];

  
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
    if(contraseña === null || contraseña === "") {
      Errores.push("Por favor ingrese una imagen");
    }
    if(confirmarContraseña === null || confirmarContraseña === ""){
      Errores.push("Confirme la contraseña");
    }else if(contraseña !== confirmarContraseña){
      Errores.push("La contraseña no coincide");
    }
    if (telefono === null || telefono === "") {
      Errores.push("Ingrese un telefono");
    }
    setErroresPantalla(Errores);
    if(!Errores[0]){
      try{
        const url = "https://localhost:7092/api/Usuario/CrearUsuario";
        const construirJson = {
          nombre: nombreCompleto,
          nombreUsuario: nombreUsuario,
          email: correo,
          pwd: contraseña,
          telefono : telefono,
          token: ""
        };
        const requestOptions = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(construirJson) ?? undefined,
        };
        console.log(requestOptions)
        const result = await fetch(url,requestOptions);
        if(result.status === 200){
          const { value: codigo } = await Swal.fire({
            title: "Ingresa el codigo de verificacion",
            input: "password",
            inputLabel: "Revisa tu correo electronico",
            inputPlaceholder: "Ingresa el codigo",
            inputAttributes: {
              maxlength: "10",
              autocapitalize: "off",
              autocorrect: "off"
            }
          });
          if (codigo) {
            const url = `https://localhost:7092/api/Usuario/CorreoDeVerificacion?usuario=${nombreUsuario}&codigo=${codigo}`
            const resp = await fetch(url);
            if (resp.status === 200) {
              const data = await resp.text(); // Obtener el contenido del cuerpo de la respuesta como texto
              if (data === 'ok') {
                Swal.fire(`El código fue correcto: ${codigo}`);
              } else {
                Swal.fire(`Hay un error`);
              }
            } else {
              Swal.fire(`Hubo un error en la solicitud: ${resp.status}`);
            }
          }
        
        }else{
          Swal.fire("No esta funcionadno!");
        }
      }catch(error){
        console.log(error)
      }

  

  }  

  };
  return (
    <div style={{ margin: "0 auto", width: "100rem" }}>
      <div className="contenedor-padre">
        <div className="card-logo">
          <h1>:v</h1>
        </div>
        <div className="card-registrarUsuario">
          <form>
            <h1>Crear cuenta</h1>
            <input
              className="input"
              type="text"
              placeholder="Nombre completo"
              onChange={(e) => setNombreCompleto(e.target.value)}
            />
            <input
              className="input"
              type="text"
              placeholder="Nombre usuario"
              onChange={(e) => setNombreUsuario(e.target.value)}
            />
            <input
              className="input"
              type="email"
              placeholder="Correo electronico"
              onChange={(e) => setCorreo(e.target.value)}
            />
            <input className="input" type="password" placeholder="Contraseña" onChange={(e)=>setContraseña(e.target.value)} />
            <input
              className="input"
              type="password"
              placeholder="Confirmar contraseña"
              onChange={(e) => setConfirmarContraseña(e.target.value)}
            />
            <input
              className="input"
              type="telefono"
              placeholder="Teléfono"
              onChange={(e) => setTelefono(e.target.value)}
            />
            <div>
              {ErroresPantalla.map((e : any)=>
                <p className="texto-centrado pErrores">
                  {e}
                </p>
              
              )}
            </div>
            <div className="boton-orientacion">
              <div>
                <button className="boton-rojo">Cancelar</button>
              </div>
              <div>
              <input className="boton boton-azul-verde" type="button" onClick={CrearUsuario} value="Crear Cuenta"/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
