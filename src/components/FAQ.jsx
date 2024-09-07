import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import Special from './Special';
import Review from './Review';
import Article from './Article';
import Newsletter from './Newsletter';
import Footer from './Footer';





function FAQ() {
  return (
    <>

     <div className='faq md:h-[40vh] lg:h-[70vh] h-[70vh] flex flex-col justify-center items-center font-montserrat'>
    <div className=''>
      <p className='uppercase text-4xl text-white font-bold tracking-tighter'>FAQ</p>
      <p className='border-b-4 border-primary w-[100%] mt-6'></p>
    </div>
    <div>
      <p className='text-white mt-6 leading-relaxed text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br  className='md:block hidden'/> commodo ligula eget dolor. Aenean massa.</p>
    </div>
   </div>

   <div className='bg-black py-16 md:py-28 px-6 md:px-24 text-white'>
    <div className='flex flex-col justify-center items-center'>
      <p className='text-4xl font-bold text-center text-white'>FREQUENTLY ASKED QUESTION</p>
      <p className='border-b-4 border-primary w-[20%] mt-6'></p>
    </div>

    <div className='mt-8'>
      <p className='text-center'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. <br /> Aenean massa. Cum sociis natoque penatibus et magnis dis.</p>
    </div>

    <div className='grid grid-cols-12 mt-6 md:mt-20 gap-6'>
      <div className='col-span-12 md:col-span-6  p-4'>
       <div className='my-12'>
       <div className='flex gap-4 items-center'>
          <p className='bg-primary rounded-full w-8 h-8  text-black text-xl flex justify-center items-center'>
          <FontAwesomeIcon icon={faQuestion} />
          </p>
          <p className='text-2xl font-bold'>HOW I CAN ORDER BURGRY MENU ONLINE ?</p>
        </div>
        <div>
          <p className='ml-12 mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

</p>
        </div>
       </div>
       <div className='my-12'>
       <div className='flex gap-4 items-center'>
          <p className='bg-primary rounded-full w-8 h-8  text-black text-xl flex justify-center items-center'>
          <FontAwesomeIcon icon={faQuestion} />
          </p>
          <p className='text-2xl font-bold'>
          WHERE I CAN FIND THE BURGRY MENU ONLINE ?</p>
        </div>
        <div>
          <p className='ml-12 mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

</p>
        </div>
       </div>
       <div className='my-12'>
       <div className='flex gap-4 items-center'>
          <p className='bg-primary rounded-full w-8 h-8  text-black text-xl flex justify-center items-center'>
          <FontAwesomeIcon icon={faQuestion} />
          </p>
          <p className='text-2xl font-bold'>
          HOW TO BOOK A RESERVATION ONLINE AT BURGRY ?</p>
        </div>
        <div>
          <p className='ml-12 mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

</p>
        </div>
       </div>

      </div>
      <div className='col-span-12 md:col-span-6  p-4'>
       <div className='my-12'>
       <div className='flex gap-4 items-center'>
          <p className='bg-primary rounded-full w-8 h-8  text-black text-xl flex justify-center items-center'>
          <FontAwesomeIcon icon={faQuestion} />
          </p>
          <p className='text-2xl font-bold'>HOW TO BOOK A RESERVATION ONLINE AT BURGRY ?</p>
        </div>
        <div>
          <p className='ml-12 mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

</p>
        </div>
       </div>
       <div className='my-12'>
       <div className='flex gap-4 items-center'>
          <p className='bg-primary rounded-full w-8 h-8  text-black text-xl flex justify-center items-center'>
          <FontAwesomeIcon icon={faQuestion} />
          </p>
          <p className='text-2xl font-bold'>
          HOW I CAN APPY AS MEMBER OF BURGRY BAR?</p>
        </div>
        <div>
          <p className='ml-12 mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

</p>
        </div>
       </div>
       <div className='my-12'>
       <div className='flex gap-4 items-center'>
          <p className='bg-primary rounded-full w-8 h-8  text-black text-xl flex justify-center items-center'>
          <FontAwesomeIcon icon={faQuestion} />
          </p>
          <p className='text-2xl font-bold'>
          HOW TO BOOK A RESERVATION ONLINE AT BURGRY ?</p>
        </div>
        <div>
          <p className='ml-12 mt-4 text-gray-400'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient.

</p>
        </div>
       </div>

      </div>

    </div>
   </div>
   
   <div>
    <Special />
   </div>

   <div>
    <Review />
   </div>

   <div>
    <Article />
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

export default FAQ
