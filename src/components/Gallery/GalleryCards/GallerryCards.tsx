// React Imports
import React from "react";

// Styles Imports
import styles from "./GaleryCards.module.css";

//Img Imports
import ImageLoader from "../../Loader/Loader";

const GalleryCards: React.FunctionComponent<{ title:string, artist:string, description:string , image:string}> = ({ title, artist, description , image}) => {
    return(
        <>
        
            <div className={styles.ContainerImage}>
                <ImageLoader image={image} video={undefined} quite={undefined}/>

                <div className={styles.overlay}>
                    <div className={styles.text1}>{title}</div>
                    <div className={styles.text2}>{artist}</div>
                    <hr className={styles.line1}></hr>
                    <div className={styles.text3}>{description}</div>
                </div>

             
            
            </div>
    </>)
};

export default GalleryCards;
