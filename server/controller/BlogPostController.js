const express = require("express");
const { BlogPost } = require("../models/BlogPostModel");

const getAllPost = async (req, res) => {
  const data = { title: "Get all blog posts" };
  res.json(data);
};

const getPostbyID = async (req, res) => {
  const data = { title: "Get post by ID" };
  res.json(data);
};

const getPostbyCategory = async (req, res) => {
  const data = { title: "Get post by Category" };
  res.json(data);
};

const createPost = async (req, res) => {
  const data = { title: "Create post" };
  res.json(data);
};

const updatePost = async (req, res) => {
  const data = { title: "Update post" };
  res.json(data);
};

const deletePost = async (req, res) => {
  const data = { title: "Delete post" };
  res.json(data);
};

module.exports = { getAllPost, getPostbyID, getPostbyCategory, createPost, updatePost, deletePost };
