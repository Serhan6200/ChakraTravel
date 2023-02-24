const mongoose = require("mongoose")

const dbConnection = async () => {
    try {
        mongoose.set('strictQuery', false)
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`Database connected: ${connect.connection.host}`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

module.exports = { dbConnection }