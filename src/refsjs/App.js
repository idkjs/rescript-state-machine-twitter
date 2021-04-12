import React, { useRef } from "react";
import NameInput from "./NameInput";

const App = () => {
  const myRef = useRef(null);

  const handleClick = () => {
    myRef.current.focus()
  }
  return (
    <div>
      <NameInput ref={myRef} />
      <button onClick={handleClick}>
          Click here to focus Input
        </button>
    </div>
  );
}

export default App;
