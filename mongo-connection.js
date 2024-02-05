import { MongoClient } from "mongodb";

let url= 'mongodb://0.0.0.0/27017';
const client= new MongoClient(url);

export async function connectDb(){
    let connection = await client.connect();
    let db=connection.db('e-comm');
    let collection=db.collection('product');
    return collection;
}