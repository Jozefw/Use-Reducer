import React, {useState,useReducer} from 'react';
import ListItem from './ListItem';

export const ACTIONS = {
    ADD_TODO:'new_todo',
    UPDATE_TODO:'update_todo',
    DELETE_TODO:'delete_todo'
}

function reducer(todoList,action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return[...todoList,newTodo(action.payload.thing)]
        case ACTIONS.UPDATE_TODO:
            return  todoList.map(singleTodo=>{
                if(singleTodo.id ===  action.payload.id){
                    return{...singleTodo,complete:!singleTodo.complete}
                }
                return singleTodo;
            })
        case ACTIONS.DELETE_TODO:
           return todoList.filter(itemFiltered => 
                itemFiltered.id !== action.payload.id)
           default:
               return todoList
    }
}

const newTodo = (singleTodo)=>{
    return({id:Date.now(),task:singleTodo,completed:false})
}

function DoList(){

    const [todo, setTodo] = useState('');
    const [todoList, dispatch] = useReducer(reducer,[])

    const handleChange = (evt)=>{
        setTodo(evt.target.value);
    }
    const handleSubmit = (evt)=>{
        evt.preventDefault();
        dispatch({type:ACTIONS.ADD_TODO,payload:{thing:todo}})
        setTodo('')
    }

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">
                Do this: 
            </label>
            <input
            id="todo"
            name="todo"
            value={todo}
            onChange={handleChange}
            >
            </input>
        </form>
            {todoList.map((item)=>{
                return<ListItem key ={item.id} item={item} dispatch={dispatch}> </ListItem>
            })}
        
        </>
    )
}

export default DoList;