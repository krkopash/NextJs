import Link from "next/link";

export default function NavBar(){
    return(
        <nav style={{backgroundColor:"#dadff5", padding:"10px", textAlign:"center", margin:"10px"}}>
      <Link href="/dashboard/login">Home</Link> |{" "}
      {/* //prefetching using link */}
      <a href="/dashboard">Dashboard</a>
    </nav>
    )
}