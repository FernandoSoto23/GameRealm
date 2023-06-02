import { WebServiceUrl } from "./rutas";


export const SanitizarDatosString = (data :string)=>{
    const datosSanitizados = data.replace(/'/g, "\\'")
                            .replace(/"/g, '\\"')
                            .replace(/\\/g, "\\\\")
                            .replace(/\*/g, "\\\\")
                            .replace(/;/g, "\\\\");
    return datosSanitizados;
}

export function SanitizarDatosInt(data : number) {
    let datosSanitizados = data;
    if (isNaN(datosSanitizados)) {
      // En caso de que el valor no sea un número entero válido, puedes realizar alguna acción apropiada, como lanzar una excepción, asignar un valor predeterminado, etc.
      console.log("valio verga")
      datosSanitizados = 0;
      throw new Error("El valor ingresado no es un número entero válido.");
      
    }
    return datosSanitizados;
}

  export function SanitizarImagenes(data : string) {
    const datosSanitizados = data.replace(/'/g, "\\'")
                            .replace(/"/g, '\\"')
                            .replace(/\\/g, "\\\\")
                            .replace(/\*/g, "\\\\")
                            .replace(/;/g, "\\\\");
    return datosSanitizados;
}

export const Auth = async (ruta: string)=>{
  try{
      const token = JSON.parse(localStorage.getItem("token") ?? "0");
      const url = `${WebServiceUrl}/api/login/Auth?token=${token}`;
      const resp = await fetch(url);
      const datos = await resp.json();
      if(datos.msg === 'ok'){
          window.location.href = ruta;
      }else{
        console.log("usuario no logueado");
      }
  }catch(error){
      console.log("Se encontro el siguiente error" + error);
  }

}    