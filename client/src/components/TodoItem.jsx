import { useRef, useState } from "react";

const TodoItem = ({ todo, todoData, setTodoData }) => {
  const [edit, setEdit] = useState(false);
  const [localData, setLocalData] = useState(todo);
  const inputRef = useRef();
  const deleteTodo = async (id) => {
    try {
      const toDelete = await fetch(`http://localhost:5050/todos/${id}`, {
        method: "DELETE"
      });
      setTodoData(
        todoData.filter((todo) => {
          return todo.todo_id !== id;
        })
      );
    } catch (error) {
      console.log(error.message);
    }
  };
  const updateTodo = async (id) => {
    try {
      const body = { description: localData.description };
      const toUpdate = await fetch(`http://localhost:5050/todos/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      setTodoData(
        todoData.map((todo) => {
          console.log(todo);
          if (todo.todo_id == id) {
            console.log(todo);
            return localData;
          } else return todo;
        })
      );
      console.log(toUpdate);
      console.log(body);
    } catch (error) {
      console.log(error.message);
    }
  };
  //   console.log(localData);

  return (
    <div className="flex shadow-md py-2 px-4">
      {edit ? (
        <div className="w-full">
          <input
            value={localData.description}
            ref={inputRef}
            onChange={(e) => {
              setLocalData({ ...localData, description: e.target.value });
            }}
            className="w-full"
          ></input>
        </div>
      ) : (
        <div className="flex w-full">
          <div>{localData.description}</div>
        </div>
      )}
      <div className="[&>button]:w-24 w-[300px] flex justify-end">
        {edit ? (
          <button
            className="bg-yellow-500 "
            onClick={() => {
              console.log("save edit");
              updateTodo(todo.todo_id);
              setEdit(!edit);
            }}
          >
            SAVE EDIT
          </button>
        ) : null}
        <button
          className="bg-green-500"
          onClick={() => {
            if (localData.description != todo.description) {
              setLocalData(todo);
            }
            setEdit(!edit);
            setTimeout(() => {
              if (!edit) {
                inputRef.current.focus();
              }
            }, 50);
          }}
        >
          {edit ? "CANCEL" : "EDIT"}
        </button>
        <button
          className="bg-red-500"
          onClick={() => {
            deleteTodo(todo.todo_id);
          }}
        >
          DELETE
        </button>
      </div>
    </div>
  );
};
export default TodoItem;
