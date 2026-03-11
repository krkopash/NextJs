"use client"

export default function TaskList({tasks,refresh}:any){
 const deleteTask = async(id:number)=>{
  await fetch("/todo/api/task",{
    method:"DELETE",
    body: JSON.stringify({id})
  })
  refresh()
 }
 return(
  <div>
   {tasks.map((task:any)=>(
    <div key={task.id} className="flex justify-between border">
     <p>{task.title}</p>
     <button onClick={()=>deleteTask(task.id)}> Delete
     </button>
    </div>
   ))}
  </div>
 )
}