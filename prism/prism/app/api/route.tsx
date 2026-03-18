import { NextRequest } from "next/server";

let store:any={}
export async function POST(req:Request){
    const body =await req.json();
    console.log(body);

    const id=Math.random().toString(20);
    store[id]=body.code;
    return Response.json({id});

}

export async function GET(req:NextRequest){
    const {searchParams} = new URL(req.url);
    const id= searchParams.get("id");
    if(!id){
        return Response.json({code: ""})
    }
    return Response.json({code: store[id]})
}