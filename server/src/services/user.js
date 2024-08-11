const { User } = require("../model/User");
const bcrypt = require("bcrypt");
const { invalidateToken } = require("./token");

async function register(email,password){
    let user = await User.findOne({email});

    if(user){
        return {error:"This email is already in use"};
    }

    let newUser = new User({        
        email,
        password: await bcrypt.hash(password,10)
    });
   
    await newUser.save();

    return newUser;
}

async function login(email,password){
    let user = await User.findOne({email});
    
    if(!user){
        return {error:"User doesn't exist"};
    }
      
    if(! (await bcrypt.compare(password,user.password))){
        return {error:"Email and password don't match"};
    }
   
    return user;
}

function logout(token){
    invalidateToken(token);
}

module.exports = {
    register,
    login,
    logout    
}