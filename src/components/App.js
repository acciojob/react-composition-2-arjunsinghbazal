
import React, { useState } from "react";
import './../styles/App.css';
import New from "./New";
const App = () => {
  const [value,setvalue]=useState(false);
  const Onopen=()=>{
    setvalue(true);
  }
  const Onclose=()=>{
    setvalue(false);
  }
  return (
    <div>
       <button onClick={Onopen}>Show Modal</button>
       <New value={Onclose} current={value}/>
    </div>
  )
}

export default App
