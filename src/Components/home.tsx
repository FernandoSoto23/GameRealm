import React, { useState } from 'react';


export function Home(){
    const [img,setImg] = useState(0);
    const imagenes = ["https://i.ibb.co/FXdhvmP/cortes-de-carne-1024x536.png",
                        "https://i.ibb.co/xSvxF4s/Tipos-de-corte-de-carne.jpg",
                        "https://i.ibb.co/CskLrYN/1405529867.jpg"];
    return(

        <div className=''>
            <h1 className='texto-centrado'>Descarga la APP</h1>
            <img className='ajustar-imagen' src="https://i.ibb.co/3TBrWvj/60c14a43fb4745795b3b358868517e79.png" alt="" />
        </div>
    );
}