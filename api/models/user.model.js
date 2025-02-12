import mongoose from "mongoose";

const userShema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        unique: true,

    },

    email: {
        type: String,
        require: true,
        unique: true,
    },

    password: {
        type: String,
        require: true
    },

    profilePicture: {
        type: String,
        default: "https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE= "
    },

}, {timestamps:true});

const User = mongoose.model('User', userShema);

export default User;