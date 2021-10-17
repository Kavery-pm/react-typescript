import React from "react";
import Todos from "../models/Todo";
const Todo: React.FC<{ item: Todos[] }> = (props) => {
  return (
    <ul>
      {props.item.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
export default Todo;
