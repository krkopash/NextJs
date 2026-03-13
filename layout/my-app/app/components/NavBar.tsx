import Link from "next/link";

// export default function NavBar(){
//     return(
//         <nav style={{backgroundColor:"#dadff5", padding:"10px", textAlign:"center", margin:"10px"}}>
//       <Link href="/dashboard/login">Home</Link> |{" "}
//       {/* //prefetching using link */}
//       <a href="/dashboard">Dashboard</a>
//     </nav>
//     )
// }


export default function NavBaar() {
  return (
    <nav className="bg-[#dadff5] text-black p-4 flex justify-between items-center font-black">
      <div className="text-2xl font-black italic text-blue-600">Dashboard</div>
      <div className="space-x-6 text-sm">
        <Link href="/dashboard/user" className="hover:text-blue-500 transition-colors">USER DIRECTORY</Link>
        <Link href="/img" className="hover:text-blue-500 transition-colors">GALLERY</Link>
        <Link href="/" className="bg-blue-600 px-4 py-2 rounded text-white hover:bg-white hover:text-black transition-all">EXIT</Link>
      </div>
    </nav>
  );
}