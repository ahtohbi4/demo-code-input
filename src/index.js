import React, { useState } from "react";
import ReactDOM from "react-dom";

import InputCode from "./InputCode";

import "./styles.css";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <h1>demo-code-input</h1>

      <InputCode
        value={value}
        onChange={({ target: { value } }) => setValue(value)}
      />

      <div>
        <InputCode disabled length={7} value={"1546654"} />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
