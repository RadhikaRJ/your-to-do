
import './App.css';
import {useState} from "react";
import { strikethrough } from 'ansi-colors';
function App() {
  const [todoList,setTodoList]=useState(['buy milk','buy fruits']);  
  const[currentInputValue,setCurrentInputValue]=useState("");
  
  const [doneStatus,setDoneStatus]=useState(false);

function applyStrikethrough()
{
  return({
    textDecoration:strikethrough
  })
}
  return (
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
             
             <input type="checkbox" value="" ></input>{item}{" "}
         </div>

       ))
     }
       
    </div>
  );
}

export default App;
