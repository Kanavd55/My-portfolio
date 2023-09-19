import React from 'react'

const EducationCard = ({title,university,duration,percentage}) => {
  return (
    <div className='w-80 p-2 m-2  rounded-lg border border-black'>
            <p className='font-bold m-1 p-1 text-2xl'>{title}</p>
            <p className='font-semibold m-1 p-1 text-lg'>{university}</p>
            <p className='text-sm m-1 p-1 text-slate-700'>{duration}</p>
            <p className='text-sm m-1 p-1 text-slate-700'>{percentage}</p>
        </div>
  )
}

export default EducationCard
