import "./TodoList.css";

interface TodoListProps {
  items: { id: string; text: string }[];
  removeTodo: (id: string) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id}>
          <p>{todo.text}</p>
          <button onClick={() => props.removeTodo(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
