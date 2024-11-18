import React from 'react';
import image from '../assets/green-back.jpeg';

const AccessCode = () => {
     
    return (
        <div 
            className='flex items-center justify-center min-h-screen '
            style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
            <div className='bg-[#000] text-[#0F0] shadow-lg rounded-lg w-[600px] p-8 max-h-screen overflow-auto'>
                <div className='flex flex-col md:flex-row justify-between mb-8 gap-6'>
                    <div className='flex-1'>
                        <h1 className='font-bold text-2xl mb-4 text-center md:text-left'>
                            We Just Messaged You
                        </h1>
                        <p className='text-center md:text-left mb-4'>
                            Please enter the code we sent you:
                        </p>
                        <h2 className='text-center md:text-left mb-6 text-xl'>
                            +44 07970719744
                        </h2>
                    </div>
                    <div className='flex items-center'>
                        <div className='flex flex-col items-center md:items-start'>
                            <h1 className='bg-red-600 text-white text-center p-4 rounded-lg mb-4'>
                                $500
                            </h1>
                            <p className='text-xl text-center'>Continue</p>
                        </div>
                    </div>
                </div>

                <div className='flex justify-center mb-8'>
                    <ul className='flex gap-4'>
                        <li className='border py-6 px-6 rounded-lg text-center'></li>
                        <li className='border py-6 px-6 rounded-lg text-center'></li>
                        <li className='border py-6 px-6 rounded-lg text-center'></li>
                        <li className='border py-6 px-6 rounded-lg text-center'></li>
                    </ul>
                </div>

                <div className='flex justify-center'>
                    <button className='h-12 w-48 border border-[#0F0] bg-[#000] rounded-md text-[#0F0] font-semibold'>
                        Verify
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AccessCode;
