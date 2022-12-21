import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper } from './Wrapper'
import logo from '../assets/logo.svg'
import { links } from '../utils/links'
import { CardButton } from './CardButton'
import { LoginButton } from './LoginButton'

export const NavBar = () => {
  console.log(links)
  return (
    <nav className='py-4'>
      <Wrapper>
        <div className='flex items-center justify-between'>
          <Link to='/'>
            <img src={logo} alt='comfy sloth' className='h-12' />
          </Link>
          <ul className='flex gap-4'>
            {links.map((item) => {
              const { id, text, url } = item
              return (
                <Link key={id} to={url}>
                  {text}
                </Link>
              )
            })}
          </ul>

          <div className='flex justify-center items-center gap-8'>
            <CardButton />
            <LoginButton />
          </div>
        </div>
      </Wrapper>
    </nav>
  )
}
