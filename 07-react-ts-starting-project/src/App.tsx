import React, { useState } from "react";

import Todos from "./models/Todo";

import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";

function App() {
  // const todos = [
  //   new Todos("Learn js"),
  //   new Todos("learn ts"),
  //   new Todos("learn redux"),
  // ];
const [todos, settodos] = useState<Todos[]>([]);
  const addTodoHandler = (todo:string)=>{
    const newTodo = new Todos(todo);
console.log(todo);
settodos(prevState => prevState.concat(newTodo));
  }
  return (
    <div>
      <Todo item={todos}></Todo>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
    </div>
  );
}

export default App;
