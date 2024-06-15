import React, { useState } from 'react'

export default function App() {

   const [number, setNumber] = useState(0)

   const increment = (n)=>{
     setNumber(number + n)
     console.log(number)
   }

   const Delete = (n)=>{
     setNumber(number - n)
     console.log(number)
   }
  return (
    <div>
      {number}
      <button onClick={()=>increment(10)}>Add</button>
      <button onClick={()=>setNumber(0)}>Resrt</button>
      <button onClick={()=>Delete(10)}>Delete</button>
    </div>
  )
}