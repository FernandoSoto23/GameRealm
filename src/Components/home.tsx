import React, { useState } from "react";
import { UncontrolledCarousel } from "reactstrap";
import imagen1 from '../assets/Carrusel/P23.jpg';
import imagen2 from '../assets/Carrusel/Assassins-Creed-Origins.jpg';
import imagen3 from '../assets/Carrusel/Cyber-Punk-2077.jpg';
import imagen4 from '../assets/Carrusel/God-Of-War.jpg';
import imagen5 from '../assets/Carrusel/Minecraft.jpg';
import imagen6 from '../assets/Carrusel/No-Man-Sky.jpg';
import imagen7 from '../assets/Carrusel/Spider-Man.jpg';
import imagen8 from '../assets/Carrusel/Star-Wars-Battlefront-II.jpg';
import imagen9 from '../assets/Carrusel/The-Last-Of-US.jpg';
import imagen10 from '../assets/Carrusel/wallpaperflare-com-wallpaper.jpg';
import imagen11 from '../assets/American Truck Simulator.png';
import imagen12 from '../assets/ARK.png';
import imagen13 from '../assets/Cities Skylines II.png';
import imagen14 from '../assets/F5.png';
import imagen15 from '../assets/UCH.jpg';
import imagen16 from '../assets/Grand Theft Auto.jpg';
import imagen17 from '../assets/Halo 5.png';
import imagen18 from '../assets/Microsoft Flight Simulator 40th Anniversary Edition.jpg';
import imagen19 from '../assets/Monster Hunter World.jpg';
import imagen20 from '../assets/Doom.png';
import imagen21 from '../assets/Phasmophobia.jpg';
import imagen22 from '../assets/Train Sim World.jpg';
import imagen23 from '../assets/Watch_Dogs® 2.jpg';
import imagen24 from '../assets/Borderlands 3.png';
import imagen25 from '../assets/fifa23.jpg';
import imagen26 from '../assets/PGA TOUR 2K23.jpg';
import imagen27 from '../assets/minecraft.png';
import imagen28 from '../assets/The elder scrolls VI.png';
import imagen29 from '../assets/COD MW 2.png';
import imagen30 from '../assets/DBZ Kakarot.png';

export function Home() {

  return (
    <><div className="home">
      <UncontrolledCarousel
        items={[
          {
            altText: "",
            caption: "",
            interval: 1000,
            key: 1,
            src: `${imagen1}`,
          },
          {
            altText: "Slide 2",
            caption: "",
            interval: 1000,
            key: 2,
            src: `${imagen2}`,
          },
          {
            altText: "Slide 3",
            caption: "",
            interval: 1000,
            key: 3,
            src: `${imagen3}`,
          },
          {
            altText: "Slide 4",
            caption: "",
            interval: 1000,
            key: 4,
            src: `${imagen4}`,
          },
          {
            altText: "Slide 5",
            caption: "",
            interval: 1000,
            key: 5,
            src: `${imagen5}`,
          },
          {
            altText: "Slide 6",
            caption: "",
            interval: 1000,
            key: 6,
            src: `${imagen6}`,
          },
          {
            altText: "Slide 7",
            caption: "",
            interval: 1000,
            key: 7,
            src: `${imagen7}`,
          },
          {
            altText: "Slide 8",
            caption: "",
            interval: 1000,
            key: 8,
            src: `${imagen8}`,
          },
          {
            altText: "Slide 9",
            caption: "",
            interval: 1000,
            key: 9,
            src: `${imagen9}`,
          },
          {
            altText: "Slide 10",
            caption: "",
            interval: 1000,
            key: 10,
            src: `${imagen10}`,
          },
        ]} />
    </div>
      <div className="home-grid">

        <div className="contenido-home">
          <img src={`${imagen11}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen12}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen13}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen14}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen15}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen16}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen17}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen18}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen19}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen20}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen21}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen22}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen23}`} className="imagen-recortada" />
        </div>

        <div className="contenido-home">
          <img src={`${imagen24}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen25}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen26}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen27}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen28}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen29}`} className="imagen-recortada" />
        </div>
        <div className="contenido-home">
          <img src={`${imagen30}`} className="imagen-recortada" />
        </div>


      </div>
    </>
  )
}
