import express from 'express' ;
import reqFilter from './middleware.js';
const app = new express();

app.listen('5000')

/* Creating a Application level Middleware- applied on all routes in same file*/  
/* const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age")
    } 
    else if(req.query.age<18){
        res.send("You cannot access this page")
    }
    else {
        next();  //if this is not present,browser never finishes loading and not able to route
    }
} */

// ----------------------------------------------------------------------------------------

/* Application level middleware-applies on all routes */
//app.use(reqFilter)

app.get('/',(req,res)=>{
    res.send("Welcome to home page")
})

app.get('/user',(req,res)=>{
    res.send("Welcome to user page")
})

// ------------------------------------------------------------------------------------

/* Route level middleware reqFilter, Applies on only this specific route */

app.get('/about',reqFilter,(req,res)=>{
    res.send("Welcome to about page")
})

/* Middleware on a specific group of routes */

const route = express.Router();
route.use(reqFilter)
app.use('/',route);

route.get('/contact',(req,res)=>{
    res.send("Welcome to Contact page")
})

route.get('/feedback',(req,res)=>{
    res.send("Welcome to Feedback page")
})





