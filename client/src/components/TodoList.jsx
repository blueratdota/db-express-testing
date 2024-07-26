import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todoData, setTodoData }) => {
  return (
    <div className="flex flex-col gap-4">
      {todoData.map((todo) => {
        return (
          <TodoItem
            key={todo.todo_id}
            todo={todo}
            todoData={todoData}
            setTodoData={setTodoData}
          ></TodoItem>
        );
      })}
    </div>
  );
};

export default TodoList;
