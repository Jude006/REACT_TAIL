import React from 'react'
import Slide from './Slide'

const Review = ()=>{
    return(
        <>
          <div className='bg-[#171717] py-16  font-montserrat'>
          
          <div className='w-[100%] flex flex-col justify-center items-center'>
            <p className='text-white font-bold text-3xl py-2  text-center uppercase'>Customer Review</p>
            <p className='border-b-4 border-primary w-[15%] '></p>
          </div>
          <div>
            <p className='text-gray-400 mt-4 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa.</p>
          </div>
          <div className='gap-4 md:py-16 py-6'>
         <Slide />
          </div>
          </div>
        </>
    )
}

export default Review
