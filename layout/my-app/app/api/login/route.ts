import dbConnect from "@/lib/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest){
    try{
        await dbConnect();
        const {email, password}= await req.json();
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({message: "user not exist please create user from admin"});
        }
        if(user.password != password){
            return NextResponse.json({message: "invalid password"});
        }
        return NextResponse.json({ message: "login successful", user: {email: user.email}});
    }
    catch(error){
        return NextResponse.json({message: error});
    }
}