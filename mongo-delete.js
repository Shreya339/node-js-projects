import { connectDb } from "./mongo-connection.js";

async function deleteData(){
    let db=await connectDb();
    let result = await db.deleteMany({name:"iPhone 13 Pro Max"})
    if(result.acknowledged){
        console.log("deleted")
    }
}

deleteData();