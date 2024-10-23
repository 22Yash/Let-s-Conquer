import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Assignement from './pages/Assignement';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home/>}/>
    <Route path='/submit' element={<Assignement/>}/>
  </Routes>
  </BrowserRouter>
  
  </>
  )
}

export default App
