// React Imports
import React from "react";


// Styles Imports
import styles from "./GalleryButtons.module.css";

const Buttons: React.FunctionComponent<{ /* TITLE: STRING, CHILDREN: REACTNODE */ }> = ({ /* TITLE, CHILDREN */ }) => {
    return(
        <>
         {/* <div title={title}>{children}</div> EJEMPLO DE COMO DEBERIA ESCRIBIRSE CON PROPS */}
         <div className={styles.ButtonGenre}> 
            
            <button className={styles.ButtonOne}>
                Our web
            </button>

            <button className={styles.ButtonSecond}>
                Learn
            </button>

            <button className={styles.ButtonThird}>
                Profile
            </button>

            <button className={styles.ButtonFour}>
                Play
            </button>

         </div>

       
    </>)
};


export default Buttons;