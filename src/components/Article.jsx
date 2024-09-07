import React from 'react'


const Article = ()=>{
    return(
        <>
          <div className='bg-black h-fit py-16 px-6 md:px-20 font-montserrat '>
          <div className='flex flex-col justify-center items-center gap-3'>
            <p className=' text-4xl tracking-tight font-bold text-center text-white'>OUR NEWS AND ARTICLE</p>
            <p className='border-b-4 border-primary mt-2 w-[15%]'></p>
          </div>
          <div>
            <p className='text-gray-400 mt-4 text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa.</p>
          </div>

          <div className='grid  grid-cols-12 gap-8 mt-6 md:mt-10 justify-center  bg-black'>
      <div className='md:col-span-6 lg:col-span-4 col-span-12 '>
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
      <div className='md:col-span-6 lg:col-span-4 col-span-12 '>
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
      <div className='md:col-span-6 lg:col-span-4 col-span-12  '>
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
          </div>

        </div>
        </>
    )
}

export default Article
