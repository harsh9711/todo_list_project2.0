import React,{useState} from "react";
import Todolist from "./Todolist";
const App1=()=>{
   const[inputList,setInputList]=useState(""); //for display one at a time item
    const[Items,setItems]=useState([]); //for display all items

    const itemEvent=(event)=>{
        setInputList(event.target.value);
    };
    const listofItems=()=>{
    setItems((oldItems)=>{
    return [...oldItems,inputList];
    });
    setInputList('');
    }; 
    const deleteItems=(id)=>{
        console.log("delete");
        setItems((oldItems)=>{
            return oldItems.filter((arrElem,index)=>{
                return index!==id;
            })
        })
    };
    return(
        <>
         <div className="main_div">
            <div className="center_div">
            <br/>
                <h1> TO DO ITEMS </h1>
            <br/>
                <input type="text" placeholder="add a items" value={inputList} onChange={itemEvent}/>
                <button onClick={listofItems}> + </button>
                <ol>
                    {Items.map((itemval,index)=>{
                    return (<Todolist key={index} id={index} text={itemval} onSelect={deleteItems}/>);
                    })}
                </ol>
            </div>
         </div>
        </>
    );
};
export default App1;