import  express  from "express";
import { connectDb } from "./mongo-connection.js";
import  mongodb  from "mongodb";

let app = new express();
app.use(express.json())

/* GET api */
app.get('/', async(req,res)=>{
    let data = await connectDb();
    data = await data.find().toArray();
    res.send(data);
})

/* POST api -insert */
app.post('/', async(req,res)=>{
    let db = await connectDb();
    let result = await db.insertMany(req.body);
    res.send(result)
})

/* POST api -update */
app.put('/', async(req,res)=>{
    let db = await connectDb();
    let result = await db.updateOne({name:req.query.name},{$set:req.body});
    res.send(result)
})

/* DELETE api -update */
app.delete('/:id', async(req,res)=>{
    let db = await connectDb();
    let result = await db.deleteOne({_id:new mongodb.ObjectId(req.params.id)});
    res.send(result)
})

app.listen(5000);