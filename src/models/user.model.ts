import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: [true, "please provide the pass word"],
        unique:true,
        trim:true
    },
    email: {
        type: String,
        required:[true, "please provide the email"],
        unique: true,
        trim: true,
    },
    password:{
        type: String,
        required: [true, "please provide the password"],
        minlength: [8, "password must be at least 8 characters long"],
        trim: true,
    },
    isVerified:{
        type: Boolean,
        default: false,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    forgotPasswordToken:{
        type: String,
    },
    forgotPasswordTokenExpiry:{
        type: Date,
    },
    verifyToken:{
        type: String,
    },
    verifyTokenExpiry:{
        type: Date,
    },


 });
 const user = mongoose.models.users || mongoose.model("users",userSchema);
 export default user;
