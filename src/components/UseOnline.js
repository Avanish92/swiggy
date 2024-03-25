import { useEffect, useState } from "react"

const UseOnline = ()=>{
    const [onLinestatus,setonLinestatus] = useState(true)
    
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setonLinestatus(false);
        })
        window.addEventListener("online",()=>{
            setonLinestatus(true);
        })
    },[])

    return onLinestatus
}
export default UseOnline;