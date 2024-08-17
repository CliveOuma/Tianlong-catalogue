import React from 'react'
import { hamburger } from '../assets/icons';
import { navLinks } from '../constants'

const Navbar = () => {
  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-continer'>
        <a href='/'><h1 className='text-coral-red text-3xl'>Tianlong</h1>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden '>
          {navLinks.map((item) => (
            <li key={item.label} >
              <a href={item.href} className='leadding-normal text-lg text-white '>{item.label}</a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={hamburger} className='text-white' alt={hamburger}
            width={26}
            height={26} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar