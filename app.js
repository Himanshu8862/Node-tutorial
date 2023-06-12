const express = require("express");
const morgan = require("morgan")

// instance of express app
const app = express();

// register view engine, it will look into "views" folder - to insert dynamic values in html and much more
app.set("view engine", "ejs");
// app.set("views", "myViews")


// middleware
// app.use((req, res, next) => {
//     console.log('new request made:');
//     console.log('host: ', req.hostname);
//     console.log('path: ', req.path);
//     console.log('method: ', req.method);
//     next();
// });

// app.use((req, res, next) => {
//     console.log('in the next middleware');
//     next();
// });

// app.use(morgan("dev"))

// ---static files ---
// setting up our static files, pass in here a folder name for example "public" and that means that if I create a folder called public then anything inside that folder is going to be made available as a static file to the front-end
app.use(express.static("public"))


// respond with "home page" when a GET request is made to the homepage
app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
        { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    ];
    res.render("index", { title: "Home", blogs })
})

app.get('/about', (req, res) => {
    res.render("about", { title: "About" })
})


app.get("/blogs/create", (req, res) => {
    res.render("create", { title: "Create a new blog" })
})


// 404 page
// use function will get fired for every request regardless of the url, only if the request reaches this point of the code
app.use((req, res) => {
    res.status(404).render("404", { title: "404" })
})


// listen for requests
app.listen(3000, () => {
    console.log("Listening at port 3000")
})