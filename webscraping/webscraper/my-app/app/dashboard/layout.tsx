import { ReactNode } from "react";

export default function dashlayout({children}: {children:ReactNode}){
    return(
        <div>
            <div>dashboard layout</div>
        {children}
        </div>   
    )
}