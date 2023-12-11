import Image from 'next/image'
import React from 'react'
import { FaHandshakeSimple } from 'react-icons/fa6';
import Button from "@/components/Button/Button";
import Link from 'next/link';



const Harmohny = () => {
  return (
  
      <div className='bg-[#f7f7f7] py-20 flex max-w-[1246px] mx-auto my-1 '>
          <div className='flex flex-col lg:flex-row justify-center items-center  mx-auto '>
              <div className='w-1/2 flex flex-col sm:justify-center sm:my-3 relative '>
                  <hr className='w-[100px] bg-black h-1 absolute left-[-1.75rem]  top-[-0.5rem]' />
                  <h3 className='mt-5 tracking-widest'>WE ARE HARMONY</h3>
                  <h1 className='text-3xl tracking-widest'><span className='font-bold mr-2'>No.1</span>Events <br /> Management</h1>
                  <p className='my-2 leading-6 wrap'>Teamwork is the ability to work together toward a common vision. The ability to direct
                      individual accomplishments toward organizational objectives. It is the fuel that allows common people to attain uncommon results.
                  </p>
                  <Link href='/' className=' mt-3 '>
                      <button className='text-[12px] shadow-md border border-[#d5d4d3] rounded-xl  py-[6px] px-[10px]  font-serif font-semibold bg-[#FF9209] hover:text-white'>TICKET & DETAILS</button>
                  </Link>  
              </div>

              <div class="grid lg:grid-cols-3 sm:grid-cols-3 gap-0 border w-full lg:w-1/2">
                  <div class="basis-1/3 hover:bg-red-400  border flex flex-col justify-center items-center text-center py-5">
                      <FaHandshakeSimple className="text-3xl mb-3 hover:text-4xl" />
                      <h1 className='text-lg font-semibold my-1 '>Friendly Team</h1>
                      <p className='text-[13px]' >More than 200 teams</p>
                  </div>
                  <div class="basis-1/3 hover:bg-red-400  border flex flex-col justify-center items-center text-center py-5">
                      <FaHandshakeSimple className="text-3xl mb-3 hover:text-4xl" />
                      <h1 className='text-lg font-semibold my-1 '>Friendly Team</h1>
                      <p className='text-[13px]' >More than 200 teams</p>
                  </div>
                  <div class="basis-1/3 hover:bg-red-400  border flex flex-col justify-center items-center text-center py-5">
                      <FaHandshakeSimple className="text-3xl mb-3 hover:text-4xl" />
                      <h1 className='text-lg font-semibold my-1 '>Friendly Team</h1>
                      <p className='text-[13px]' >More than 200 teams</p>
                  </div>
                  <div class="basis-1/3 hover:bg-red-400  border flex flex-col justify-center items-center text-center py-5">
                      <FaHandshakeSimple className="text-3xl mb-3 hover:text-4xl" />
                      <h1 className='text-lg font-semibold my-1 '>Friendly Team</h1>
                      <p className='text-[13px]' >More than 200 teams</p>
                  </div>
                  <div class="basis-1/3 hover:bg-red-400  border flex flex-col justify-center items-center text-center py-5">
                      <FaHandshakeSimple className="text-3xl mb-3 hover:text-4xl" />
                      <h1 className='text-lg font-semibold my-1 '>Friendly Team</h1>
                      <p className='text-[13px]' >More than 200 teams</p>
                  </div>
                  <div class="basis-1/3 hover:bg-red-400  border flex flex-col justify-center items-center text-center py-5">
                      <FaHandshakeSimple className="text-3xl mb-3 hover:text-4xl" />
                      <h1 className='text-lg font-semibold my-1 '>Friendly Team</h1>
                      <p className='text-[13px]' >More than 200 teams</p>
                  </div>



              </div>
          </div>
  </div>
  )
}

export default Harmohny