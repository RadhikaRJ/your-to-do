import logo from './logo.svg';
import './App.css';
import {useState} from "react";
function App() {
  const todoList=['buy milk','buy fruits'];
  const[done, setDone]=useState(false);
  
  
  return (
    <div className="App">
      <label>To do: </label>
      <input  id="todoInput" type="text"></input><span> </span>
      <button >Add</button>
      <div>Your To Do List: </div>
     {
       todoList.map((item)=>(
         <div><input type="checkbox"></input>{item}
         </div>

       ))
     }
       
    </div>
  );
}

export default App;
