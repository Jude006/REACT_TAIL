import React  from 'react';
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faUtensils,faCheck } from '@fortawesome/free-solid-svg-icons';
import '../index.css';
// import Slide from './Slide';
import Reuse from './Reuse';
import Payday from './Payday';
import Video from './Video';
import Phone from './Phone';
import Footer from './Footer';
import Newsletter from './Newsletter';
import Review from './Review';
import Special from './Special';
import Article from './Article';

 
const Home = () => {


  
  return (
   <>
   
    <div className="bg-hero h-fit grid lg:grid-cols-2  grid-cols-1 font-montserrat pb-10">
    <div className='h-80 md:h-screen  object-cover '>
    <div className='h-[100%] land bounce'>
    </div>
    
     </div>
     <div className='h-[100%] flex flex-col justify-center items-center px-8 text-justify pt-16'>
      <div className='leading-loose'>
        <h1 className='font-extrabold text-white text-3xl md:text-5xl text-center uppercase  leading-loose font-montserrat'>Enjoy Burger Make Your Tummy Happy</h1>
      </div>
      <div className='flex justify-center lg:justify-start items-center w-[100%] mt-3'>
        <div className='border-b-2 border-primary w-[40%] ml-0 lg:ml-10'></div>
      </div>
      <div>
        <p className='text-white mt-10 ml-0 md:ml-6'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
      </div>
      <div className='flex justify-between items-center mt-12 px-2 md:px-16 text-white w-[100%]'>
        <div className='flex flex-col gap-2 items-center'>
        <FontAwesomeIcon icon={faUtensils} className="text-primary text-6xl" />
        <p>Delicious</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
        <FontAwesomeIcon icon={faDroplet} className="text-primary text-6xl" />
        <p>Fresh</p>
        </div>
        <div className='flex flex-col gap-2 items-center'>
        <FontAwesomeIcon icon={faDroplet} className="text-primary text-6xl" />
        <p>Organic</p>
        </div>
     
      </div>
      <div className='w-[100%] flex mt-12 lg:justify-start justify-center '>
          <button className='py-3 px-8 bg-primary ml-0 lg:ml-14'>Learn more</button>
        </div>
     </div>
    </div>

    {/* section 1 */}

    <div className='grid grid-cols-12 py-16 bg-black px-4 md:px-16 gap-8 items-center'>
  <div className='lg:col-span-4 col-span-12  bg-[#171717] rounded flex h-fit p-2 items-center'>
    <div className='h-fit p-2 w-[30%] flex items-center justify-center'>
      <img src='/bg-6.avif' alt='images' className='w-full h-auto' />
    </div>
    <div className='w-[70%] p-4 flex flex-col gap-3 justify-center'>
      <p className='text-white text-lg font-bold'>Food</p>
      <p className='text-white'>Lorem ipsum dolor sit.</p>
      <p className='text-primary'>Buy online</p>
    </div>
  </div>
  <div className='lg:col-span-4 col-span-12  bg-[#171717] rounded flex h-fit p-2'>
    <div className='bg-gray-200 w-[30%] flex items-center justify-center'>
      <img src='/bg-4.avif' alt='images' className='w-full h-auto' />
    </div>
    <div className='w-[70%] p-4 flex flex-col gap-3 justify-center'>
      <p className='text-white text-lg font-bold'>Snacks</p>
      <p className='text-white'>Lorem ipsum dolor sit.</p>
      <p className='text-primary'>Order now</p>
    </div>
  </div>
  <div className='lg:col-span-4 col-span-12  bg-[#171717] rounded flex p-2 h-fit'>
    <div className='bg-gray-200 w-[30%] flex items-center justify-center'>
      <img src='/bg-4.avif' alt='images' className='w-full h-auto' />
    </div>
    <div className='w-[70%] p-4 leading-relaxed flex flex-col gap-3 justify-center'>
      <p className='text-white text-lg font-bold'>Beverages</p>
      <p className='text-white'>Lorem ipsum dolor sit.</p>
      <p className='text-primary'>Buy online</p>
    </div>
  </div>
</div>
    {/* section 1 ended here */}

   <Payday />

    <div className='px-6 font-montserrat md:px-24 py-20 bg-black grid grid-cols-12 gap-4'>
      <div className='lg:col-span-6 col-span-12'>
        <img src="/image3.jpg" alt="" className='rounded-md' />
      </div>
      <div className='lg:col-span-6 col-span-12 px-6 pb-4'>
        <div>
          <h1 className='font-bold text-3xl leading-relaxed uppercase text-white'>FIND YOUR BEST TASTED FOOD & DRINK JUST IN ONE PLACE</h1>
        </div>
        <div className='flex md:justify-start justify-center'>
          <p className='border-b-2 border-primary md:w-[24%] w-[30%] mt-4'></p>
        </div>
        <div>
          <p className=' text-gray-300 mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
        </div>

        <div className='flex text-white mt-6 gap-8 md:flex-row flex-col'>
          <div className='flex flex-col gap-2'>
            <p>  <span className="mr-2 text-primary">
        <FontAwesomeIcon icon={faCheck} />
      </span> Best price</p>
            <p> <span className="mr-2 text-primary">
        <FontAwesomeIcon icon={faCheck} />
      </span> Fresh ingredients</p>
          </div>
          <div className='flex flex-col gap-2'>
            <p>  <span className="mr-2 text-primary">
        <FontAwesomeIcon icon={faCheck} />
      </span> Best Service</p>
            <p> <span className="mr-2 text-primary">
        <FontAwesomeIcon icon={faCheck} />
      </span>Health Protocol</p>
          </div>
          
        </div>
        <div className='flex md:justify-start justify-center '>
          <button className='py-3 px-8 bg-primary text-black rounded-md mt-8'>About Us</button>
        </div>
      </div>
    </div>

    <div className='py-20 px-6 md:px-24 font-montserrat bg-black'>
    <div>
      <p className='text-white font-extrabold uppercase  text-3xl text-center'>Our Best Menu</p>
    </div>
    <div className='flex justify-center mt-2'>
      <p className='border-b-2 border-primary w-[16%]'></p>
    </div>
    <div>
      <p className='text-center text-gray-300 mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula <br /> eget dolor. Aenean massa.</p>
    </div>
    </div>


<div>
<Reuse />
</div>
  

  <div>
    <Video />
  </div>

      <div>
      <Phone />
      </div>

      <div>
        <Review />
      </div>

      <div>
       <Special />
      </div>

        {/* new section  */}

      <Article />


<div>
  <Newsletter />
</div>

      <Footer />
   </> 
  );
};

export default Home;
