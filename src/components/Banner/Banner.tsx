// React Imports
import React from "react";


// Styles Imports
import styles from "./Banner.module.css";


//Img Imports



const Banner: React.FunctionComponent<{ currentImage: string}> = ({  currentImage }) => {
    return(
    <>

         <div className={styles.BannerYCalendar} style={{backgroundImage: "url("+currentImage+")"}}>

           <div className={styles.ContainerBanner}>
              
              <img src= {currentImage}  className={styles.Poster}/>

           </div>

         
            
         </div>
    </>)
};


export default Banner;