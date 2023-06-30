import "./Todo.css";
import { Button } from "antd";

export default function Todo(props){

    function remove(){
        return props.remove(props.id)
    }

    function check(){
        return props.checked(props.id)
    }

    return(
        <div className="todo--card" style={{backgroundColor: props.color}}>
            <input type="checkbox" className="todo--checkbox" onChange={check}/>
            <h4 className="todo--name">{props.name}</h4>
            <Button className="todo--delete" onClick={remove}>Delete</Button>
        </div>
    )
}