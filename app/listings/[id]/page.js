import myQuery from "@/database/myQuery.mjs";
import styles from "./styles.module.css";
import ImagesDisplay from "@/app/components/images_display/ImagesDisplay";

async function getProductByID(id){
    const sqlSelectProduct = `SELECT *  FROM Products WHERE id=${id}`;
    const results = await myQuery(sqlSelectProduct);
    return results[0];
}

async function getProductImagesByID(id){
    const sqlSelectImages = `SELECT * FROM Product_Images WHERE products_id=${id}`;
    const results = await myQuery(sqlSelectImages);
    return results;
}

export default async function SingleListingPage(props){
    const product = await getProductByID(props.params.id);
    const images = await getProductImagesByID(props.params.id);
   
    
    return(
        <div>
            <div className={styles.lefthandColumn}>
                <ImagesDisplay images={images}/>
            </div>
            <div className={styles.righthandColumn} >
                <h1>{product.title}</h1>
                <h2>Price: ${product.price/100}</h2>
                <h2>Location: {product.location}</h2>
                <h3>Description</h3>
                <p>{product.description}</p>

            </div>
        </div>

    )
}