import React, { useState } from 'react';
import '../index.css';

    const Reuse = ()=>{


            // State to keep track of the active tab
   const [activeTab, setActiveTab] = useState('food');

   // Tabs data
   const tabs = [
     { name: 'Food', key: 'food' },
     { name: 'Snacks', key: 'snacks' },
     { name: 'Beverages', key: 'beverages' },
   ];


   const foodItems = [
    { imageUrl: 'food1.png', name: 'REGULAR BEEF BURGER', description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$39.99' },
    { imageUrl: 'food2.png', name: 'BLACK BEEF BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$42.99' },
    { imageUrl: 'food3.png', name: 'BIG MEETY', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$40.99' },
    { imageUrl: 'food3.png', name: 'CHICKEN BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$33.99' },
    { imageUrl: 'food6.png', name: 'DOUBLE MAC BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$22.99' },
    { imageUrl: 'food6.png', name: 'BEEF CHEESE BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$52.99' },
    { imageUrl: 'food6.png', name: 'BIG MEETY', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$38.99' },
    { imageUrl: 'food8.png', name: 'CRISPY CHICKEN', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$27.99' },
  
  ];

  const snackItems = [
    { imageUrl: 'snack1.png', name: 'FRENCH FRIES', description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$39.99' },
    { imageUrl: 'snack2.png', name: 'FRENCH FRIES', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$42.99' },
    { imageUrl: 'snack3.png', name: 'BEEF CHEESE BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$40.99' },
    { imageUrl: '4.png', name: 'BEEF CHEESE BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$33.99' },
    { imageUrl: 'snack5.png', name: 'BEEF CHEESE BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$22.99' },
    { imageUrl: 'snack6.png', name: 'BEEF CHEESE BURGER', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$22.99' },
  ];

  const beverageItems = [
    { imageUrl: 'TEA1.png', name: 'COLA', description: '  Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$39.99' },
    { imageUrl: 'TEA2.png', name: 'SWEET DOUGHNUT', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$42.99' },
    { imageUrl: 'TEA3.png', name: 'ICE CREAM PANCAKE', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$40.99' },
    { imageUrl: 'TEA4.png', name: 'FRUIT PANCAKE', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$33.99' },
    { imageUrl: 'TEA5.png', name: 'SWEET SMOTHIE', description: ' Lorem ipsum dolor sit amet consectetur, adipisicing elit.', price: '$22.99' },
   
  ];





       return(
        <>
         <div className="px-6 md:px-24 bg-black font-montserrat" >
      {/* Navigation Tabs */}
      <div className="flex md:flex-row gap-4 flex-wrap justify-center mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-10 py-3 mx-2 font-semibold text-lg ${
              activeTab === tab.key ? 'bg-primary py-3 px-10 rounded' : 'text-white bg-gray-800 rounded'
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Food Section */}
      {activeTab === 'food' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white pt-6">
          {foodItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 transform transition duration-500 hover:scale-105 "
            >
            <div className='py-6 px-4 bg-[#171717] rounded-3xl hover:bg-primary ease-linear duration-300'>
            <img
                src={item.imageUrl}
                alt={item.name}
                className="w-full  object-cover mb-2  "
              />
            </div>
              <h3 className="text-xl font-bold mt-5 ">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-primary text-xl mt-2 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* Snacks Section */}
      {activeTab === 'snacks' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {snackItems.map((item, index) => (
            <div
              key={index}
              className=" rounded-lg p-4 transform transition duration-500 hover:scale-105"
            >
               <div className='py-6  bg-[#171717] object-contain rounded-3xl hover:bg-primary ease-linear duration-300 flex justify-center items-center'>
            <img
                src={item.imageUrl}
                alt={item.name}
                className=" h-40   object-contain mb-2  "
              />
            </div>
             <h3 className="text-xl font-bold mt-5 text-white ">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-primary text-xl mt-2 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      )}

      {/* Beverages Section */}
      {activeTab === 'beverages' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {beverageItems.map((item, index) => (
            <div
              key={index}
              className="rounded-lg p-4 transform transition duration-500 hover:scale-105"
            >
                 <div className='py-6  bg-[#171717] object-contain rounded-3xl hover:bg-primary ease-linear duration-300 flex justify-center items-center'>
            <img
                src={item.imageUrl}
                alt={item.name}
                className=" h-40   object-contain mb-2  "
              />
            </div>
                         <h3 className="text-xl font-bold mt-5 text-white ">{item.name}</h3>
              <p className="text-gray-600">{item.description}</p>
              <p className="text-primary text-xl mt-2 font-semibold">{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
        </>
       )
    }

export default Reuse
