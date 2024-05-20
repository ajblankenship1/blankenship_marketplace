import myQuery from "@/database/myQuery.mjs";


async function getSearchedProducts(query){
    const sqlSelectSearchedProducts = `SELECT Products.*, Product_Images.url FROM Products INNER JOIN Product_Images ON Products.id = Product_Images.products_id WHERE Product_Images.main = true AND Products.title LIKE '%${query}%'; `;
    const products = await myQuery(sqlSelectSearchedProducts);
    return products;
}

export default async function SearchPage(props){

    const {searchParams} = props;
    const products = await getSearchedProducts(searchParams.q);
    console.log(products);
    

    return( <h1>Search Page</h1>)
}