import { ReactNode } from "react";

export default function adminLayout({children}: {children:ReactNode;}){
    return(
        <div>
            <header>header of admin panel</header>
            {children}
            <footer>footer for admin panel</footer>
        </div>
    )
}