
import {useState} from "react";

import Todoitem from './Todoitem';
function TodoListApp(){
    const [todoList,setTodoList]=useState(['Smile','Compliment yourself!']);  
    const[currentInputValue,setCurrentInputValue]=useState("");

    return(
        <div className="App">
        <h1>This is Your To Do List!</h1>
        <label>To do: </label>
        <input onChange={(e)=>setCurrentInputValue(e.target.value) } id="todoinput" type="text"></input><span> </span>
        <button onClick={()=>{
        setTodoList(todoList.concat(currentInputValue))
        document.getElementById('todoinput').value=""; //clear input box after appending item
        }} >Add</button><span> </span>
        <button onClick={()=>setTodoList([])}>Clear List</button>
        <div>Your To Do List: </div>
    {
        todoList.map((item, index)=>(
        <div key={index} >
            <Todoitem item={item}/>
        </div>
        
        ))
        

    }
        
    </div>
)
}

export default TodoListApp;