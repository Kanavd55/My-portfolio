import React from 'react'
import { GITHUB_IMG_URL, GMAIL_IMG_URL, Github_Link, LINKEDIN_IMG_URL, LinkedIn_Link, Mail_Link } from '../utils/constants'

const Contact = () => {
  return (
    <div className="w-10/12 mx-auto mt-16" id="contact">
      <p className="text-center text-gray-700 text-lg">Get in touch</p>
      <p className="text-center text-gray-700 text-2xl underline mb-8">
        Contact Me
      </p>
      <div className="flex flex-wrap justify-around my-10 p-2 mx-2">
        <div className='rounded-2xl border border-black flex p-6 m-2 justify-between flex-wrap'>
            <div className='m-2 py-2'>
                <a href={Mail_Link} target='_blank' rel="noreferrer" className='flex justify-start'>
                    <img className='w-6 mx-1' alt='Gmail_logo' src={GMAIL_IMG_URL}/>
                    <span className='px-2'>kanavdahat55@gmail.com</span>
                </a>
            </div>
            <div className='m-2 py-2'>
                <a href={LinkedIn_Link} target='_blank' rel="noreferrer" className='flex justify-start'>
                    <img className='w-6 mx-1' alt='LinkedIn_logo' src={LINKEDIN_IMG_URL}/>
                    <span className='px-2'>LinkedIn</span>
                </a>
            </div>
            <div className='m-2 py-2'>
                <a href={Github_Link} target='_blank' rel="noreferrer" className='flex justify-start'>
                    <img className='w-6 mx-1' alt='Github_logo' src={GITHUB_IMG_URL}/>
                    <span className='px-2'>Github</span>
                </a>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Contact
