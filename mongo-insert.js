import { connectDb } from "./mongo-connection.js";

/* Insert one row of data */
async function insertOne(){
    let db = await connectDb();
    let result = await db.insertOne({
        "name": "iPhone 13 Pro Max",
        "brand": "Apple",
        "price": 750,
        "category": "mobile"});
    if(result.acknowledged){
        console.log("One row of data inserted")
    }
}

insertOne();

/* Insert multiple rows of data */
async function insertMany(){
    let db = await connectDb();
    let result = await db.insertMany(
        [
            {
                "name": "iPhone 1 Pro Max",
                "brand": "Apple",
                "price": 750,
                "category": "mobile"
            },
            {
                "name": "iPhone 2 Pro Max",
                "brand": "Apple",
                "price": 750,
                "category": "mobile"
            },
            {
                "name": "iPhone 3 Pro Max",
                "brand": "Apple",
                "price": 750,
                "category": "mobile"
            }
        ]
    );
    if(result.acknowledged){
        console.log("Multiple rows of data inserted")
    }
}
insertMany()
