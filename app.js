const express = require("express");

// instance of express app
const app = express();


// respond with "home page" when a GET request is made to the homepage
app.get('/', (req, res) => {
    // res.send('<p>home page</p>')
    res.sendFile("./views/index.html", {root: __dirname}) // it looks for absolute path
})

app.get('/about', (req, res) => {
    // res.send('<p>about page</p>')\
    res.sendFile("./views/about.html", {root: __dirname})
})


// redirects
app.get("/about-us", (req,res)=>{
    res.redirect("/about")
})


// 404 page
// use function will get fired for every request regardless of the url, only if the request reaches this point of the code
app.use((req,res)=>{
    res.status(404).sendFile("./views/404.html", {root: __dirname})
})


// listen for requests
app.listen(3000, ()=>{
    console.log("Listening at port 3000")
})