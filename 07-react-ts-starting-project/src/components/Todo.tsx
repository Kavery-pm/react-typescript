import React from "react";
import Todos from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
const Todo: React.FC<{ item: Todos[]; onRemoveTodos: (id:string)=>void}> = (props) => {
  return (
    <ul className={classes.todos} >
      {props.item.map((item) => (
        <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveTodos.bind(null,item.id)}></TodoItem>
      ))}
    </ul>
  );
};
export default Todo;
