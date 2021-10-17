import React from "react";

import "./App.css";
import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <Todo item={['Learn js', 'learn ts', 'learn react', 'learn redux']}></Todo>
    </div>
  );
}

export default App;
