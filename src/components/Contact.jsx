import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Newsletter from './Newsletter'
import Footer from './Footer'
import Mymap from './Mymap';


const Contact = () => {
  return (
      <>
         <div className='contact h-[70vh] flex flex-col justify-center items-center font-montserrat'>
    <div className='flex flex-col items-center'>
      <p className='uppercase text-4xl text-white font-bold '>Contact Us</p>
      <p className='border-b-4 border-primary w-[50%] mt-6'></p>
    </div>
    <div>
      <p className='text-white mt-6 leading-relaxed text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br  className='md:block hidden'/> commodo ligula eget dolor. Aenean massa.</p>
    </div>
   </div>

   <div className='grid grid-cols-12 gap-6 py-16 px-2 md:px-24 bg-black'>
    <div className='md:col-span-6 col-span-12  p-4 text-white'>
      <div>
        <p className='text-3xl font-bold'>GET CLOSER</p>
        <p className='border-b-2 border-primary w-[30%] mt-3'></p>
      </div>
      <div className='mt-4'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      </div>
      <div className='flex md:flex-row flex-col mt-6 gap-20'>
        <div className='flex items-center gap-3'>
          <div className='text-3xl text-primary hover:bg-primary hover:text-black hover:p-2 ease-linear duration-300 rounded'>  <FontAwesomeIcon icon={faMapMarkerAlt} /> </div>
          <div>
            <p className='text-2xl font-bold'>LOCATION</p>
            <p className='text-gray-400 mt-2'>No49 sango ota ogun state</p>
          </div>
        </div> <div className='flex items-center gap-3'>
          <div className='text-3xl text-primary hover:bg-primary hover:text-black hover:p-2 ease-linear duration-300 rounded'>   <FontAwesomeIcon icon={faEnvelope} /> </div>
          <div>
            <p className='text-2xl font-bold'>LOCATION</p>
            <p className='text-gray-400 mt-2'>No49 sango ota ogun state</p>
          </div>
        </div>
      </div>
      <div className='flex md:flex-row flex-col mt-6 gap-20  pb-16 border-b-2 border-gray-400'>
        <div className='flex items-center gap-3'>
          <div className='text-3xl text-primary hover:bg-primary hover:text-black hover:p-2 ease-linear duration-300 rounded'>  <FontAwesomeIcon icon={faPhone} /> </div>
          <div>
            <p className='text-2xl font-bold'>LOCATION</p>
            <p className='text-gray-400 mt-2'>No49 sango ota ogun state</p>
          </div>
        </div> <div className='flex items-center gap-3'>
          <div className='text-3xl text-primary hover:bg-primary hover:text-black hover:p-2 ease-linear duration-300 rounded'>   <FontAwesomeIcon icon={faEnvelope} /> </div>
          <div>
            <p className='text-2xl font-bold'>LOCATION</p>
            <p className='text-gray-400 mt-2'>No49 sango ota ogun state</p>
          </div>
        </div>
      </div>
      <div className='mt-16 flex md:flex-row flex-col w-[100%] justify-between items-center'>
        <div className='text-2xl font-bold text-white uppercase'>Our social media</div>
        <div className=" flex gap-8 text-xl text-primary">
      <a href="https://www.facebook.com" className="icon facebook" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com" className="icon instagram" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.twitter.com" className="icon twitter" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="https://www.youtube.com" className="icon youtube " target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
    </div>
      </div>

    </div>
    <div className='md:col-span-6 col-span-12  p-4'>
    <div className=' bg-black p-2'>
        <div>
            <p className='uppercase text-white font-bold text-2xl'>Your Details</p>
        </div>
        <div className='flex md:flex-row flex-col mt-6 items-center gap-4 text-white w-[100%]'>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id=""  placeholder='Your Name' className='bg-[#101010]  text-white focus:outline-none py-3 px-2 rounded-md'/>
            </div>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Email Address">Email</label>
                <input type="text" name="Address" id=""  placeholder='email@youremail.com' className='bg-[#101010]  text-white focus:outline-none py-3 px-2 rounded-md'/>
            </div>
        </div>
        <div className='flex md:flex-row flex-col mt-6 items-center gap-4 text-white w-[100%] '>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Phone Number">Name</label>
                <input type="number" name="number" id=""  placeholder='Number' className='bg-[#101010]  text-white focus:outline-none py-3 px-2 rounded-md'/>
            </div>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Email Address">Subject</label>
                <input type="date" name="subject" id=""  placeholder='Subject' className='bg-[#101010]  text-white focus:outline-none py-3 px-8 rounded-md'/>
            </div>
        </div>
        <div className='flex flex-col gap-2  mt-10 text-white'>
            <label htmlFor="message">Comments/Question</label>
            <input type="text" name='message' placeholder='Your Message' className='bg-[#101010] py-14 px-4 rounded-md focus:outline-none'  />
        </div>
        <div>
            <button className='py-5 px-10 bg-primary rounded-md mt-6 '>Submit Message</button>
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
  );
};

export default Contact;
