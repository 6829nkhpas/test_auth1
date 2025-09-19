import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

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
    }

 });
