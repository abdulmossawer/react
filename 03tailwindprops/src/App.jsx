import { useState } from 'react'
import { Card } from './components/Card'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 classNameName='bg-red-900 text-black p-4 rounded-xl mb-4' >TAILWIND CSS</h1>
     <Card username="chai aur react" />

    </>
  )
}

export default App
