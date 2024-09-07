import React from 'react'

const Years = ()=>{
    return(
        <>
            <div className='bg-black pb-16 px-6 md:px-24 grid grid-cols-12 gap-8 text-white font-montserrat'>
      <div className='bg-[#171717] rounded-md shadow md:col-span-6 lg:col-span-4 col-span-12 py-4 px-6'>
        <div className='flex justify-center'>
          <img src="/count1.PNG" alt="" />
        </div>
        <div >
      <p className='text-4xl tracking-tighter font-bold text-white text-center'>
      15 <sup className='text-primary text-2xl'>+</sup>
      </p>
    </div>
        <div>
          <p className='text-center mt-2'>Years Experience</p>
        </div>
      </div>
      <div className='bg-[#171717] rounded-md shadow md:col-span-6 lg:col-span-4 col-span-12 py-4 px-6'>
      <div className='flex justify-center'>
          <img src="/count2.PNG" alt="" />
        </div>
        <div>
          <p className='text-4xl tracking-tighter font-bold text-white text-center my-2'> 90 <sup className='text-primary text-2xl'>+</sup></p>
        </div>
        <div>
          <p className='text-center mt-2'>Menu Variant</p>
        </div>
      </div>
      <div className='bg-[#171717] rounded-md shadow md:col-span-6 lg:col-span-4 col-span-12 py-4 px-6'>
      <div className='flex justify-center'>
          <img src="/count3.PNG" alt="" />
        </div>
        <div>
          <p className='text-4xl tracking-tighter font-bold text-white text-center my-2 '> 24  <sup className='text-primary text-2xl'>+</sup></p>
        </div>
        <div>
          <p className='text-center mt-2'>Restaurant Branch</p>
        </div>
      </div>
    </div>
        </>
    )
}

export default Years
