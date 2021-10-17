import React from "react";
const Todo: React.FC<{ item: string[] }> = (props) => {
  return (
    <ul>
      {props.item.map((item) => (
        <li>{item}</li>
      ))}
    </ul>
  );
};
export default Todo;
