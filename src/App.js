
import './App.css';
import {useState} from "react";
function App() {
  const [todoList,setTodoList]=useState(['buy milk','buy fruits']);
  
  
  const[currentInputValue,setCurrentInputValue]=useState("");
  


  return (
    <div className="App">
      <h1>This is Your To Do List!</h1>
      <label>To do: </label>
      <input onChange={(e)=>setCurrentInputValue(e.target.value)} type="text"></input><span> </span>
      <button onClick={()=>setTodoList(todoList.concat(currentInputValue))} >Add</button><span> </span>
      <button onClick={()=>setTodoList([])}>Clear</button>
      <div>Your To Do List: </div>
     {
       todoList.map((item)=>(
         <div><input type="checkbox" value=""></input>{item}
         </div>

       ))
     }
       
    </div>
  );
}

export default App;
