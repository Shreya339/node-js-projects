import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs';

/* Create API and send response */
const app = new express();
app.get('', (req, res) => {
    res.send("<h1>Welcome to the home page<h1>")
})

/* Reading request parameters */
app.get('/about', (req, res) => {
    console.log("Data sent by request is", req.query.name)
    res.send("Welcome to the about page")
})

/* Sending html as response */
app.get('/htmlresponse', (req, res) => {
    // go to about page and display query param
    res.send(`
    <input type='text' placeholder='username' value=${req.query.name}>
    <a href="/about"> <button>Click me</button></a href> 
    `)
})

/* Sending json response */
app.get('/jsonresponse', (req, res) => {
    res.send([
        {
            name: 'john',
            email: 'john@gmail.com'
        },
        {
            name: 'peter',
            email: 'peter@gmail.com'
        }
    ]
    )
})
app.listen(5000)

// ----------------------------------------------------------------------------------------------

/* Rendering entire multiple html pages from different folder */

const filepath = fileURLToPath(import.meta.url); //meta-property exposes context-specific metadata to a JavaScript module.
let directory = path.dirname(filepath);
let publicPath = path.join(directory,'public');

// express.static built-in middleware function To serve static files: express.static(root, [options])

app.use(express.static(publicPath));

/* To create a virtual path prefix (where the path does not actually exist in the file system) for files that are 
served by the express.static function, specify a mount path for the static directory, as shown below:
app.use('/static', express.static('public')) */

//give the route as /about.html
//if no route is given, index.html gets rendered by default

//---------------------------------------------------------------------------------------------------
/* Lets create a virtual path now  
Paths are matched in the order they are written */
app.get('',(_,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/aboutme',(_,res)=>{
    res.sendFile(`${publicPath}/about.html`)
});
// app.get('*',(_,res)=>{
//     res.sendFile(`${publicPath}/pagenotfound.html`)
// });

//-----------------------------------------------------------------------------------------------------

/* Template Engine */
app.set('view engine', 'ejs');

//we need to manually create a folder named views and profile.ejs

app.get('/profile',(req,res)=>{
    const user={
        name:'John',
        email:'john@test.com',
        Country:'USA'
    }
    // console.error({user})
    // console.error(user)
    res.render('profile',{user})
});

app.get('/login', (req,res)=> {
    res.render('login')
})