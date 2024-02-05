import { connectDb } from "./mongo-connection.js";;

/* 2 ways to handle promise -Old*/

/* 1.Using .then() */
connectDb().then((resp)=>{
    resp.find({}).toArray().then((data)=>{
        console.log(data);
    });
})

/* 2.Using async await - Latest*/
async function main(){
    let data = await connectDb();
    data = await data.find({}).toArray();
    console.log(data);
}

main();