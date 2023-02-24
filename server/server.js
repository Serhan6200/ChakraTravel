const express = require("express")
require("dotenv").config({ path: __dirname + '/.env' });
const { dbConnection } = require("./config/db")

// Database connection function
dbConnection()

const app = express()

// Middlewares
app.use(express.json({
    verify: (req, res, buffer) => {
        req.rawBody = buffer.toString()
    }, limit: '5mb'
}))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})