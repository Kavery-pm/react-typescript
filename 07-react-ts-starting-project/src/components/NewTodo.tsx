import React from "react";

const NewTodo = () => {
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="todo">Todo</label>
      <input id="todo" type="text"></input>
      <button>Add a todo</button>
    </form>
  );
};
export default NewTodo;
