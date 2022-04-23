import React, {useState} from 'react';

function List(){
    const [item, setItem] = useState('');
    const [itemList, setItemList] = useState([]);
    
    const handleChange = (evt) => {
        setItem(evt.target.value)
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        setItemList([...itemList,{id:Date.now(), name:item}])
        setItem('')
    }
    const handleDelete = (evt) => {
       let name = evt.target.getAttribute('name')
        setItemList(itemList.filter(singleItem=>singleItem.name !== name
        ))
    }

const newList = itemList.map( (thing) => {
    return(<li key={thing.id}>
    {thing.name} 
    <span name={thing.name} onClick={handleDelete}> Delete</span> 
    </li>)
})

    return(
        <>
        <form>
            List Item
            <input
            value={item}
            onChange={handleChange}
            >
            </input>
            <button onClick={handleSubmit}>+</button>
        </form>
        {newList}
        </>
    )
}

export default List;