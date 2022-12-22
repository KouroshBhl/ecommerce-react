import React from 'react'
import { first, second, third } from '../assets/gallery'
import { Button } from './Button'

export const FeatProduct = () => {
  return (
    <section className='bg-gray-50 w-full flex flex-col gap-8 justify-center items-center py-20'>
      <div className='relative w-full text-center'>
        <h2 className='text-4xl font-bold text-gray-800 '>Feature Products</h2>
        <div className='after:absolute after:bg-gray-800 after:w-28 after:h-1 after:bottom-0 right-0 '></div>
      </div>
      <div className='flex gap-10 '>
        <figure>
          <img src={first} alt='' className=' h-64' />
        </figure>
        <figure>
          <img src={second} alt='' className=' h-64' />
        </figure>
        <figure>
          <img src={third} alt='' className=' h-64' />
        </figure>
      </div>
      <Button>All Products</Button>
    </section>
  )
}
