const mongoose = require('mongoose')

const connectDB = async (mongoURI) => {
    await mongoose.connect(mongoURI)
}
module.exports = connectDB;