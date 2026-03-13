import { ReactNode } from "react";

export default function adminLayout({children}: {children:ReactNode;}){
    return(
        <div style={{textAlign:"center"}}>
            <header>header of admin panel</header>
            {children}
            <footer>footer for admin panel</footer>
        </div>
    )
}