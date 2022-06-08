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
        <div className={styles.Content}>
          <Calendar />
          <Gallery/>
        </div>
        </div>  
  </>)
};


export default HomePage;



