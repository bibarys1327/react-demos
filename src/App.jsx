import React from "react";
import { useRef } from "react";

const App = () => {
  const inputElement = useRef(null);

  const focusInput = () => {
    inputElement.current.focus();
    inputElement.current.value = "John Doe";
  };
  return (
    <div>
      <input type="text" ref={inputElement} />
      <button onClick={() => focusInput()}>Focus</button>
    </div>
  );
};

export default App;
