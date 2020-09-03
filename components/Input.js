import React, { useState, useRef } from "react";

const Input = props => {
  const [text, setText] = useState("");
  const inputEl = useRef(null);

  const handleChange = e => {
    setText(e.target.value);
  };

  return (
    <React.Fragment>
      <input type="text" ref={inputEl} onChange={handleChange} />
      <button onClick={() => props.handleAdd(text, inputEl)}>Agregar</button>
    </React.Fragment>
  );
};

export default Input;
