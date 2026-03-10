import Link from "next/link"

export default function second(){
    return (<div><h1> first - page</h1><br/>
        <Link href="/merge"><button>go to home page</button></Link><br/>
        <Link href="/second"><button>go to second page</button></Link>
    </div>)
}