'use client'
import styles from "./styles.module.css";
import { useState } from "react";


export default function ImagesDisplay(props){
    const {images} = props;
    const [mainIndex, setMainIndex] = useState(0);

    function handleImageClick(index){
        setMainIndex(index);
    }


    return(
        <>
            <div className={styles.mainImage} style={{backgroundImage: `url(/product_images/${images[mainIndex].url})`}}></div>
            {images.map((image, index)=>{
                return(
                    <div key={`images-${image.id}`}className={styles.subImage} style={{backgroundImage: `url(/product_images/${image.url})`}} onClick={() => handleImageClick(index)}></div>
                )
            })}
        </>
    )

}