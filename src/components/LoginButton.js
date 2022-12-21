import React from 'react'
import { RiLoginCircleFill } from 'react-icons/ri'

export const LoginButton = () => {
  return (
    <div className='flex items-center gap-2'>
      <button type='button' className='text-xl'>
        Login
      </button>
      <RiLoginCircleFill className='h-6 w-6' />
    </div>
  )
}
