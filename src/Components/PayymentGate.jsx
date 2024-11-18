import React from 'react'
import { MdLock } from "react-icons/md";
import { PiBank } from "react-icons/pi";
import { FaCircleMinus } from "react-icons/fa6";


const PayymentGate = () => {
     return (
          <div>
               <div>
                    <nav class="flex justify-center mt-2 mb-2 text-center leading-10">
                         <div className='w-[400px] text-center align-middle '>

                              <div class="flex gap-4  justify-center items-center">
                                   <div class="bg-green-600 rounded-full h-[30px] w-[30px] flex items-center justify-center p-[6px]">
                                        <MdLock className='text-white' />
                                   </div>
                                   <div class="text-[20px]">Secured by Kora</div>
                              </div>

                              <div className='flex justify-center w-[350px] mt-3  '>
                                   <div class=" ">
                                        <PiBank className='text-3xl' />
                                   </div>


                              </div>
                              <div className=' mt-3'>
                                   <p className='text-3xl'>Pay $5,409.00</p>
                                   <p className='text-[14px] mt-4 font-bold text-slate-500'>Tap to copy amount</p>
                              </div>

                              <div className=' mt-8 bg-[#FFF6ED] rounded-lg p-6'>
                                   <p className='text-2xl text-[#914F08] font-bold'>Tranfer Exactly, <span className='underline'> $5,409.00</span> to the wallet address below.</p>

                              </div>

                              <div className=' mt-8 bg-[#F1F6FA] rounded-lg pt-4 w-[400px] justify-center  text-center leading-5'  >
                                   <div className=''>
                                        <div className='flex justify-center mt-4 mb-4 '>
                                             <img className='h-10' src="https://th.bing.com/th/id/R.a3a2e93906ce132f0adafc2f34aa428a?rik=xWaioVtOJ%2b1bBA&pid=ImgRaw&r=0" alt="" />
                                        </div>

                                        <p>bitcoin wallet address </p>
                                        <p className='text-[#377AD9] text-[14px] font-bold'>bc1qh4fr3r9egvdkqlnkqq3hvzkygmfvykjl5qesnz</p>
                                       
                                   </div>

                                   <div className='flex text-center justify-center rounded-b-3xl mt-4 p-2 bg-[#CFE4FF]'>
                                        <div className='flex justify-center gap-2 rounded-b-3xl'>
                                             <FaCircleMinus className='text-center text-red-600 mt-1' />
                                             <p className='text-[14px]'>| Do not save or reuse this Bitcoin Address</p>
                                        </div>
                                   </div>

                                   
                              </div>

                              <div className='flex text-center justify-center mt-10 '>
                                        <div className='flex justify-center gap-2 rounded-b-full'>
                                             
                                             <p className='text-[20px] text-slate-600'>You will get a confirmation once we receive your payment</p>
                                        </div>
                                   </div>

                         </div>
                    </nav>


               </div>
          </div>
     )
}

export default PayymentGate
