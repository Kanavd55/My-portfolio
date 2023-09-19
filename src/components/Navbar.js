import React, { useState } from 'react'
import NavLinks from './NavLinks'

const Navbar = () => {
  const [showLinks,setShowLinks]=useState(false);
  return (
    <div className='shadow-lg'>
    <div className='flex justify-between xl:justify-around p-4'>
        <div className='font-bold text-3xl'>
            <h1 className='mt-5 mx-4 text-slate-700 '>Kanav Gopal Dahat</h1>
        </div>
        <div className='xl:hidden p-2 mt-3 mx-3'>
          <img className='w-10' alt='nav-icon' onClick={()=>setShowLinks(!showLinks)} src='https://cdn-icons-png.flaticon.com/128/5107/5107718.png'/>
        </div>
        <ul className="hidden xl:flex p-2 mx-3 font-semibold text-xl">
        <NavLinks/>
        </ul>
    </div>
    {showLinks && (
      <ul className='text-xl font-semibold text-center mx-auto'>
        <NavLinks/>
      </ul>
    )}
    </div>
  )
}

export default Navbar
