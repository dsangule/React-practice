import { useState } from "react";
import Todo from "../components/Todo";

let keyVal = 0;

export default function App() {

  const [todo, updateTodo] = useState([])

  function addTodo(){
    const todoVal = document.getElementById("todoAdder").value
    console.log(keyVal);
    updateTodo(() => {
      return [...todo, {
        name: todoVal,
        key: keyVal
      }]
    })
    keyVal++;
  }

  // function toRemove(){
  //   return key !== 1;
  // }

  function removeTodo(){
    // updateTodo(todo.filter(toRemove))
    console.log(0)
  }

  return(
    <>
      <div className="body">
        <div className="header">
          <h1>{keyVal} Tasks</h1>
          <h2>4 remain</h2>
        </div>

        <div>
          {todo.map((todoItem) => {
            return <Todo name={todoItem.name} key={todoItem.key} remove={removeTodo}/>
          })}
        </div>
  
        <div className="form">
          <input type="text" placeholder="Add Todo" id="todoAdder"/>
          <button onClick={addTodo}>Add</button>
        </div>
      </div>
    </>
  );
}