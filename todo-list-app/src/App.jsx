import { useState } from "react";
import { CirclePicker } from "react-color";
import { Button, Input } from "antd";
import Todo from "../components/Todo";
import "./App.css"

let keyVal = 0;
let todoCount = 0;
let taskCompleted = 0;

export default function App() {

  const [todo, setTodo] = useState([])
  const [blockPickerColor, setBlockPickerColor] = useState("#37d67a");

  function addTodo(){
    const todoVal = document.getElementById("todoAdder").value
    console.log(keyVal);
    setTodo(() => {
      todoCount++;
      return [...todo, {
        name: todoVal,
        check: false,
        color: blockPickerColor,
        key: keyVal++
      }]
    })
  }

  function removeTodo(x){
    todoCount--;
    setTodo(todo.filter((todoItem) => {
      if(todoItem.key === x && todoItem.check === true){
        taskCompleted--;
      }
      return todoItem.key !== x;
    }))
  }

  function checkTodo(x){
      const newState = todo.map(todoItem => {
        if (todoItem.key === x && todoItem.check === false) {
          taskCompleted++
          return {...todoItem, check: true};
        }
        else if(todoItem.key === x && todoItem.check === true){
          taskCompleted--;
          return {...todoItem, check: false}
        }
        return todoItem;
      });
  
      setTodo(newState);
  }

  return(
    <center>
      <div className="body">
        <div className="header">
          <h1>{todoCount} Tasks</h1>
          <h2>{todoCount-taskCompleted} remain</h2>
        </div>

        <div className="todoList">
          {todo.map((todoItem) => {
            return <Todo 
              name={todoItem.name} 
              key={todoItem.key} 
              id={todoItem.key} 
              color={todoItem.color}
              remove={removeTodo} 
              checked={checkTodo}
            />
          })}
        </div>
  
        
        <div className="form">
          <Input type="text" placeholder="Add Todo" id="todoAdder"/>
          <Button onClick={addTodo}>Add</Button>
          <br /><br />
          <CirclePicker
            className="colorPicker"
            color={blockPickerColor}
            onChange={(color) => {
              setBlockPickerColor(color.hex);
            }}
          />
        </div>
        
      </div>
    </center>
  );
}