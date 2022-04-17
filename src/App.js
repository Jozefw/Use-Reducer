import React, {useState,useReducer} from 'react';
import Todo from './Todo.js';
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
      <Todo></Todo>
    </div>
  );
}

export default App;
