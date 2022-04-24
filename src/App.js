import React, {useState,useReducer} from 'react';
import Todo from './Todo.js';
import Todo2 from './Todo2.js';
import './App.css';


function reducer(counter, action){

}

function App() {
  
 const [value, setValue] = useState(0);
 const [counter, Dispatch] = useReducer(reducer,{count:1});

  const add = () =>{
   setValue(value+1)
  }
  const minus = () =>{
    setValue(value-1)
  }
  return (
    <div className="App">
      <button onClick={add}>+</button>
      <span>Value:{value}</span>
      <button onClick={minus}>-</button>
      
      <Todo2></Todo2>
    </div>
  );
}

export default App;
