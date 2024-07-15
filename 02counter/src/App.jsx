import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () =>{
    setCounter(counter + 1)
  }

  // setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1 )
  //   setCounter(prevCounter => prevCounter + 1)
  //   setCounter(prevCounter => prevCounter + 1)

  const decreaseValue = () =>{
    if(counter > 0){
      setCounter(counter - 1)
    }
  }
  

  return (
    <>
      <h1>Chai aur React</h1>
      <h2 >Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br /> <br />
      <button onClick={decreaseValue}>Decrease Value</button>
    </>
  )
}

export default App
