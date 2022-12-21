import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

export const CardButton = () => {
  return (
    <div className='flex items-center gap-2'>
      <button type='button' className='text-xl'>
        Cart
      </button>
      <FaShoppingBag className='h-6 w-6' />
    </div>
  )
}
