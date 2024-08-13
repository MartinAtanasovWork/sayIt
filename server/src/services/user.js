const { User } = require("../model/User");
const bcrypt = require("bcrypt");
const { invalidateToken, createToken } = require("./token");

async function register(email, password) {
    let user = await User.findOne({ email });

    if (user) {
        return { error: "This email is already in use" };
    }

    let newUser = new User({
        email,
        password: await bcrypt.hash(password, 10),
        avatar:"/Avatars/avatar1.png"
    });

    await newUser.save();

    let token = createToken(newUser);

    let data = {
        user: newUser,
        "Auth-Token": token
    }

    return data;
}

async function login(email, password) {
    let user = await User.findOne({ email });

    if (!user) {
        return { error: "User doesn't exist" };
    }

    if (!(await bcrypt.compare(password, user.password))) {
        return { error: "Email and password don't match" };
    }

    let token = createToken(user);

    let data = {
        user,
        "Auth-Token": token
    }

    return data;
}

async function getUserById(id) {
    let user = await User.findOne({ _id: id })

    return user;
}

async function updateUser(id, userData) {
    let user = await User.findOneAndUpdate({_id:id},userData);
    let updateUser = await User.findOne({_id:id});

    let token = createToken(updateUser);

    let data = {
        user:updateUser,
        "Auth-Token": token
    }

    return data;
}

function logout(token) {
    invalidateToken(token);
}

module.exports = {
    register,
    login,
    logout,
    getUserById,
    updateUser
}