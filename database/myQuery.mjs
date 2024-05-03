import mysql from 'mysql2/promise';


export default async function myQuery(sql){
    const connection = await mysql.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    });

    const [results, fields] = await connection.query(sql);

    await connection.close();

    return results;
}
