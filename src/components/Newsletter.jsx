import React from 'react'

const Newsletter = ()=>{
    return(
        <>
                <div className='bg-primary py-24 px-6 md:px-24 font-montserrat flex md:flex-row flex-col justify-between items-center '>
          <div>
            <p className='text-black font-extrabold text-3xl uppercase'>GET EXCLUSIVE UPDATE</p>
            <p className='mt-2 text-gray-200'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className='flex md:flex-row flex-col gap-4 items-center mt-4 justify-start md:justify-center'>
            <div>
              <input type="text" name="" id="" placeholder='Email'  className='py-3 px-20 rounded-md bg-white focus:outline-none'/>
            </div>
            <div>
              <button className='py-3 px-10 rounded-md bg-black text-white'>Subscribe now</button>
            </div>
          </div>
        </div>
        </>
    )
}
export default Newsletter
