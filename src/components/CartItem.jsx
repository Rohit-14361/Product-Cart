import React from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";

import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { remove } from '../slices/cartSlice'
function CartItem({item}) {
  const dispatch=useDispatch()
  const removeFromCart=()=>{
    dispatch(remove(item.id))
    toast.error("Item removed successfully")

  }

  const limitwords=(desc)=>{
    const words = desc.split(' ');
    if (words.length <= 20) {
      return desc;
    }
    return words.slice(0, 20).join(' ') + '...';
  }
  return (
    <div className='flex  w-[65%] justify-between items-center '>
      <div className='h-[250px] w-[500px]'>
        <img src={item.image} alt="item-image" className='h-full w-full' />
      </div>
      <div className='ml-24'>
        <h1 className='text-gray-800 text-2xl font-bold'>{item.title}</h1>
        <p className='mt-5 text-gray-700 font-semibold'>{limitwords(item.description)}</p>
        <div className='flex  justify-between mt-8'>
          <p className='text-xl font-semibold text-green-600'>${item.price}</p>
          <div onClick={removeFromCart} className='bg-red-400 rounded-full p-2 hover:bg-red-500 hover:text-white cursor-pointer'>
            <MdOutlineDeleteOutline className=' text-xl cursor-pointer '  />

          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem