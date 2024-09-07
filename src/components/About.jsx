import Footer from './Footer';
import Newsletter from './Newsletter';
import '../App.css';
import '../index.css';
import Video from './Video';
import Teams from './Teams';
import Years from './Years';

const About = () => {
  
 
  return (
   <>
   <div className='about h-[70vh] flex flex-col justify-center items-center font-montserrat'>
    <div className=''>
      <p className='uppercase text-4xl text-white font-bold tracking-tighter'>About us</p>
      <p className='border-b-4 border-primary w-[100%] mt-6'></p>
    </div>
    <div>
      <p className='text-white mt-6 leading-relaxed text-center text-sm'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br  className='md:block hidden'/> commodo ligula eget dolor. Aenean massa.</p>
    </div>
   </div>

   <div className='px-4 font-montserrat md:px-24 py-20  bg-gradient-to-b from-[#0D0B0A] to-black grid grid-cols-12 gap-4'>
      <div className='lg:col-span-6 col-span-12'>
        <img src="/image3.jpg" alt="" className='rounded-md' />
      </div>
      <div className='lg:col-span-6 col-span-12 px-2 pb-4'>
        <div>
          <h1 className='font-bold text-3xl leading-normal uppercase text-white'>GOOD FOOD FOR YOUR ALL DAY GOOD MOOD</h1>
        </div>
        <div className='flex md:justify-start justify-center'>
          <p className='border-b-2 border-primary md:w-[24%] w-[30%] mt-4'></p>
        </div>
        <div>
          <p className=' text-gray-300 mt-8'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.s.</p>
        </div>

      <div className='mt-6'>
        <p className='font-light text-3xl font-Play  text-white italic'>burgryhouse.com</p>
        <p className='text-white text-2xl font-bold mt-4'>Gentle Jay, CEO</p>
      </div>
      </div>
    </div>

<div>
  <Years />
</div>


    <div>
      <Video />
    </div>



    <div className='bg-black py-16 text-white font-montserrat'>
      <div className='flex flex-col justify-center items-center'>
        <p className='font-bold text-3xl text-center uppercase '>Our Best Chef</p>
        <p className='w-[20%] border-b-4 border-primary mt-4'></p>
      </div>
      <div>
        <p className='text-center mt-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo <br /> ligula eget dolor. Aenean massa.</p>
      </div>

     <Teams />
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

export default About;
