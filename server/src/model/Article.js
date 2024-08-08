const mongoose = require("mongoose");

const schema = new mongoose.Schema({ 
    title:{
        type: String,
        required: true
    },   
    img:{
        type: String,       
    },
    content:{
        type:String,
        required:true
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

const Article = new mongoose.model("Article",schema);

module.exports = {
    Article
}