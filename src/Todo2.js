import React, {useState,useReducer} from 'react';

const ACTIONS = {
    ADD_TODO:'add_todo'
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
function Todo2(){

    const [task, setTask] = useState([]);           
    const [tasks, dispatch] = useReducer(reducer, ['']);
    const handleChange = (evt)=>{
        setTask(evt.target.value)
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO, payload:{task:task}});
        setTask('')
    }
    return(
        <form onSubmit={handleSubmit}>
        <label ForHtml={task}>Todo Item</label>
        <input
        type='text'
        id='task'
        value={task}
        onChange={handleChange}
        >
        </input>
        {task}
        </form>
    )
}

export default Todo2;