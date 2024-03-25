import { useState } from "react"

const user = ({name})=>{
    const [count,setcount] = useState(0)
    const [count1,setcount1] =useState()
    
    return(
        <div className="user">
            <h1>Count={count}</h1>
            <button onClick={()=>(setcount())}>Click Here</button>
            <h1>Count={count1}</h1>
            <h2>Name:{name}</h2>
            <h3>Location:Dehradun</h3>
            <h4>Contact:@avanishpal92</h4>
        </div>
    )
}
export default user