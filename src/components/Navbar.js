import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around p-4 shadow-lg'>
        <div className='font-bold text-3xl'>
            <h1 className='mt-5 mx-4 text-slate-700 '>Kanav Gopal Dahat</h1>
        </div>
        <div>
            <ul className='flex p-2 mx-3 font-semibold text-xl'>
                <li className='my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 '>About</li>
                <li className='my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 '>Education</li>
                <li className='my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 '>Work</li>
                <li className='my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 '>Projects</li>
                <li className='my-2 mx-4 p-2 cursor-pointer hover:text-gray-500 '>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
