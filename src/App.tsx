import React, { useState } from "react";
import { nanoid } from "nanoid";

import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: "t1", text: "Finish the course" },
  ]);

  const todoAddHandler = (text: string) => {
    setTodos((prevState) => [...prevState, { id: nanoid(), text }]);
  };

  const removeTodo = (todoId: string) => {
    setTodos((prevState) => prevState.filter((item) => item.id !== todoId));
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList removeTodo={removeTodo} items={todos} />
    </div>
  );
};

export default App;
