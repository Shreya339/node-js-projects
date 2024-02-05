import { connectDb } from "./mongo-connection.js"

async function update() {
    const db = await connectDb();
    let result = await db.updateOne(
        { name: "iPhone 3 Pro Max" },
        { $set: { price: 500 } }

    )
    /* To update multiple recored with the same data as specified: name:"Iphone 15 pro max
    Else, only the first one it matches will be updated */
    if (result.acknowledged)
        console.log(result)
    console.log("updated")
}

update();

//example of how result looks
// {
//     acknowledged: true,
//     modifiedCount: 1,
//     upsertedId: null,
//     upsertedCount: 0,
//     matchedCount: 1
// }
