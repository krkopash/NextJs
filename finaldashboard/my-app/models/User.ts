import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, required: [true, "Email is required"],
    unique: true,
  },
  password: { type: String,required: [true, "Password is required"],
  },
  imageUrl: {type: String, required: [true, "Image URL is required"], },
});

const User = models.User || model("User", UserSchema);
export default User;
