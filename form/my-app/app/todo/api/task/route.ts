'use server'
import { NextResponse } from "next/server"
import { tasks } from "@/data/tasks"

export async function GET() {
  return NextResponse.json(tasks)
}
export async function POST(req: Request) {
  const body = await req.json()
  const newTask = {
    id: Date.now(),
    title: body.title,
    completed: false
  }
  tasks.push(newTask)
  return NextResponse.json(newTask)
}
export async function DELETE(req: Request) {
  const {id } = await req.json()
  const index = tasks.findIndex(task => task.id === id)
  if(index!== -1){
    tasks.splice(index,1)
  }
  return NextResponse.json({message:"deleted"})
}