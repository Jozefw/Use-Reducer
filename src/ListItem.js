import React from 'react';
import {ACTIONS} from './DoList.js'

export default function ListItem({item,dispatch}) {

    const handleUpdate = () => {
        dispatch({type:ACTIONS.UPDATE_TODO,payload:{id:item.id}})
    }

    const handleDelete = () => {
        dispatch({type:ACTIONS.DELETE_TODO,payload:{id:item.id}})
    }

  return (
    <div>
        <span style={{color: item.complete ? '#aaa': '#000'}}>{item.task}</span>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}
