import { useEffect, useState } from "react";

const TodoList = () => {
  const [localTodo, setLocalTodo] = useState([]);
  useEffect(() => {
    allTodo();
  }, []);

  const allTodo = async () => {
    const response = await fetch("http://localhost:5050/todos");
    const data = await response.json();
    console.log(data);
    setLocalTodo(data);
  };
  const deleteTodo = async (id) => {
    try {
      const toDelete = await fetch(`http://localhost:5050/todos/${id}`, {
        method: "DELETE"
      });
      console.log(toDelete);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {localTodo.map((todo) => {
        return (
          <div key={todo.todo_id} className="flex">
            <div>{todo.todo_id}</div>
            <div>{todo.description}</div>
            <button className="bg-green-500 px-4">edit</button>
            <button
              className="bg-red-500 px-4"
              onClick={() => {
                deleteTodo(todo.todo_id);
              }}
            >
              delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
