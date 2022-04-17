import { useState} from "react"
import {TodoInput} from "./TodoInput"
import {TodoItem} from "./TodoItem"
import {nanoid} from "nanoid"
import "./Todo.css"
function Todo(){
    const [todoList, settodoList] = useState([]);
    const getdata = (todo) => {
        const payload = {
            title : todo,
            status : false,
            id : nanoid(5),
        };
        settodoList([...todoList,payload])
    };
    const handleStatus = (id) =>{
        console.log("id", id)
        const newarr = todoList.map(e => {
            if(e.id ===  id){
                return {
                    ...e,
                    status: !e.status,
                }
            }
            return e;
        })
        settodoList(newarr)
        // settodo([
        //     todoList.map((e) => (e.id ===  id ? {...e, status: !e.status} : e)),
        // ])
    }
    return <div className="todo">
        
        <div>
        {todoList.map((e) =>(
           <TodoItem handleStatus={handleStatus} todo={e}/>
        ))}
        </div>
        <div>
        <TodoInput getdata={getdata}/>
        </div>
    </div>
}
export {Todo}