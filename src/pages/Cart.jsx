import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem'
import { Link } from 'react-router-dom'

function Cart() {
  const cart=useSelector((state)=>state.cart)
  const [totalAmount,setTotalAmount]=useState(0);
  
  useEffect(()=>{
    setTotalAmount(cart ? cart.reduce((acc,curr)=>acc+curr.price,0) : 0);
  },[cart]);


  return (
    <div className='py-12  px-5 flex flex-col gap-8 justify-between h-full w-full '>
      {
        cart.length>0?(<div className='px-14 flex ' >
          <div className=' flex flex-col gap-10 p-8 w-[65%]' >
            {
              cart.map((item,index)=>{
                return (
                  <div key={item.id}>
                    <CartItem item={item} itemIndex={index}/>
                    {index < cart.length - 1 && <hr className='w-[70%] mt-8 h-5 ' />}
                  </div>
                )
              })
            }
          </div>

          <div className='w-[25%] mt-16 items-start self-start flex flex-col justify-between' >
            <div className=' flex flex-col '>
              <p className='text-3xl text-green-800 font-semibold'>Your Cart</p>
              <p className='text-6xl font-bold text-green-800'>Summary</p>
              <p className='mt-6 text-gray-800 font-semibold'>
                <span className='text-2xl ' >Total Items: {cart.length}</span>
              </p>
              <p className='mt-8 text-gray-800 font-semibold text-2xl'>Total Amount : <span className='text-black'>${totalAmount}</span></p>
              <div className='bg-green-600 rounded-md font-bold p-3  text-white text-center mt-8'>
                <button className='cursor-pointer '>
                Checkout Now
              </button>
              </div>
           
            </div>
          
          </div>

        </div>

        ):(<div className='flex justify-center items-center mt-32 gap-8 flex-col'>
          <h1 className='text-2xl text-gray-800 font-semibold'>Cart Empty</h1>
          <Link to='/'>
          <button className='bg-green-500 text-white px-18 py-3 rounded-md font-semibold hover:bg-white hover:text-green-500 hover:border-green-600 hover:border-2  cursor-pointer transition duration-200 ease-in'>Shop Now</button>
          </Link>
        </div>)
      }
    </div>
  )
}

export default Cart