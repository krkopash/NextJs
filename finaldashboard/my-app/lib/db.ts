import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://krishna:krishna2121@cluster0.xsxwwrj.mongodb.net/nextDashboard";
if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  console.log("Connecting to DB...");
  const opts = {
    bufferCommands: false,
  };
  await mongoose.connect(MONGODB_URI, opts);
  console.log("DB connected successfully");
}

export default dbConnect;