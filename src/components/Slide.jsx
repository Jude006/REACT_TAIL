import React from 'react'
import '../index.css';
import '../App.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Slide() {

        // const settings = {
        //   dots: true,
        //   infinite: true,
        //   speed: 200,
        //   slidesToShow: 3,
        //   slidesToScroll: 1
        // };

        var settings = {
            dots: true,
            infinite: true,
            speed: 800,
            slidesToShow: 3,
            slidesToScroll: 3,
            initialSlide: 3,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3,
                  infinite: true,
                  speed: 500,
                  dots: true
                }
              },
              {
                breakpoint: 640,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  infinite: true,
                  speed: 500,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };

  return (
    <div className='px-6 lg:px-24 m-auto  text-white font-montserrat' >
      <div className=''>
      <Slider  {...settings}>
      {data.map((d, index) => (
                        <div
                            key={index}
                            className='bg-black text-white rounded-lg flex lg:flex-row flex-col justify-center items-center px-6 py-4'
                        >
                    <div className='text-start w-[80%]'>{d.review}</div>
                    <div className='rounded-t-xl py-3  justify-start gap-6 flex items-center'>
                        <img src={d.img} alt=""  className='h-28 w-28 rounded-full'/>
                        <div>
                        <p className='font-bold text-xl'>{d.name}</p>
                        <p>{d.name2}</p>
                        </div>
                    </div>
            </div> 
        ))}
    </ Slider >
      </div>
    </div>
  )
}

const data = [
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: '/review1.jpg',
        name: "John Doe",
        name2: "Design"
    },
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: '/review2.jpg',
        name: "Gentle Jay",
        name2: "Design"
    },
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: '/review3.jpg',
        name: "Sam Jones",
        name2: "Design"
    },
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: '/review2.jpg',
        name: "Prince Mark",
        name2: "Design"
    },
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: '/review1.jpg',
        name: "Mathhew lorn",
        name2: "Design"
    },
    {
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        img: '/review3.jpg',
        name: "Gentle jay",
        name2: "Design"
    }
]
export default Slide;
