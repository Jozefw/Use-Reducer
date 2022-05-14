import React, {useState,useReducer} from 'react';

const ACTIONS = {
    ADD_TODO:'new_todo'
}

function reducer(todos,action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return [...todos,newTodo(action.payload.thing)]
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
       
    </form>

    )
}

export default DewList;