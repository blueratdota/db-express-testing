import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button
} from "@chakra-ui/react";
import { useState } from "react";
const InputForm = ({}) => {
  const [description, setDescription] = useState("");
  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:5050/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);
      window.location = "/";
    } catch (error) {}
    setDescription("");
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
