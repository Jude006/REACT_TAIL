import React from 'react'
import Teams from './Teams'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import Video from './Video';
import Years from './Years';
import Review from './Review';
import Newsletter from './Newsletter';
import Footer from './Footer';

const Team = ()=>{
    return(
        <>
          <div className='team md:h-[40vh] lg:h-[70vh] h-[70vh] flex flex-col justify-center items-center font-montserrat'>
    <div className=''>
      <p className='uppercase text-4xl text-white font-bold tracking-tighter'>Our Team</p>
      <p className='border-b-4 border-primary w-[100%] mt-6'></p>
    </div>
    <div>
      <p className='text-white mt-6 leading-relaxed text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br  className='md:block hidden'/> commodo ligula eget dolor. Aenean massa.</p>
    </div>
   </div>
   <div className='bg-black'>
    <Teams />
   </div>


        <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-8  md:pb-28 pb-16 md:py-20 px-6 md:px-24 bg-black' >
      <div className='relative group'>
      <img 
        src="/chef1.jpg" 
        alt="" 
        className='h-[100%] object-cover transition-all duration-300 ease-linear group-hover:brightness-50'
      />

<div className='absolute right-0 md:top-24 top-4 mb-10 mr-5 opacity-0 group-hover:opacity-100  uppercase transition-opacity duration-300 ease-linear transform translate-x-full group-hover:translate-x-0'>
        <p className='text-white md:text-xl text-sm font-bold'>f</p>
        <p className='text-white md:text-xl text-sm font-bold'>o</p>
        <p className='text-white md:text-xl text-sm font-bold'>o</p>
        <p className='text-white md:text-xl text-sm font-bold'>d</p> <br />
        <p className='text-white md:text-xl text-sm font-bold'>c</p>
        <p className='text-white md:text-xl text-sm font-bold'>h</p>
        <p className='text-white md:text-xl text-sm font-bold'>e</p>
        <p className='text-white md:text-xl text-sm font-bold'>f</p>
      </div>
      <div className='absolute bottom-10 text-center w-full transition-all duration-300 ease-linear transform translate-y-full group-hover:translate-y-0'>
        <p className='text-white text-2xl font-bold'>Gentle Jay</p>
      </div>
      <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear'>
      <FontAwesomeIcon icon={faFacebookF} className='text-white mb-2 text-2xl' />
        <FontAwesomeIcon icon={faTwitter} className='text-white mb-2 text-2xl' />
        <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl' />

      </div>
    
    </div>

        <div className='relative group'>
          <img src="/chef2.jpg" alt=""  className='md:h-[100%]  object-cover htransition-all duration-300 ease-linear group-hover:brightness-50'/>

          <div className='absolute right-0 top-24 mb-10 mr-5 opacity-0 group-hover:opacity-100  uppercase transition-opacity duration-300 ease-linear transform translate-x-full group-hover:translate-x-0'>
        <p className='text-white text-xl font-bold'>f</p>
        <p className='text-white text-xl font-bold'>o</p>
        <p className='text-white text-xl font-bold'>o</p>
        <p className='text-white text-xl font-bold'>d</p> <br />
        <p className='text-white text-xl font-bold'>c</p>
        <p className='text-white text-xl font-bold'>h</p>
        <p className='text-white text-xl font-bold'>e</p>
        <p className='text-white text-xl font-bold'>f</p>
      </div>
      <div className='absolute bottom-10 text-center w-full transition-all duration-300 ease-linear transform translate-y-full group-hover:translate-y-0'>
        <p className='text-white text-2xl font-bold'>Gentle Jay</p>
      </div>
      <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear'>
      <FontAwesomeIcon icon={faFacebookF} className='text-white mb-2 text-2xl' />
        <FontAwesomeIcon icon={faTwitter} className='text-white mb-2 text-2xl' />
        <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl' />

      </div>
    
        </div>
        <div className='relative group'>
          <img src="/chef3.jpg" alt="" className='h-[100%] object-cover transition-all duration-300 ease-linear group-hover:brightness-50' />
          <div className='absolute right-0 md:top-24 top-4 mb-10 mr-5 opacity-0 group-hover:opacity-100  uppercase transition-opacity duration-300 ease-linear transform translate-x-full group-hover:translate-x-0'>
        <p className='text-white md:text-xl text-sm font-bold'>f</p>
        <p className='text-white md:text-xl text-sm font-bold'>o</p>
        <p className='text-white md:text-xl text-sm font-bold'>o</p>
        <p className='text-white md:text-xl text-sm font-bold'>d</p> <br />
        <p className='text-white md:text-xl text-sm font-bold'>c</p>
        <p className='text-white md:text-xl text-sm font-bold'>h</p>
        <p className='text-white md:text-xl text-sm font-bold'>e</p>
        <p className='text-white md:text-xl text-sm font-bold'>f</p>
      </div>
      <div className='absolute bottom-10 text-center w-full transition-all duration-300 ease-linear transform translate-y-full group-hover:translate-y-0'>
        <p className='text-white text-2xl font-bold'>Gentle Jay</p>
      </div>
      <div className='absolute inset-0 flex items-center justify-center flex-col opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-linear'>
      <FontAwesomeIcon icon={faFacebookF} className='text-white mb-2 text-2xl' />
        <FontAwesomeIcon icon={faTwitter} className='text-white mb-2 text-2xl' />
        <FontAwesomeIcon icon={faInstagram} className='text-white text-2xl' />

      </div>
    
        </div>
      </div>

      <div>
        <Video />
      </div>

      <div>
        <Years />
      </div>

      <div>
      <Review />
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

export default Team
