import React from 'react';
import logo from '/images/logo.png';

const Navbar = () => {
  return (
    <div className='flex justify-center items-center bg-primary hover:bg-secondary h-12 md:h-16'>
      <img src={logo} className='h-full w-auto object-cover' />
      <p className='font-bold text-base sm:text-xl md:text-2xl'>Sylar Chow Question Papers</p>
    </div>
  )
}

export default Navbar;