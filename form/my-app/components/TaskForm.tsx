"use client"
import { useState } from "react"
export default function TaskForm({refresh}:any){
 const [title,setTitle] = useState("")
 const addTask = async () => {
  if(!title) return
  await fetch("/todo/api/task",{
    method:"POST",
    body: JSON.stringify({title})
  })
  refresh()
 }

 return(    
  <div className="flex">
   <input className="border" placeholder="Enter task" value={title} onChange={(e)=>setTitle(e.target.value)}/>
   <button onClick={addTask} className="bg-blue-500 text-white"> Add
   </button>
  </div>
 )
}