import React from 'react';
import {ACTIONS} from './Listing'

export default function SingleTodo({item,dispatch}) {

    const handleUpdate = () =>{
        dispatch({type:ACTIONS.UPDATE_TODO,payload:{updateId:item.id}})
    }

  return (
      <div>
      <span style={{color:item.completed ? 'red' :'#000'}}>{item.todoItem}</span>
      <button onClick={handleUpdate}>Update</button>
      <button>Delete</button>
      </div>
 
  )
}
