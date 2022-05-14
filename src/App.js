import React, {useState,useReducer} from 'react';
import './App.css';
import NewList from './NewList';

const ACTIONS = {
  ADD_TODO: 'add'
}

 function reducer(counter,action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return({})

  }
 }


function App() {
  
 const [value, setValue] = useState(0);
 const [counter, dispatch] = useReducer(reducer,[]);

 
 
  return (
    <div className="App">
    <NewList></NewList>
      
    </div>
  );
}

export default App;
