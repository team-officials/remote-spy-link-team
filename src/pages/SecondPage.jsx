import React from 'react';
import Image from '../assets/image-black.jpg'; // Ensure the path is correct

const SecondPage = () => {
  return (
    <div className="h-screen">  
      <div
        className="bg-cover bg-center h-full flex justify-center items-center"  
        style={{
          backgroundImage: `url(${Image})`
        }}
      >
        <div className="w-12 h-12 rounded-full relative animate-rotate">
          <div className="absolute inset-0 rounded-full border-4 border-white animate-prix-clip"></div>
          <div className="absolute inset-2 rounded-full border-4 border-orange-600 transform rotate-[180deg] animate-prix-clip"></div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
