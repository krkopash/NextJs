

// 'use client'                                                                                                             

// import { useEffect, useState } from 'react'
// import Prism from 'prismjs'

// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/components/prism-jsx'
// import 'prismjs/components/prism-python'
// import 'prismjs/components/prism-java'
// import 'prismjs/components/prism-tsx'
// import 'prismjs/plugins/line-numbers/prism-line-numbers'
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

// export default function Page({markdownContent}:{markdownContent: any}) {
//   const [code, setCode] = useState("")
//   const [jsx, setJsx]=useState("");
//   const [tsx, setTsx]=useState("");
//   const [java,setJava]=useState("");
//   const [python,setPython]=useState("");
  
  

//   const handleShare = async () => {
//   const res = await fetch('/api', {
//     method: 'POST',
//     headers:{
//        'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ code }),
//   })

//   const data = await res.json()
//   const url = `${window.location.origin}/code/${data.id}`
//   navigator.clipboard.writeText(url)
//   alert("Link copied")
// }


//   const handleCopy = async () => {
//   try {
//     await navigator.clipboard.writeText(code)
//     alert("Copied")
//   } catch (err) {
//     alert("Failed to copy")
//     console.error(err)
//   }
// }
//   useEffect(() => {
//     Prism.highlightAll()
//   }, [jsx,java,python,tsx]) 
// const codeSample =`<div className="example">
// test</div>`
//   return (
//     <main><p>jsx</p>
//       <textarea value={jsx} onChange={(e) => setJsx(e.target.value)} placeholder="Write code here..."
//         style={{ width: '100%', height: '150px' }}/>

//       <br />
// <button onClick={handleCopy} className='mr-10'>copy</button>
// <button onClick={handleShare}>
//   Share
// </button>

//       <pre className="line-numbers language-jsx">
//         <code className="language-jsx">
//           {jsx}
//         </code>
//       </pre>

//       <p>tsx</p>
//          <textarea value={tsx} onChange={(e) => setTsx(e.target.value)} placeholder="Write code here..."
//         style={{ width: '100%', height: '150px' }}/>

//       <br />
// <button onClick={handleCopy} className='mr-10'>copy</button>
// <button onClick={handleShare}>
//   Share
// </button>

//       <pre className='line-numbers language-tsx'>
//         <code className='language-tsx'>
//           {tsx}
//         </code>
//       </pre>

//       <p>java</p>
//       <textarea value={java} onChange={(e) => setJava(e.target.value)} placeholder="Write code here..."
//         style={{ width: '100%', height: '150px' }}/>

//       <br />
// <button onClick={handleCopy} className='mr-10'>copy</button>
// <button onClick={handleShare}>
//   Share
// </button>

//       <pre className="line-numbers language-jsx">
//         <code className="language-jsx">
//           {java}
//         </code>
//       </pre>

//       <p>python</p>
//       <textarea value={python} onChange={(e) => setPython(e.target.value)} placeholder="Write code here..."
//         style={{ width: '100%', height: '150px' }}/>

//       <br />
// <button onClick={handleCopy} className='mr-10'>copy</button>
// <button onClick={handleShare}>
//   Share
// </button>

//       <pre className="line-numbers language-jsx">
//         <code className="language-jsx">
//           {python}
//         </code>
//       </pre>
      


//        <pre className="line-numbers language-jsx">
//          <code className="language-jsx">{codeSample}</code>
//     </pre>
//     <button onClick={() => navigator.clipboard.writeText(codeSample)}>
//         Copy
//       </button>
    
//     </main>
//   )
// }

