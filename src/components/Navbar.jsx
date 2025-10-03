import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useSelector } from 'react-redux'

function Navbar() {
    const {cart}=useSelector((state)=>state)

  return (
    <div>
        <nav className='flex flex-row justify-between items-center h-20 max-w-6xl mx-auto'>
            <NavLink to='/'>
            <div className='ml-5'>
            <img src="./logo.png" alt="logo" className='h-14' />
            </div>
            </NavLink>
         <div className='flex flex-row gap-5 items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to='/'>
            <p className='text-white'>Home</p>
            </NavLink>
            <NavLink to='/cart'>
            <div className='relative'>
                <FaShoppingCart className='text-2xl'/>
                {
                    cart.length>0 && <span className='absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full'>{cart.length}</span>
                }
            </div>
            </NavLink>
         </div>
        </nav>
    </div>
  )
}

export default Navbar