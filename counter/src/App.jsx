import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {

 const [counter,setCounter] = useState(5)

  // let counter = 5 

 const addValue = () =>{

 //counter = counter+1;
 
 if(counter<20) 
 {setCounter(counter+1)}
 
 }

 const removeValue = () =>{
  if(counter>0)
  {
    setCounter(counter-1)
  }
 }
  return (
    <>
      <h1>chai our react</h1>
      <h2>counter value :{counter}</h2>

      <button 
      onClick={addValue}>Add value</button> 
      <br />
      <button 
      onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
