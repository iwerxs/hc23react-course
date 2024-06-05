import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(15); //set the initial variable value
  // let counter = 15;
  const addValue = () => {
    setCounter(counter + 1);
    // counter = counter + 1;
    // console.log(counter);
  };
  const removeValue = () => {
    setCounter(counter - 1);
  };
  /*
  setCounter((prevC)=>{prevC + 1})
  setCounter((prevC)=>{prevC + 1})
  setCounter((prevC)=>{prevC + 1})
  setCounter((prevC)=>{prevC + 1})
  */

  return (
    <>
      <h1>React with Hitesh</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>add value</button>
      <button onClick={removeValue}>remove value</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
