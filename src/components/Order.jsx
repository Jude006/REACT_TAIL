import React, { useState, useEffect } from 'react';
import '../App.css';
import 'tailwindcss/tailwind.css';
import Slide from './Slide';
import Newsletter from './Newsletter';
import Footer from './Footer';

// Dummy burger data
const burgerData = [
  { id: 1, name: 'Classic Burger', description: 'A classic burger with cheese and lettuce.', price: 5, image: 'https://img.freepik.com/free-photo/photo-delicious-hamburger-isolated-white-background_125540-3378.jpg?t=st=1721864346~exp=1721867946~hmac=241453fddecd2196fca69d5d26a9dbedd230d88cdeb56e652ee1231b69ba46ac&w=740' },
  { id: 2, name: 'Bacon Burger', description: 'A burger with crispy bacon and cheese.', price: 7, image: 'https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431747.jpg?t=st=1721864627~exp=1721868227~hmac=f410af3d1226af998975957bd734651eb35530fc323c5587b11c049625ad1bae&w=826' },
  { id: 3, name: 'Veggie Burger', description: 'A healthy veggie burger with avocado.', price: 6, image: 'https://img.freepik.com/premium-photo/delicious-hamburger-with-cheese_772702-3894.jpg?w=360' },
  { id: 4, name: 'Double Burger', description: 'A double patty burger with extra cheese.', price: 8, image: 'https://img.freepik.com/premium-photo/double-burger-with-cheddar-bacon-gray-surface_875825-160539.jpg?w=826' },
  // Add more burgers as needed
];

const Order = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState([]);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [liveLocation, setLiveLocation] = useState('');
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  // Function to add a burger to the cart
  const addToCart = (burger) => {
    setLoading(true);
    setTimeout(() => {
      setCart((prevCart) => {
        const existingBurger = prevCart.find((item) => item.id === burger.id);
        if (existingBurger) {
          return prevCart.map((item) =>
            item.id === burger.id ? { ...item, quantity: item.quantity + 1 } : item
          );
        } else {
          return [...prevCart, { ...burger, quantity: 1 }];
        }
      });
      setLoading(false);
    }, 500);
  };

  // Function to increase quantity
  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrease quantity
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Function to remove item from cart
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Function to fetch user's location
  const FetchLiveLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        try {
          const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=YOUR_ACTUAL_API_KEY`);
          const data = await response.json();
          const location = data.results[0].components;
          setLiveLocation(`${location.city || location.town || location.village}, ${location.state}, ${location.country}`);
        } catch (error) {
          console.error('Error fetching live location:', error);
        }
      });
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };
  

  // API_KEY with your actual API key from OpenCage Geocoder.

  // Function to confirm order
  const confirmOrder = () => {
    setOrderConfirmed(true);
    setTimeout(() => {
      alert('Order confirmed!');
      setOrderConfirmed(false);
      setCart([]);
      setLiveLocation('');
    }, 9000);
  };

  // Filtered and searched burgers
  const filteredBurgers = burgerData.filter((burger) =>
    burger.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <>
    <div className="min-h-screen bg-black text-white border-b-2 border-primary ">
      <nav className="">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl">Burger Shop</h1>
            <button
              className="bg-white text-blue-500 px-4 py-2 rounded"
              onClick={() => document.getElementById('order-page').scrollIntoView({ behavior: 'smooth' })}
            >
              Order Now
            </button>
          </div>
        </div>
      </nav>

      <header className="h-[60vh] flex flex-col justify-center items-center order text-white py-20 text-center">
        <h2 className="text-4xl font-bold">Welcome to Burger Shop</h2>
        <p className="mt-4 text-xl">Order your favorite burgers online!</p>
      </header>

      <main id="order-page" className="container px-4 md:px-20 py-8">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search for burgers..."
            className="border p-2 rounded w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {filteredBurgers.map((burger) => (
            <div key={burger.id} className="bg-white text-black p-4 rounded shadow">
              <img src={burger.image} alt={burger.name} className="w-full h-44  object-contain rounded mb-4" />
              <h3 className="text-xl font-bold mb-2">{burger.name}</h3>
              <p className="mb-4">{burger.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold">${burger.price}</span>
                <button
                  className="bg-primary text-black px-4 py-2 rounded"
                  onClick={() => addToCart(burger)}
                >
                  {loading ? 'Ordering...' : 'Order'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4">Your Cart</h3>
          {cart.length > 0 ? (
            cart.map((item) => (
              <div key={item.id} className="flex justify-between items-center mb-4">
                <span>{item.name}</span>
                <div className="flex items-center">
                  <button
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                    onClick={() => decreaseQuantity(item.id)}
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    className="bg-gray-300 text-gray-700 px-2 py-1 rounded"
                    onClick={() => increaseQuantity(item.id)}
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-1 rounded ml-2"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty.</p>
          )}
          <div className="mt-4">
            <h3 className="text-xl font-bold">Total: ${totalPrice}</h3>
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-2xl font-bold mb-4 text-black">Your Location</h3>
          {location ? (
            <p>
              {location.city}, {location.region}, {location.country_name}
            </p>
          ) : (
            <p>Loading location...</p>
          )}
        </div>

        <div className="mt-8">
          <button
            className="bg-primary text-white  px-4 py-2 rounded"
            onClick={FetchLiveLocation}
          >
            Fetch Live Location
          </button>
          {liveLocation && (
            <div className="mt-4">
              <input
                type="text"
                className="border p-2 rounded w-full text-white"
                value={liveLocation}
                readOnly
              />
              <button
                className="bg-primary text-white px-4 py-2 rounded mt-2"
                onClick={confirmOrder}
              >
                Confirm and Order
              </button>
            </div>
          )}
        </div>

        {orderConfirmed && (
          <div className="mt-8 text-center">
            <p className="text-2xl font-bold text-white">Order Confirmed!</p>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
              onClick={() => document.getElementById('order-page').scrollIntoView({ behavior: 'smooth' })}
            >
              Back to Top    
            </button>
          </div>
        )} 
      </main>
 
     <div className='border-t-2 border-primary pt-8 shadow-md bg-[#080808] py-16'>
     <Slide  className='shadow-md'/>
     </div>
   <div className='mt-12'>
   <Newsletter />
   </div>
    <Footer />
    
    </div>
    </>
  );
};

   

export default Order;
