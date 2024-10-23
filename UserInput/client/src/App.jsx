import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 >MERN User Data Form</h1>
    <Input/>
    </>
  )
}

export default App
