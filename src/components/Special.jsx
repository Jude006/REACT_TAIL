import React from 'react'

function Special() {
  return (
    <>
      <div className='mens flex flex-col justify-center items-start font-montserrat h-[80vh]  bg-black bg-fixed'>
          <div className='md:pl-20 pl-4'>
            <p className='text-white font-bold text-3xl '>
            GET A SPECIAL OFFER FOR YOUR SPECIAL OCCASION</p>
            <p className='border-b-4 border-primary mt-2 w-[15%]'></p>
          </div>
          <div className='md:pl-20 pl-4'>
            <p className='text-gray-300 mt-6 leading-relaxed'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis <br /> parturient montes.</p>
          </div>
          <div className='md:pl-20 pl-4 mt-6'>
            <button className='bg-primary py-3 px-8 text-black rounded-md'>Book a Reservation</button>
          </div>
        </div>
    </>
  )
}

export default Special

