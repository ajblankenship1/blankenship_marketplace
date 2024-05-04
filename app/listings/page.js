import myQuery from "@/database/myQuery.mjs";
import styles from "./styles.module.css";

async function getProducts(){
    const sqlSelectProducts = `SELECT Products.*, Product_Images.url FROM Products INNER JOIN Product_Images ON Products.id = Product_Images.products_id WHERE Product_Images.main = true;`;
    const products = await myQuery(sqlSelectProducts);
    return products;
}



export default async function ListingsPage() {

    const products = await getProducts();

    return (
      <main>
            <h1>Listings</h1>
            {products.map((product)=>{
                return(
                    <div>
                        <div className={styles.mainProductImage} style={{backgroundImage:`url(/product_images/${product.url})`}}></div>
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price/100}</p>
                        <p>Location: {product.location}</p>
                    </div>
                )
            })}
      </main>
    );
  }
  