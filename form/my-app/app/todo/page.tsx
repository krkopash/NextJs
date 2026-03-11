"use client"
import { useEffect,useState } from "react"
import TaskForm from "@/components/TaskForm"
import TaskList from "@/components/TaskList"

export default function Home(){
    const [tasks,setTasks]=useState([]);
    const loadTasks = async()=>{
        const res= await fetch("/todo/api/task");
        const data = await res.json();
        setTasks(data)
    }
    useEffect(()=>{
        loadTasks()
    },[])
    return(     
        <div>
            <h1>task manager</h1>
              <TaskForm refresh={loadTasks}/>
              <TaskList tasks={tasks} refresh={loadTasks}/>
        </div>
    )
}