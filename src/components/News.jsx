import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import Newsletter from './Newsletter';
import Footer from './Footer';

const News = ()=>{
  return(
    <>
      <div className='news md:h-[40vh] lg:h-[70vh] h-[70vh] flex flex-col justify-center items-center font-montserrat'>
    <div className=''>
      <p className='uppercase text-4xl text-white font-bold tracking-tighter'>NEWS</p>
      <p className='border-b-4 border-primary w-[100%] mt-6'></p>
    </div>
    <div>
      <p className='text-white mt-6 leading-relaxed text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br  className='md:block hidden'/> commodo ligula eget dolor. Aenean massa.</p>
    </div>
   </div>

   <div className='bg-black py-24 px-6 lg:px-24 grid grid-cols-12 gap-4'>
    <div className='lg:col-span-8 col-span-12   p-6'>
      <div className='grid grid-cols-12 gap-6'>
      <div className='md:col-span-6  col-span-12 shadow'>
        <div className='relative object-cover'>
          <img src="/news1.jpg" alt=""  className='object-cover'/>
          <div className='bg-black px-4 py-2 text-primary absolute bottom-2 left-2'>Food</div>
        </div>
        <div className='py-4'>
          <p className='text-white text-[1.2rem] tracking-tighter leading-normal font-bold uppercase'>LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE</p>
          <p className='mt-3 text-gray-300'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <p className='text-primary mt-3'><a href="">Read more</a></p>
        </div>
      </div>
      <div className='md:col-span-6  col-span-12 shadow p-2'>
      <div className='relative object-cover'>
          <img src="/news2.jpg" alt=""  className='object-cover'/>
          <div className='bg-black px-4 py-2 text-primary absolute bottom-2 left-2'>News</div>
        </div>
        <div className='py-4'>
          <p className='text-white text-[1.2rem] tracking-tighter leading-normal font-bold uppercase'>GET A 20% DISCOUNT AT OUR BIRTHDAY EVENT FOR $20 SPEND</p>
          <p className='mt-3 text-gray-300'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <p className='text-primary mt-3'><a href="">Read more</a></p>
        </div>
      </div>
      <div className='md:col-span-6  col-span-12  shadow p-2'>
      <div className='relative object-cover'>
          <img src="/news3.jpg" alt=""  className='object-cover'/>
          <div className='bg-black px-4 py-2 text-primary absolute bottom-2 left-2'>Beverages</div>
        </div>
        <div className='py-4'>
          <p className='text-white text-[1.2rem] tracking-tighter leading-normal font-bold uppercase'>STRAWBERRY SMOOTHIE IS THE BEST BEVERAGE FOR YOUR HOT DAY</p>
          <p className='mt-3 text-gray-300'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <p className='text-primary mt-3'><a href="">Read more</a></p>
        </div>
      </div>
      <div className='md:col-span-6  col-span-12  shadow p-2'>
      <div className='relative object-cover'>
          <img src="/news4.jpg" alt=""  className='object-cover'/>
          <div className='bg-black px-4 py-2 text-primary absolute bottom-2 left-2'>Food</div>
        </div>
        <div className='py-4'>
          <p className='text-white text-[1.2rem] tracking-tighter leading-normal font-bold uppercase'>THE NEW BLACK BURGER WITH SPICE TASTE TO SATISFY YOU</p>
          <p className='mt-3 text-gray-300'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
          <p className='text-primary mt-3'><a href="">Read more</a></p>
        </div>
      </div>
      </div>
    </div>
    <div className='lg:col-span-4 col-span-12   p-6 text-white'>
      <div className='flex flex-col  justify-start'>
        <p className='text-white text-2xl font-bold'>FEATURED NEWS</p>
        <p className='border-b-4 border-primary w-[20%]'></p>
      </div>

      <div className='my-6'>
        <p className='text-lg font-extrabold tracking-tighter'>LOOK HOW WE MAKE BEEF MEAT TASTY WITH THIS TECHNIQUE</p>
        <p className='text-gray-400 mt-2'><span className='mr-3'>  <FontAwesomeIcon icon={faClock} /></span>August 3, 2021</p>
      </div>
      <div className='my-6'>
        <p className='text-lg font-extrabold tracking-tighter'>GET A 20% DISCOUNT AT OUR BIRTHDAY EVENT FOR $20 SPEND</p>
        <p className='text-gray-400 mt-2'><span className='mr-3'>  <FontAwesomeIcon icon={faClock} /></span>August 3, 2021</p>
      </div>
      <div className='my-6'>
        <p className='text-lg font-extrabold tracking-tighter'>STRAWBERRY SMOOTHIE IS THE BEST BEVERAGE FOR YOUR HOT DAY</p>
        <p className='text-gray-400 mt-2'><span className='mr-3'>  <FontAwesomeIcon icon={faClock} /></span>July8, 2021</p>
      </div>

      <div>
        <p className='text-white font-bold text-2xl  mt-8'>Category</p>
        <p className='border-b-4 border-primary w-[20%] mt-3'></p>
      </div>
      <div className='flex items-center gap-3 mt-6'>
      <p className='border-b-4 border-primary w-[20%] mt-3'></p>
      <p className='text-xl font-bold '>NEWS</p>
      </div>
      <div className='flex items-center gap-3 mt-6'>
      <p className='border-b-4 border-primary w-[20%] mt-3'></p>
      <p className='text-xl font-bold '>FOOD</p>
      </div>
      <div className='flex items-center gap-3 mt-6'>
      <p className='border-b-4 border-primary w-[20%] mt-3'></p>
      <p className='text-xl font-bold '>BEVERAGES</p>
      </div>

      <div className='mt-6 md:mt-24 relative'>
        <img src="/news5.jpg" alt=""  className=''/>
       <div className='absolute top-16 left-8  leading-relaxed '>
       <p  className='text-xl font-bold '>GET 20% DISCOUNT FOR ONLINE PAYMENT</p>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</p>
       <p className='text-primary'>Get started</p>
       </div>
      </div>
    </div>
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

export default News
