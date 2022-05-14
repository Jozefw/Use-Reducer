import React,{useState,useReducer} from 'react';
import SingleTodo from './SingleTodo';


export const ACTIONS = {
    ADD_TODO:'addTodo',
    UPDATE_TODO:'update'
}
function reducer(todoCollection,action){
    switch(action.type){
        case ACTIONS.ADD_TODO:
            return([...todoCollection,addTask(action.payload.task)])
        case ACTIONS.UPDATE_TODO:
            return(todoCollection.map((CollectionItem)=>{
                if(CollectionItem.id === action.payload.updatedId){
                    return{...CollectionItem, completed:!CollectionItem.completed}
                }
                return CollectionItem;
            }))
        default:  
            return todoCollection    
    }
}

function addTask(item){
    return({id:Date.now(),todoItem:item,completed:false})
}
export default function Listing() {

const [todo, setTodo] = useState('');
const [todoCollection, dispatch] = useReducer(reducer,[]);

const handleChange = (evt) =>{
     setTodo(evt.target.value);
}

const handleSubmit = (evt) =>{
    evt.preventDefault();
    dispatch({type:ACTIONS.ADD_TODO,payload:{task:todo}})
    setTodo('')
}
console.log(todoCollection)
  return (
      <>
    <form onSubmit={handleSubmit}>
        <label htmlFor="todo">Todo Item:</label>
        <input
        type='text'
        name='todo'
        value = {todo}
        onChange={handleChange}
        >
        </input>
    </form>
      {todoCollection.map(singleItem => 
        <SingleTodo key={singleItem.id} item={singleItem} dispatch={dispatch}></SingleTodo>)}
      </>
       
  )
}

