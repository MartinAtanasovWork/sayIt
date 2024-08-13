const mongoose = require("mongoose");

const schema = new mongoose.Schema({ 
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    avatar:{
        type:String
    }
},
{
    collation: {
        locale: "en",
        strength: 2
    }
});

const User = new mongoose.model("User",schema);

module.exports = {
    User
}