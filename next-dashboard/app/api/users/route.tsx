import { NextRequest, NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/models/User";

export async function GET() {
  try {
    console.log("Connecting to DB...");
    await dbConnect();
    console.log("DB connected, fetching users...");
    const users = await User.find({}, { password: 0 }); 
    console.log("Users fetched:", users.length);
    return NextResponse.json(users);
  } catch (error: any) {
    console.error("Error in GET /api/users:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    const { email, password, imageUrl } = await req.json();
    const newUser = await User.create({ email, password, imageUrl });
    return NextResponse.json(newUser);
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
