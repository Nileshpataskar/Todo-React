import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 100000),
      text: input,
      isComplete: false, // Initialize 'isComplete' to false
    });

    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            placeholder="Add a Todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a Todo"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add Todo</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
