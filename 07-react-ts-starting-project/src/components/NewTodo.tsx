import React, { useRef } from "react";
import classes from './NewTodo.module.css';
const NewTodo:React.FC<{onAddTodo: (text:string)=>void}> = (props) => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const todoText = todoTextInput.current!.value;
    if (todoText.trim().length === 0) {
      return;
    }
   props.onAddTodo(todoText);
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo</label>
      <input id="todo" type="text" ref={todoTextInput}></input>
      <button>Add a todo</button>
    </form>
  );
};
export default NewTodo;
