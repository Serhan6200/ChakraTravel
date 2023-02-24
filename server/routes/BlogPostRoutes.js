const express = require("express");
const {
  getAllPost,
  getPostbyID,
  getPostbyCategory,
  createPost,
  updatePost,
  deletePost,
} = require("../controller/BlogPostController");

const routes = express.Router();

routes.get("/posts/", getAllPost);
routes.get("/post/:id", getPostbyID);
routes.get("/post/category/:id", getPostbyCategory);
routes.post("/post", createPost);
routes.put("/post", updatePost);
routes.delete("/post/:id", deletePost);

module.exports = routes;
