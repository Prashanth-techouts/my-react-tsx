
import React,{useEffect, useState} from "react";


const LifeCycleA : React.FC= () => { 

    const [count, setCount] = useState<number>(0);
    
useEffect(() => {
console.log("inisde the LifeCycle UseEffect")
},
[count]);
return (
<div>
    {count}
    <button onClick={()=>setCount(prevCount=>prevCount+1)}> increment</button>
    <button onClick={()=>setCount(prevCount=>prevCount-1)}>decrememnt</button>
    <button onClick={()=>setCount(0)}>Reset</button>

    </div>)
};

export default LifeCycleA
