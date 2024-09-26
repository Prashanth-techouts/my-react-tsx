import React, { useState } from 'react'

function UseStateArrayObj() {

    const[items,setItems]=useState<any>([])

       const addItem = () => {
            setItems([ ...items,{
                id:items.length,
                value: Math.floor(Math.random()*10+1)

            }])
         }

      return (
    <div>
        <button onClick={addItem}></button>
        <ul>
            {items.map((item:any)=> (

               <li key={item?.id}>{item.value}</li>
            )
            )}
        </ul>

    </div>
  )
}

export default UseStateArrayObj