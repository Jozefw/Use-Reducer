import React, {useState,useReducer} from 'react';
import TodoList from './TodoList';

const ACTIONS = {
    ADD_TODO:'new_todo',
    TOGGLE_TODO:'update_todo',
    DELETE_TODO:'delete_todo'
}

function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos,newTodo(action.payload.thing)]
        case ACTIONS.TOGGLE_TODO:
            return []    
        case ACTIONS.DELETE_TODO:
            return[]    
        default:
            return(todos)    
    }
}


const newTodo = (name) =>{
    return({id:Date.now(),task:name,complete:false})
}

const DewList= ()=>{


    const [todo, setTodo] = useState('');
    const [todos, dispatch] = useReducer(reducer,[])

    const handleChange = (evt) =>{
        setTodo(evt.target.value)
    }

    const handleSubmit = (evt) =>{
        evt.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO,payload:{thing:todo}});
        setTodo('');
    }

    
   
    return(
    
    <form onSubmit={handleSubmit}>
        <label htmlFor="task">Do This:{todo}</label>
        <input
        id='task'
        name='task'
        value={todo}
        onChange={handleChange}
        >
        </input>
        
       {todos.map(item=>{
        return<TodoList key={item.id} id={item.id} todo={item}></TodoList>
    })}
    
    </form>

    )
}

export default DewList;