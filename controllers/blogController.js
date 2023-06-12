const Blog = require("../models/blog")

const blogIndexCont = (req, res) => {
    Blog.find().sort({ "createdAt": -1 })
        .then((result) => {
            res.render("blogs/index", { title: "All blogs", blogs: result })
        })
        .catch((err) => {
            console.log(err);
        })
}

const blogCreatePostCont = (req, res) => {
    // console.log(req.body)
    const blog = new Blog(req.body)
    blog.save()
        .then((result) => {
            res.redirect("/blogs");
        }).catch((err) => {
            console.log(err);
        })
}

const blogDetailsCont = (req, res) => {
    Blog.findById(req.params.id)
        .then((result) => {
            res.render("blogs/details", { blog: result, title: "Blog details " })
        })
        .catch((err) => {
            res.status(404).render("404", { title: "Blog not found" })
        })
}

const blogCreateCont = (req, res) => {
    res.render("blogs/create", { title: "Create a new blog" })
}

const blogDeleteCont = (req, res) => {
    const id = req.params.id;

    Blog.findByIdAndDelete(id)
        .then((result) => {
            res.json({ redirectTo: "/blogs" }) // have to return a json object to the frontend
        })
        .catch((err) => {
            console.log(err);
        })
}

module.exports = {
    blogIndexCont,
    blogDetailsCont,
    blogCreateCont,
    blogDeleteCont,
    blogCreatePostCont
}