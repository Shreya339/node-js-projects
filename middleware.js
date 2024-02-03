/* Creating a Middleware- applied on all routes in different file*/ 
const reqFilter = (req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age")
    } 
    else if(req.query.age<18){
        res.send("You cannot access this page")
    }
    else {
        next();  //if this is not present,browser never finishes loading and not able to route
    }
}

export default reqFilter;