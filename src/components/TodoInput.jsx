import { useState } from "react"
import "./Todo.css"
export const TodoInput = ({getdata}) => {
    const [text,settext] = useState("");
    return (
        <div className="todoinput">
            <input onChange={(e)=>{
                settext(e.target.value)
            }} type="text" placeholder="Write Something"/>
            <button onClick={()=>{
                getdata(text)
            }}
            >Add todo</button>
            
        </div>
    )
}