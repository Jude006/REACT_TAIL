import React from 'react'
import '../index.css';

const Video = ()=>{
    return(
        <>
      <div className='relative h-screen w-full'>
      <iframe
        className='absolute top-0 left-0 w-full h-full '
        src="https://www.youtube.com/embed/HS24PywYlxg?controls=0&rel=0&playsinline=1&enablejsapi=1&autoplay=1&mute=1&loop=1&playlist=HS24PywYlxg"
        title="YouTube video player"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className='absolute inset-0 flex flex-col items-center justify-center text-center text-white'>
        <div className='relative'>
          <div className='play-icon'>
            <div className='play-icon-inner'></div>
          </div>
        </div>
        <p className='md:mt-4 mt-2 md:text-4xl font-bold uppercase tracking-tighter'>We serve you the best</p>
        <div className='mt-4 border-b-4 border-gold w-24 border-primary'></div>
        <p className='mt-4 text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br /> tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>





        
        </>
    )
}

export default Video

