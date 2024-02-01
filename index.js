import express from 'express';

/* Create API and send response */
const express_obj = new express();
express_obj.get('', (req, res) => {
    res.send("<h1>Welcome to the home page<h1>")
})

/* Reading request parameters */
express_obj.get('/about', (req, res) => {
    console.log("Data sent by request is", req.query.name)
    res.send("Welcome to the about page")
})

/* Sending html as response */
express_obj.get('/htmlresponse', (req, res) => {
    // go to about page and display query param
    res.send(`
    <input type='text' placeholder='username' value=${req.query.name}>
    <a href="/about"> <button>Click me</button></a href> 
    `)
})

/* Sending json response */
express_obj.get('/jsonresponse', (req, res) => {
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
express_obj.listen(5000)