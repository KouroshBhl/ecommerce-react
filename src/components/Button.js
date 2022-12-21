import React from 'react'

export const Button = ({ children }) => {
  return (
    <button className='bg-slate-900 text-gray-200 px-4 py-2 rounded-lg text-xl'>
      {children}
    </button>
  )
}
