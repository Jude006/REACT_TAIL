import React from 'react'

const Phone = ()=>{
   return(
    <> <div className='py-24 px-2 lg:px-24 bg-black w-[100%] md:h-[120vh] h-fit grid grid-cols-12'>
    <div className='lg:col-span-6 col-span-12 h-[100%]  w-[100%] object-cover flex justify-center  items-center overflow-hidden'>
      <img src="/phone.jpg" alt=""  className='h-[100%] object-cover '/>
    </div>
    <div className='lg:col-span-6 col-span-12 py-10 px-6 md:px-14  h-[100%]'>
      <div>
        <p className=' text-white font-montserrat font-bold text-3xl'>
DON'T WORRY ! YOU CAN ORDER YOUR FOOD JUST BY PHONE
</p>
      </div>
      <div>
        <p className='border-b-2 border-primary w-[30%] mt-6'></p>
      </div>
      <div>
        <p className='mt-6 text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
      </div>
      <div className='bg-[#171717] py-4 px-6 rounded-md shadow-md flex md:flex-row flex-col items-center gap-3 mt-6'> 
        <div>
          <img src="/phone2.PNG" alt="" />
        </div>
        <div>
          <p className='font-bold text-3xl text-white'>FREE DELIVERY</p>
          <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className='bg-[#171717] py-4 px-6 rounded-md shadow-md flex md:flex-row flex-col  items-center gap-3 mt-6'> 
        <div>
          <img src="/phone1.PNG" alt="" />
        </div>
        <div>
          <p className='font-bold text-3xl text-white'>FREE DELIVERY</p>
          <p className='mt-4 text-gray-400'>Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
      <div className='flex md:flex-row flex-col items-center gap-4 mt-6'>
        <div><img src="/app1.PNG" alt="" /></div>
        <div><img src="/app2.PNG" alt="" /></div>
      </div>
    </div>
      </div>

    </>
   )
}

export default Phone
