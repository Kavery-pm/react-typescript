import React from "react";
import Todos from "../models/Todo";
import TodoItem from "./TodoItem";
import classes from './Todos.module.css';
const Todo: React.FC<{ item: Todos[] }> = (props) => {
  return (
    <ul className={classes.todos} >
      {props.item.map((item) => (
        <TodoItem key={item.id} text={item.text}></TodoItem>
      ))}
    </ul>
  );
};
export default Todo;
