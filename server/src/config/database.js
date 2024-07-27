const mongoose = require("mongoose");
require("../model/User");

async function databaseConfig() {
    const connectionString = "mongodb://127.0.0.1:27017/sayIt";  

    await mongoose.connect(connectionString,{});   
}

module.exports = {
    databaseConfig
}