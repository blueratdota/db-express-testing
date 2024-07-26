import { useEffect, useState } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [todoData, setTodoData] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("http://localhost:5050/todos", {
        mode: "cors"
      });
      const dbData = await response.json();
      if (dbData === null) {
        console.log("dbData is null");
        setTodoData([]);
        return;
      }
      // console.log(dbData);
      if (JSON.stringify(todoData) == JSON.stringify(dbData)) return;
      console.log("not the same todoData therefore i will fetch data");
      setTodoData(dbData);
    })();
  }, [todoData]);
  // console.log(todoData);

  return (
    <div className="max-w-[1024px] mx-auto">
      <h1 className="bg-yellow-500 text-3xl h-12">PERN TODO LIST</h1>
      <main className=" ">
        <InputForm todoData={todoData} setTodoData={setTodoData}></InputForm>
        <TodoList todoData={todoData} setTodoData={setTodoData}></TodoList>
      </main>
      <div>
        {todoData.map((todo) => {
          return (
            <div key={todo.todo_id}>
              {todo.todo_id}-{todo.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
