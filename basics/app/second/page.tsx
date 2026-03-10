import Link from "next/link"

export default function first(){
    return(<div><h1>second - page</h1><br/>
    <Link href="/merge"><button>go to home page</button></Link><br/>
    <Link href="/first"><button> go to first page</button></Link>
    </div>)
}