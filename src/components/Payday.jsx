import React from 'react'

 const Payday = ()=>{
    return(
        <>
         <div className='bg-black px-4 md:px-16 grid grid-cols-12 justify-between gap-6 py-16 font-montserrat'>
      <div className='lg:col-span-6 col-span-12 shadow rounded-md p-8 text-white bg-[#171717] flex md:flex-row flex-col-reverse'>
        <div className=' lg:w-[60%] w-[100%] h-[100%] '>
          <div>
            <p className='text-primary flex lg:justify-start justify-center'>Payday promo</p>
          </div>
          <div>
            <p className='text-white font-bold text-3xl capitalize mt-3'>Get a 10% discount on  payday week</p>
          </div>
          <div>
            <p className='mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <p className='text-primary mt-3 flex md:justify-start justify-center'>Buy online</p>
          </div>
        </div>
        <div className=' lg:w-[40%] w-[100%] h-[100%] flex justify-center items-center object-cover'>
          <img src="/image1.png" alt=""  className='bounce h-48 object-cover'/>
        </div>
      </div>
      <div className='lg:col-span-6 col-span-12 shadow rounded-md p-8 text-white bg-[#171717] flex md:flex-row flex-col'>
         <div className=' lg:w-[60%] w-[100%] h-[100%] '>
          <div>
            <p className='text-primary flex lg:justify-start justify-center'>Payday promo</p>
          </div>
          <div>
            <p className='text-white font-bold text-3xl capitalize mt-3'>Get a 10% discount on  payday week</p>
          </div>
          <div>
            <p className='mt-3 text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div>
            <p className='text-primary mt-3 flex lg:justify-start justify-center'>Buy online</p>
          </div>
        </div>
        <div className='lg:w-[40%] w-[100%] h-[100%] flex justify-center items-center object-cover'>
          <img src="/image2.png" alt=""  className='bounce h-48 object-cover'/>
        </div>
      </div>
    </div>
        </>
    )
    }

export default Payday
