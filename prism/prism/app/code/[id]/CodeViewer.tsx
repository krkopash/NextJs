// "use client"

// import { useEffect,useState } from "react"
// import Prism from 'prismjs'

// export default function CodeViewer({id}: {id:string}){
//     const [code,setCode]=useState("");
//     useEffect(()=>{
//         fetch(`/api?id=${id}`).then(res=>res.json()).then(data => {
//   console.log(data);
//   setCode(data.code);
// })}, [id]);

//     useEffect(()=>{
//         Prism.highlightAll();
//     },[code]);

//     return(
//         <main>
//             <pre className="line-numbers">
//                 <code className="language-java">{code}</code>
//             </pre>
//         </main>
//     )
// }


"use client"
import { useEffect, useState } from "react"
import Prism from "prismjs"
export default function CodeViewer({ id }: { id: string }) {
  const [code, setCode] = useState("")

  useEffect(() => {
    fetch(`/api?id=${id}`).then(res => res.json()).then(data => {
        console.log("API:", data)
        setCode(data.code)})
  }, [id])

  useEffect(() => {
    Prism.highlightAll()
  }, [code])

  return (
    <main>
      <pre className="line-numbers">
        <code className="language-java">{code}</code>
      </pre>
    </main>
  )
}