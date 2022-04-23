import React, {useState, useReducer} from 'react';

const ACTIONS ={
    ADD_TODO: 'add_todo'
}
function reducer(tasks, action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return([...tasks,newTodo(action.payload.task)])
    }
}
function newTodo(task){
    return({id:Date.now(), task:task, completed:false})
}

function Todo(){
    const [task, SetTask] = useState('');
    const [tasks, dispatch] = useReducer(reducer, []);

    const handleChange  = (evt) => {
        SetTask(evt.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch({type: ACTIONS.ADD_TODO, payload:{task:task}});
        SetTask('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="task">Todo</label>
            <input
            type='text'
            id="task"
            value={task}
            onChange={handleChange}
            >
            </input>
            {task}
        </form>
    )
}

export default Todo;