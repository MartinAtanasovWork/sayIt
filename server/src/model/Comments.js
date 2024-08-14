const mongoose = require("mongoose");

const schema = new mongoose.Schema({ 
    content:{
        type: String,
        required: true
    },
    author:{
        type: mongoose.Types.ObjectId,
        required: true
    }    
},
{
    collation: {
        locale: "en",
        strength: 2
    }
});

const Comments = new mongoose.model("Comments",schema);

module.exports = {
    Comments
}