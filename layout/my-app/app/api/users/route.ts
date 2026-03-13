import User from "@/models/User";
import dbConnect from "@/lib/db";
import { NextResponse, NextRequest } from "next/server";

export async function GET(){
    try{
        await dbConnect();
        const users = await User.find({}, { password: 0 }); 
        return NextResponse.json(users);

    }
    catch(error){
        return NextResponse.json({message: error});
    }
}

export async function POST(req:NextRequest){
    try{
        await dbConnect();
        const {email, password, imgUrl} = await req.json();
        if(!email || !password || !imgUrl){
            return NextResponse.json({message: "please enter all info"});
        }
        const newUser = await User.create({email, password, imgUrl});
        return NextResponse.json({message: newUser});

    }
    catch(error){
        return NextResponse.json({message: error});
    }
}