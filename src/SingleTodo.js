import React from 'react';
import {ACTIONS} from './Listing'

export default function SingleTodo({item,dispatch}) {

    const handleUpdate = () =>{
        dispatch({type:ACTIONS.UPDATE_TODO,payload:{updateId:item.id}})
    }
    const handleDelete = () =>{
        dispatch({type:ACTIONS.DELETE_TODO,payload:{deleteId:item.id}})
    }

  return (
      <div>
      <span style={{color:item.completed ? 'red' :'blue'}}>{item.todoItem}</span>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
      </div>
 
  )
}
