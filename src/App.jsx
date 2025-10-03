import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Cart from './pages/Cart'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <div className='bg-slate-900'>
      <Navbar/>
    </div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App