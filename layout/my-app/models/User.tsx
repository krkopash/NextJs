import mongoose from "mongoose";
import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
    },
    password:{
        type:String,
        required: [true, 'password is required']
    },
    imgUrl:{
        type:String
    }
})


const User = models.User || model("User", userSchema);
export default User;