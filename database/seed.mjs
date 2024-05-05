import pkg from '@next/env';
import { faker } from '@faker-js/faker';
import * as fs from "fs";
const { loadEnvConfig } = pkg;
 
const projectDir =  "./..";
loadEnvConfig(projectDir);

import myQuery from "./myQuery.mjs";

const sqlCreateProductsTable = `CREATE TABLE IF NOT EXISTS Products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    location VARCHAR(255) NOT NULL,
    seller_email VARCHAR(255) NOT NULL,
    description VARCHAR(255)
    );`;

await myQuery(sqlCreateProductsTable);

const sqlCreateProductImagesTable = `CREATE TABLE IF NOT EXISTS Product_Images(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    url VARCHAR(255) NOT NULL,
    main BOOL NOT NULL DEFAULT false,
    products_id INT NOT NULL,
    FOREIGN KEY (products_id) REFERENCES Products(id)
);`;

await myQuery(sqlCreateProductImagesTable);

const sqlCreateProductMessagesTable = `CREATE TABLE IF NOT EXISTS Product_Messages(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    text VARCHAR(255) NOT NULL,
    products_id INT NOT NULL,
    FOREIGN KEY (products_id) REFERENCES Products(id)
);`;

await myQuery(sqlCreateProductMessagesTable);

await myQuery("DELETE FROM Product_Images");

await myQuery("DELETE FROM Products;");

for( let i = 0; i <20; i++){
    const newProduct = `INSERT INTO Products
    (title, price, location, seller_email, description) 
    VALUES ("${faker.commerce.productName()}", ${Math.floor(Math.random()*2000)+100},"${faker.location.city()}","${faker.internet.email()}","${faker.word.words(10)}" );`;

    await myQuery(newProduct);

    const row = await myQuery("SELECT id FROM Products ORDER BY id DESC LIMIT 1");
    
    let main = true;
    
    for (let i = 0; i<3; i++){
        const imageUrl = faker.image.urlLoremFlickr();
        const imageName = `${row[0].id}-${Date.now()}.jpg`;
        
        const response = await fetch(imageUrl);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        fs.writeFileSync(`./../public/product_images/${imageName}`, buffer);

        const newProductImage = `INSERT INTO Product_Images (url,main, products_id) VALUES ("${imageName}",${main}, ${row[0].id})`;
        await myQuery(newProductImage);

        main = false;
    }
}

