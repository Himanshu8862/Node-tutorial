const express = require("express");
const morgan = require("morgan")
const mongoose = require("mongoose")
require('dotenv').config();
const blogRouter = require("./routes/blogRoutes")

// instance of express app
const app = express();

// connect to mongoDB
// it is an async task, so it returns a promise
mongoose.connect(process.env.DB_URI)
    .then(() => {
        console.log("connected to DB");
        // listen for requests
        app.listen(3000, () => {
            console.log("Listening at port 3000")
        })
    })
    .catch((err) => {
        console.log(err);
    })

// const dbConnect = async() =>{
//     try{
//         await mongoose.connect(process.env.DB_URI);
//         console.log("DB has connected successfully");
//     } catch(error){
//         console.log(error.message);
//         process.exit(1);
//     }
// }
// dbConnect();

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


// ---static files ---
// setting up our static files, pass in here a folder name for example "public" and that means that if I create a folder called public then anything inside that folder is going to be made available as a static file to the front-end

app.use(express.static("public"))
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true })) // used to access the req object of the post method


// // mongoose sandbox routes
// app.get("/add-blog", (req, res) => {
//     const blog = new Blog({
//         title: "new blog 2",
//         snippet: "about my new blog",
//         body: "evem more about my new blog"
//     })
//     blog.save()
//         .then((result) => {
//             res.send(result);
//         }).catch((err) => {
//             console.log(err);
//         })
// })

// app.get("/all-blogs", (req, res) => {
//     Blog.find()
//         .then((value) => {
//             res.send(value);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })

// app.get("/single-blog", (req, res) => {
//     Blog.findById("6486fed9bac3695f4ec292b7")
//         .then((value) => {
//             res.send(value);
//         })
//         .catch((err) => {
//             console.log(err);
//         })
// })


// respond with "home page" when a GET request is made to the homepage
app.get('/', (req, res) => {
    // const blogs = [
    //     { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    //     { title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur' },
    // ];
    // res.render("index", { title: "Home", blogs })
    res.redirect("/blogs")
})

app.get('/about', (req, res) => {
    res.render("about", { title: "About" })
})


// blog routes
app.use("/blogs",blogRouter);

// 404 page
// use function will get fired for every request regardless of the url, only if the request reaches this point of the code
app.use((req, res) => {
    res.status(404).render("404", { title: "404" })
})


