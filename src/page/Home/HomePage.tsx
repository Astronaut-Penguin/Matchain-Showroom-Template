// React Imports
import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Banner from "../../components/Banner/Banner";


// Styles Imports
import styles from "./HomePage.module.css";
import Calendar from "../../components/Calendar/Calendar";


//Img Imports

// TERMINAR LOS HREF PARA QUE REDIRECCIONES DENTRO DE LA PAGINA 
// HACER EL PROP PARA PASARLE A LOS COMPONENTES 

const HomePage: React.FunctionComponent<{  }> = ({  }) => {
      return(
        <>
        <div className={styles.Main}>

              <nav className={styles.Nav}>
                <ul className={styles.Ul}>

                  <li className={styles.Li}> <a> Calendario </a> </li>
                  <li className={styles.Li}> <a> Banner </a> </li>
                  <li className={styles.Li}> <a> Galeria </a> </li>

                  <div className={`${styles.Nav} ${styles.Info}`}>
                  <li className={`${styles.Li} ${styles.Singin}`}> <a> Nosotros </a> </li>
                  <li className={`${styles.Li} ${styles.Singin}`}> <a> Iniciar Sesion </a> </li>
                  </div>
                  
                </ul>
              </nav>
           
        <div className={styles.Content}>
          <Calendar />
          <Gallery/>
        </div>
        </div>  
  </>)
};


export default HomePage;



