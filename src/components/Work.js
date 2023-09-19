import React from 'react'

const Work = () => {
  return (
    <div className="w-10/12 mx-auto mt-16" id="work">
      <p className="text-center text-gray-700 text-lg">Explore my</p>
      <p className="text-center text-gray-700 text-2xl underline mb-8">
        Work Experience
      </p>
      <div className="flex flex-wrap justify-around">
        <div className='w-96 rounded-lg p-2 border border-black'>
            <p className='font-bold text-2xl m-1 p-1'>Tata Consultancy Services</p>
            <p className='text-lg font-semibold m-1 p-1'>System Engineer</p>
            <p className='text-sm text-slate-700 m-1 p-1'>Apr 2021 - Present</p>
            <p className='text-sm text-slate-700 m-1 p-1'>
                <ul className='list-disc pl-2 ml-2'>
                    <li>2 years of experience in payment application domain</li>
                    <li>Experienced in performing regression and performance testing and providing production support to the RTGS application</li>
                    <li>Good experience of UAT and Production deployment,monitoring and management</li>
                    <li>Good experience in DR drills,Post production movement sanity testing</li>
                </ul>
            </p>
        </div>
      </div>
      
    </div>
  )
}

export default Work
