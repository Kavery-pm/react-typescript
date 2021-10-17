import React from "react";
import { createTextSpanFromBounds } from "typescript";
import Todos from './models/Todo';

import Todo from "./components/Todo";


function App() {
  const todos = [new Todos('Learn js'), new Todos('learn ts'), new Todos('learn redux')];
  return (
    <div>
      <Todo item={todos}></Todo>
    </div>
  );
}

export default App;
