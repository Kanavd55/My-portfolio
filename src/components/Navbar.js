import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-blue-100 text-slate-800 shadow-lg'>
        <div className='font-semibold text-3xl'>
            <h1 className='mt-5 mx-6 '>Kanav Gopal Dahat</h1>
        </div>
        <div>
            <ul className='flex p-2 mx-3 text-lg'>
                <li className='m-2 p-2'>About</li>
                <li className='m-2 p-2'>Education</li>
                <li className='m-2 p-2'>Work</li>
                <li className='m-2 p-2'>Projects</li>
                <li className='m-2 p-2'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
