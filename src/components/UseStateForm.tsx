import React, { useState } from 'react'
import { json } from 'stream/consumers'

function UseStateForm() {

    const[name,setName]= useState ({firstName : '',lastName:''})
 

  return (
    <div>
        <form>
        <input type='text' value={name.firstName} onChange={e=> setName({...name, firstName : e.target.value})} />
        <input type='text' value={name.lastName} onChange={e=> setName({...name, lastName : e.target.value})} />
        <h3>yopur first name is {name.firstName}</h3>
        <h3>yopur last name is {name.lastName}</h3>
        <h1>{JSON.stringify(name)}</h1>
        </form>
        </div>
  )
}

export default UseStateForm