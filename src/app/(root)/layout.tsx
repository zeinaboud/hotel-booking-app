import {ReactNode} from 'react'
import "../globals.css";
const ReactLayout = ({ children }:
    Readonly<{ children: ReactNode }>) => {
    return (
        <div>
            {children}
            
        </div>
    )
}

export default ReactLayout