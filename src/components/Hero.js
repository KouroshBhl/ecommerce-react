import React from 'react'
import { Wrapper } from './Wrapper'
import singleSofa from '../assets/singleSofa.jpg'
import doubleSofa from '../assets/doubleSofa.jpg'
import { Button } from './Button'

export const Hero = () => {
  return (
    <div className='grid grid-cols-2 relative h-full w-7/12  mx-auto my-28 justify-center'>
      <div className=''>
        <h1 className='text-6xl font-semibold mb-10'>
          Design Your Comfort Zone
        </h1>
        <p className='text-lg leading-8 text-gray-500 mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          magnam, rerum, maxime sequi in tempora provident nemo vel enim cumque
          eius quo deleniti alias quod sit voluptate quam facere! Possimus nulla
          laudantium ducimus, voluptates voluptatem deserunt aut? Aliquid,
          necessitatibus ipsam!
        </p>
        <Button>SHOP NOW</Button>
      </div>
      <div className=''>
        <img
          src={doubleSofa}
          alt='double sofa'
          className='absolute right-0 z-10 w-[400px] h-xl'
        />
      </div>
    </div>
  )
}
