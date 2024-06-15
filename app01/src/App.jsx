import React, { useState } from 'react'
import AppKey from './assets/AppKey'

export default function App() {
const [show, setShow] = useState(true)


  return (
    <div>
      <button onClick={()=>setShow(!show)} className='btn btn-warning'>{show? "Hiedin" : "Shoe"}</button>
      {show && <AppKey/>}
    </div>
  )
}
