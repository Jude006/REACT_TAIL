import React from 'react'

const Footer = ()=>{
    return(
        <>
          <div className='px-6 md:px-20 py-10 bg-black font-montserrat'>
          <footer className='grid grid-cols-12 bg-black text-white font-montserrat gap-4 py-6 border-b border-white'>
            <div className='md:col-span-4 lg:col-span-3 col-span-12 '>
              <div>
                <p className='text-4xl font-extrabold tracking-tighter'>BUR<span className='text-primary'>GRY</span></p>
              </div>
              <div>
                <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

</p>
              </div>
            </div>
            <div className='md:col-span-4 lg:col-span-3 col-span-12   '>
              <div className='flex flex-col items-start gap-3'>
              <h2>SUPPORT</h2>
              <a href="">FAQS</a>
              <a href="">Privacy policy</a>
              <a href="">Privacy policy</a>
              <a href="">Terms and Condition</a>
              <a href="">Terms and ConditionContact</a>
              </div>
            </div>
            <div className='md:col-span-4 lg:col-span-3 col-span-12 '>
              <div className='flex flex-col items-start mt-4 gap-3 '>
               <h2>PHONE</h2>
               <a href="tel:+2348068078495">+2348068078495</a>
               <h2>Email</h2>
               <a href="">Contact@burgry.com</a>
              </div>
            
            </div>
            <div className='md:col-span-4 lg:col-span-3 col-span-12 '>
            <div className='flex flex-col items-start mt-4 gap-3 '>
               <h2>Address</h2>
               <a href="tel:+2348068078495">No1 idowu crescent Adalemo sango ota ogun state</a>
               <h2>FOLLOW US</h2>
              <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
              </div>
            
            </div>
          </footer>
          <div className='flex items-center justify-between'>
            <div className='text-white  pt-4'>Burger websites by Gentle jay</div>
          <div className='text-white text-end pt-4'>copywrite all rights reserved 2024</div>

          </div>
        
        </div>
        </>
    )
}

export default Footer
