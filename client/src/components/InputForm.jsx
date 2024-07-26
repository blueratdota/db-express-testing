import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";
import { useState } from "react";
const InputForm = ({ todoData, setTodoData }) => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (description) {
      try {
        const body = { description };
        const response = await fetch("http://localhost:5050/todos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
        const data = await response.json();
        console.log(data);
        setTodoData([...todoData, data]);
      } catch (error) {}
      setDescription("");
    } else {
      alert("Pls input description");
    }
  };
  return (
    <>
      <form action="post" className="flex" onSubmit={onSubmitForm}>
        <input
          type="text"
          placeholder="Add todo task here"
          className="w-full px-5"
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <Button variant={"outline"} type="submit">
          ADD TO DO
        </Button>
      </form>
    </>
  );
};
export default InputForm;
