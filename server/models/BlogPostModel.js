const mongoose = require("mongoose")
const blogPostSchema = new mongoose.Schema({
    title: { type: String, require: true },
    contentOne: { type: String, require: true },
    contentTwo: { type: String, require: true },
    image: { type: String, require: true },
    author: { type: String, require: true },
    category: { type: String, require: true },
}, { timestamp: true })

const BlogPost = mongoose.model("BlogPost", blogPostSchema)

module.exports = { BlogPost }
