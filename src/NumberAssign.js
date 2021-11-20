import react, { useState } from "react";

export default function NumberAssign(){

    const [num , setnum]=useState(0);
    const [color ,setcolor]=useState("gray");
    if(num%2==0){
        setcolor("blue")
    }
    else{
        setcolor("red")
    }
    const increment=()=>{
      setnum(num+1)
    }
    const decrement=()=>{
        if(num>0){
            setnum(num-1)
        }
    }
    return(
        <>
        <h1 style={{color:color}}>{num}</h1>
        <button className="btn-success" onClick={increment}>Increase</button>
        <button className="btn-danger" onClick={decrement}>Decrease</button>
        </>
    )
}