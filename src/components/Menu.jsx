import React from 'react'
import Reuse from './Reuse'
import Payday from './Payday'
import Video from './Video'
import Phone from './Phone'
import Newsletter from './Newsletter'
import Footer from './Footer'

const Menu = ()=>{
    return(
      <>
       <div className='about h-[70vh] flex flex-col justify-center items-center font-montserrat'>
    <div className=''>
      <p className='uppercase text-4xl text-white font-bold tracking-tighter'>Our Menu</p>
      <p className='border-b-4 border-primary w-[100%] mt-6'></p>
    </div>
    <div>
      <p className='text-white mt-6 leading-relaxed text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br  className='md:block hidden'/> commodo ligula eget dolor. Aenean massa.</p>
    </div>
   </div>


     <div className='py-16 bg-black'>
     <Reuse />
     </div>

     <div className='py-6 bg-black'>
     <Payday />
     </div>

     <div>
        <Video />
     </div>

     <div>
        <Phone />
     </div>

     <div>
        <Newsletter />
     </div>

     <div>
        <Footer />
     </div>
      </>
    )
}

export default Menu
