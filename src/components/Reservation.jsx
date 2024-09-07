import React from 'react'
import '../index.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Video from './Video';
import Phone from './Phone';
import Newsletter from './Newsletter';
import Footer from './Footer';

    const Reservation = ()=>{
        return(
            <>
     <div className='reserve md:h-[40vh] lg:h-[70vh] h-[70vh] flex flex-col justify-center items-center font-montserrat'>
    <div className=''>
      <p className='uppercase text-4xl text-white font-bold tracking-tighter'>Reservation</p>
      <p className='border-b-4 border-primary w-[100%] mt-6'></p>
    </div>
    <div>
      <p className='text-white mt-6 leading-relaxed text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br  className='md:block hidden'/> commodo ligula eget dolor. Aenean massa.</p>
    </div>
   </div>

   <div className='grid grid-cols-12 pt-16 md:pt-24 pb-16 md:pb-28 px-6 lg:px-24 gap-4 bg-black'>
    <div className='md:col-span-6 col-span-12 bg-black p-2'>
        <div>
            <p className='uppercase text-white font-bold text-2xl'>Reservation Details</p>
        </div>
        <div className='flex md:flex-row flex-col mt-6 items-center gap-4 text-white w-[100%]'>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Name">Name</label>
                <input type="text" name="Name" id=""  placeholder='Your Name' className='bg-[#101010]  text-white focus:outline-none py-3 px-2 rounded-md'/>
            </div>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Email Address">Name</label>
                <input type="text" name="Address" id=""  placeholder='email@youremail.com' className='bg-[#101010]  text-white focus:outline-none py-3 px-2 rounded-md'/>
            </div>
        </div>
        <div className='flex md:flex-row flex-col mt-6 items-center gap-4 text-white w-[100%] '>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Phone Number">Name</label>
                <input type="number" name="number" id=""  placeholder='Number' className='bg-[#101010]  text-white focus:outline-none py-3 px-2 rounded-md'/>
            </div>
            <div className='flex flex-col gap-2 md:w-[50%] w-[100%]'>
                <label htmlFor="Email Address">Reservation Date</label>
                <input type="date" name="date" id=""  placeholder='Date' className='bg-[#101010]  text-white focus:outline-none py-3 px-8 rounded-md'/>
            </div>
        </div>
        <div className='flex flex-col gap-2  mt-10 text-white'>
            <label htmlFor="message">Message</label>
            <input type="text" name='message' placeholder='Your Message' className='bg-[#101010] py-14 px-4 rounded-md focus:outline-none'  />
        </div>
        <div>
            <button className='py-5 px-10 bg-primary rounded-md mt-6 '>Reserve a Table</button>
        </div>
    </div>
    <div className='md:col-span-6 col-span-12 bg-black p-4 text-white'>
        <div>
            <p className='text-white font-extrabold text-3xl'>RESERVE YOUR TABLE ONLINE FROM HERE</p>
            <p className='border-b-4 border-primary w-[25%] mt-3'></p>
        </div>
        <div className='mt-4'>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>
        <div className='flex items-center gap-4 mt-6'>
            <div className='text-black bg-primary w-10 h-6 flex justify-center items-center rounded-full'>
            <FontAwesomeIcon icon={faCheck} />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
        </div>
        <div className='flex items-center gap-4 mt-6'>
            <div className='text-black bg-primary w-10 h-6 flex justify-center items-center rounded-full'>
            <FontAwesomeIcon icon={faCheck} />
            </div>
            <div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
            </div>
        </div>
        <div className='border-b '>
            <p className='text-2xl font-bold uppercase mt-4 py-6'>Contact directly</p>
        </div>


        <div className='mt-6 flex md:flex-row flex-col justify-between w-[100%]'>
            <div className='flex items-center gap-3'>
                <div>
                <FontAwesomeIcon icon={faPhone} className="text-3xl text-primary" />
                </div>
                <div>
                    <p className='font-bold text-2xl'>PHONE</p>
                    <p className='text-gray-400 text-sm'>+23480680778495</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <div>
                <FontAwesomeIcon icon={faPaperPlane} className="text-3xl text-primary" />
                </div>
                <div>
                    <p className='font-bold text-2xl'>PHONE</p>
                    <p className='text-gray-400 text-sm'>+23480680778495</p>
                </div>
            </div>
        </div>
    </div>
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

export default Reservation
