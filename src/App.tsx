import React, { useState,Children } from 'react';
//componentes
import { Header } from './Components/header';
import { Footer } from './Components/footer';
import { Barra } from './Components/barra';
import { Contenido } from './Components/contenido';
import './build/css/app.css';
import Cookies from 'universal-cookie';
import { BarraInferior } from './Components/barraInferior';

function App() {
  const [texto,setText] = useState("");
  function guardar(i:any){
    setText(i);
  }

  return (
    <div>
      <div className='contenedor-barra'>
        <Barra texto={guardar}></Barra>
        <Contenido></Contenido>
        <BarraInferior/>
      </div>
      
    </div>
  );
}

export default App;
