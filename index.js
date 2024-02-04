import { MongoClient } from "mongodb";

const url = "mongodb://0.0.0.0:27017";  //always same url for local mongodb
const client = new MongoClient(url);
const database = 'e-comm';

async function getData(){
    let connection= await client.connect();  //returns a promise
    let db = connection.db(database);
    let collection = db.collection('product');
    let response = await collection.find({}).toArray();
    console.log(response);
}

getData();