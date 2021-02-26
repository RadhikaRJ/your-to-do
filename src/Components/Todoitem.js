
import {useState} from "react"
function Todoitem(props){
    const [doneStatus,setDoneStatus]=useState(false);
    function updateStyle(){
        if(doneStatus){
            return({
              textDecorationLine:"line-through"
            })
          }
         else{
           return({
             textDecorationLine: "none"
           })
         }
    }
    
    return(
        <div style={updateStyle()} onClick={()=>setDoneStatus(!doneStatus)}>
            <input type="checkbox" onChange={()=>setDoneStatus(!doneStatus)}></input>
            {props.item}</div>
    )
}
export default Todoitem;