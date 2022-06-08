// React Imports
import React, { useState } from "react";


// Styles Imports
import styles from "./Calendar.module.css";

import Datos from "../../data/Calendar.json";
import Banner from "../Banner/Banner";

type dayData = {
  name: string,
  description: string,
  imagen: string
}

const Calendar: React.FunctionComponent<{ /* TITLE: STRING, CHILDREN: REACTNODE */ }> = ({  /* TITLE, CHILDREN */ }) => {
  //este es terreno de German. 3 puntos: estado, accion, vista. Ante la accion cambia el estado y de ser ns la vista.
  const [currentDay, setDay] = useState<dayData>({ name: Datos.data[0].name, description: Datos.data[0].description, imagen: Datos.data[0].image }); //Percistente: no se pierde a menos que la pagina lo idnique. Variable: puedo cagarme en el estado y cambiarlo como se me sale del nabo
  // const promesa = () => { setDay("Lunes") }; ASi la guardo y lo haria si queiro qeudarme algo despues de la funcion. 

  /*
  switch (currentDay) {
    case "Lunes": { };
    case "Martes": { };
    default: { };

  }*/
  // declara y llama a la funcion. "Promesa". Te juro que esto que ya hiciste no es nada.

  const currentImage: string = currentDay ? currentDay.imagen : "";
  const currentDescription: string = currentDay ? currentDay.description : "";
  const currentName: string = currentDay ? currentDay.name : "";
  
  return (
    <>
      <div className={styles.Botones}>

        <button onClick={() => { const current: dayData = { name: Datos.data[0].name, description: Datos.data[0].description, imagen: Datos.data[0].image }; setDay(current) }} className={styles.BotonLunes}>
          Noticia 1
        </button>

        <button onClick={() => { const current: dayData = { name: Datos.data[1].name, description: Datos.data[1].description, imagen: Datos.data[1].image }; setDay(current) }} className={styles.BotonMartes} >

          Noticia 2

        </button>

        <button onClick={() => { const current: dayData = { name: Datos.data[2].name, description: Datos.data[2].description, imagen: Datos.data[2].image }; setDay(current) }} className={styles.BotonMiercoles} >
        Noticia 3
        </button>

        <button onClick={() => { const current: dayData = { name: Datos.data[3].name, description: Datos.data[3].description, imagen: Datos.data[3].image }; setDay(current) }} className={styles.BotonJueves} >
        Noticia 4
        </button>

        <button onClick={() => { const current: dayData = { name: Datos.data[4].name, description: Datos.data[4].description, imagen: Datos.data[4].image }; setDay(current) }} className={styles.BotonViernes} >
        Noticia 5
        </button>

        <button onClick={() => { const current: dayData = { name: Datos.data[5].name, description: Datos.data[5].description, imagen: Datos.data[5].image }; setDay(current) }} className={styles.BotonSabado} >
        Noticia 6
        </button>

        <button onClick={() => { const current: dayData = { name: Datos.data[6].name, description: Datos.data[6].description, imagen: Datos.data[6].image }; setDay(current) }} className={styles.BotonDomingo} >
        Noticia 7
        </button>
      </div>
      <Banner currentImage = { currentImage }/>
    </>)
};

export default Calendar;
