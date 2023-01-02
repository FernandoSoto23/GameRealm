import React, { useState } from 'react';


export function Home(){
    const [img,setImg] = useState(0);
    const imagenes = ["https://i.ibb.co/FXdhvmP/cortes-de-carne-1024x536.png",
                        "https://i.ibb.co/xSvxF4s/Tipos-de-corte-de-carne.jpg",
                        "https://i.ibb.co/CskLrYN/1405529867.jpg"];
    return(

        <div>
            <h1>Desde Home</h1>
            
        </div>
    );
}