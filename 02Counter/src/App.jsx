import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  
  let [counter , setcounter ] = useState(15)

  const addValue = () => {
    console.log("clicked", counter);
    if(counter < 20){
     counter = counter+1
    setcounter(counter)
    }
   
  
  }

  const removeValue = () =>{
    if(counter > 1){
    setcounter(counter -1)
    }
    

  }
  
  return (
    <>
     <h1>Chai aur react</h1>
     <h2>Countr value : {counter}</h2>
     <button
      onClick={addValue}>Add value{counter}</button>
     <br />
     <button onClick={removeValue}>Remove value{counter}</button>
     <p>Footer{counter}</p>
    </>
   
  
  )
}

export default App
