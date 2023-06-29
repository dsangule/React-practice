import "./Todo.css"

export default function Todo(props){

    return(
        <div className="todo--card">
            <input type="checkbox" className="todo--checkbox"/>
            <h4 className="todo--name">{props.name}</h4>
            <button className="todo--delete" onClick={props.remove}>Delete</button>
        </div>
    )
}