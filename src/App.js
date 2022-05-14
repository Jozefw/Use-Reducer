import React, {useState,useReducer} from 'react';
<<<<<<< HEAD
import DoList from './DoList.js';
import List from './List.js';
import Listing from './Listing';
import './App.css';


function App() {
  
  return (
    <div className="App">
    
      <Listing></Listing>
=======
import Todo from './DewList.js';
import DewList from './DewList';
import './App.css';


function reducer(counter, action){
  switch(action.type){
    case 'increment':
      return{count:counter.count+1}
    case 'decrement':
      return{count:counter.count-1}  
    default:
      
      return counter  
  }
}

function App() {
  
 const [value, setValue] = useState(0);
 const [counter, dispatch] = useReducer(reducer,{count:0});

  const add = () =>{
   dispatch({type:'increment'})
  }
  const minus = () =>{
    dispatch({type:'decrement'})
  }
  return (
    <div className="App">
      <button onClick={add}>+</button>
      <span>Values:{counter.count}</span>
      <button onClick={minus}>-</button>
      <DewList></DewList>
>>>>>>> 5236d65292ea7554c43a6b8d569b7ff5abe11246
    </div>
  );
}

export default App;
