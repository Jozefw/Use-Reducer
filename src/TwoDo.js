import React, {useState, useReducer} from 'react';

const ACTIONS = {
    ADD_TODO: 'addTodo',
    TOGGLE_TODO:'toggle_todo'
}

function reducer(tasks,action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return([...tasks, newTodo(action.payload.task)])
        case ACTIONS.TOGGLE_TODO:
            return('hi')    
    }
}

const newTodo = (task)=>{
    return({id:Date.now(), task:task, completed:false})
}
function TwoDo(){

const [task, SetTask] = useState('');    
const [tasks, dispatch] = useReducer(reducer, []);

const handleChange = (evt)=>{
    SetTask(evt.target.value);};

const handleSubmit = (evt)=>{
    evt.preventDefault();
    dispatch({ type:ACTIONS.ADD_TODO, payload:{task:task}});
    SetTask('')
}    
console.log(tasks)
    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor={task}>Todo Items:</label>
            <input
            id="task"
            value={task}
            onChange={handleChange}
            ></input>
            {task}
        </form>
        
    )
}

export default TwoDo;