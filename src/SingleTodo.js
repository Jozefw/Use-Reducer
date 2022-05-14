import React from 'react'

export default function SingleTodo({item,dispatch}) {

    const handleUpdate = (evt) =>{
        dispatch()
    }

  return (
      <div>
      <span style={{color:item.completed ? '#aaa' :'#000'}}>{item.todoItem}</span>
      <button onClick={handleUpdate}>Update</button>
      <button>Delete</button>
      </div>
 
  )
}
