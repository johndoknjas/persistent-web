import "./App.css";
import React, { useState } from "react";
import Button from "@material-ui/core/Button";

const Statistics = ({ count }) => {
  return (
    <>
      <div>{count > 0 ? <p>{count}</p> : <p>Not clicked yet</p>}</div>
      <p>{count % 2 === 0 ? "Even" : "Odd"}</p>
    </>
  );
};

function App() {
  let [count, updateCount] = useState(0);
  const increment = () => {
    updateCount(count + 1);
  };

  const test = () => {
    increment();
  };

  return (
    <>
      <h1>Test</h1>
      <Statistics count={count}></Statistics>
      <Button onClick={test} variant="contained">
        Click
      </Button>
    </>
  );
}

export default App;
