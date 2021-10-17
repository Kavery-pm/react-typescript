import React from "react";

import Todos from "./models/Todo";

import Todo from "./components/Todo";
import NewTodo from "./components/NewTodo";

function App() {
  const todos = [
    new Todos("Learn js"),
    new Todos("learn ts"),
    new Todos("learn redux"),
  ];
  const addTodoHandler = (todo:string)=>{
console.log(todo);
  }
  return (
    <div>
      <Todo item={todos}></Todo>
      <NewTodo onAddTodo={addTodoHandler}></NewTodo>
    </div>
  );
}

export default App;
