import React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';





const Mymap = () => {
  // Coordinates for Sango Ota, Ogun State, Nigeria
  const position = [6.6975, 3.2751];

  return (
   <>
   <div className='bg-black md:px-24 px-6 py-10 z-10'>
     <MapContainer center={position} zoom={0} style={{ height: '400px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
    
    </MapContainer>
   </div>
   </>
  );
};

export default Mymap;
