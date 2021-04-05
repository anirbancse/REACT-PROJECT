import logo from "./logo.svg";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const [value, setValue] = useState(0);

  const inputOne = useRef();
  const inputTwo = useRef();

  const handleSubmit = () => {
    console.log("sadas");
    console.log(inputOne.current);
    inputOne.current.style.width = "400px";
  };
  const handleSubmitDollar = () => {
    console.log(inputTwo.current);
  };

  return (
    <>
      <h1>Hi Anirban</h1>
      <input
        type="number"
        ref={inputOne}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        style={{ width: "100px" }}
      />
      <input
        type="number"
        ref={inputTwo}
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <h2>Value:${value}</h2>
      <button onClick={handleSubmit}>Ruppess</button>
      <button onClick={handleSubmitDollar}>dollar</button>
    </>
  );
}

export default App;
