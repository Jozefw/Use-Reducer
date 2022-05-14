import React, {useState} from 'react';

function TodoList({todo}){


    return(
        <div>
            <span style={{color:todo.complete ? '#aaa' : '#000'}} >
                {todo.task}
                </span>
                <button>Update</button>
                <button>Delete</button>
        </div>
    )
}

export default TodoList;