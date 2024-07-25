import { useState } from "react";
import InputForm from "./components/InputForm";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-[720px] mx-auto">
      <h1 className="bg-yellow-500 text-3xl h-12">PERN TODO LIST</h1>
      <main className=" ">
        <InputForm></InputForm>
        <TodoList></TodoList>
      </main>
    </div>
  );
}

export default App;
