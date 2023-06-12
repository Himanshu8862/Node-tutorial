const express = require("express");
const router = express.Router();

const {
    blogIndexCont,
    blogDetailsCont,
    blogCreateCont,
    blogDeleteCont,
    blogCreatePostCont
} = require("../controllers/blogController")

router.get("/", blogIndexCont)

router.get("/create", blogCreateCont)

router.post("/", blogCreatePostCont)

router.get("/:id", blogDetailsCont)

router.delete("/:id", blogDeleteCont);

module.exports = router;