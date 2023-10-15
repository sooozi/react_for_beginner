import Button from './Button';
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("run all the time!");
  const onlyOnce = () => {
    console.log("run only once.")
  };
  useEffect(onlyOnce, []);
  return (
    <div className="App">
      <h1>{counter}</h1>
      <button onClick={onClick}>this</button>
      {/* <Button text="click me!"></Button> */}
    </div>
  );
}

export default App;
