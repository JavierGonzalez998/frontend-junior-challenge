import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "./components/TodoForm"
import "./App.css";

const App = () => {
  return (
    <div className="root">
      <div className="main">
        <TodoList />
        <TodoResults />
        <TodoForm />
      </div>
    </div>
  );
};

export default App;
