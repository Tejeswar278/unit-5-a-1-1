import "./Todo.css"
export const TodoItem = ({todo , handleStatus})=>{
    return (
        <div className="todoitem">
            {/* <div>id: {todo.id}</div> */}
           <div>
           {todo.title} - {todo.status ? "done" : "not done"} 
           </div>
            <button onClick={()=>{handleStatus(todo.id)}}>Toggle</button>
        </div>
    )
}