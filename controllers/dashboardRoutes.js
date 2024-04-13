const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");

// Get posts by user when user logs in
router.get("/", withAuth, (req, res) => {
    Post.findAll({
        where: { userId: req.session.userId }
    })
})