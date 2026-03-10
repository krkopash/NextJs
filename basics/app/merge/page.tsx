import Link from "next/link";

export default function merge(){
    return(

        <div>
            <h1> home - page</h1><br/>
            <Link href="/first"><button>
                go to first page</button></Link><br/>

            <Link href="/second">
            <button>second page</button>
            </Link>
        </div>
    )
}