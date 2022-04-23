import React, {useState,useReducer} from 'react';
import TwoDo from './TwoDo.js';
import List from './List.js';
import './App.css';

function reducer(state, action){
  switch(action.type){
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count:state.count - 1}
    default:
      return {state}
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {count:1})
 
  const add = () =>{
   dispatch({type:'increment'})
  }
  const minus = () =>{
    dispatch({type:'decrement'})
  }
  return (
    <div className="App">
      <button onClick={add}>+</button>
      <span>{state.count}</span>
      <button onClick={minus}>-</button>
      <TwoDo></TwoDo>
      <div></div>
      <List></List>
    </div>
  );
}

export default App;
