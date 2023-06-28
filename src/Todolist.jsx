import React from 'react';
import CancelTwoToneIcon from '@material-ui/icons/CancelTwoTone';
const Todolist=(props)=>{
    
return (
    <>
    <div className="todo_Style">
   <div className="closeicon">
   <CancelTwoToneIcon className="icon" onClick={()=>{props.onSelect(props.id);}}/> {props.text}   
    </div> 
    </div>
    </>
);
};
export default Todolist;