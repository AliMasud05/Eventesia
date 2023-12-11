import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";


const Hero = () => {
  return (
      <section className="text-gray-600 body-font py-14">
          <div className="container mx-auto flex gap-2 px-5 py-24  flex-col lg:flex-row items-center">
              
              <div className=" flex flex-col lg:w-1/2">
                
                <h3 className='text-green-600 text-xl'>Why join events</h3>
                <h1 className='text-4xl font-sans font-semibold'>You should join the event </h1>
                <p className='my-2 leading-7 text-lg'>
                      Brilliant Event Planning specializes in planning weddings and events in tents, private homes, and raw spaces. Their website does a great job of telling the team’s story and making their vision clear.
                </p>
                  <div className='border shadow-md px-3 py-2 mt-2 rounded flex gap-3 '>
                      <h1><FaRegCalendarAlt size={25} className='text-red-600'/></h1>
                      <div className=''>
                          <h1>Event Date</h1>
                          <p className='text-md mb-3 leading-6'> This collaborative venue diagramming tool is perfect for anyone involved in  event planning, whether you're a professional planner or a hotelier.
                          </p>
                      </div>
                  </div>
                <div className='border shadow-xl px-3 py-2 mt-2 rounded flex gap-3 '>
                      <h1><FaRegCalendarAlt size={25} className='text-red-600' /></h1>
                    <div className=''>
                        <h1>Event Date</h1>
                      <p className='text-md mb-3 leading-6'> This collaborative venue diagramming tool is perfect for anyone involved in  event planning, whether you're a professional planner or a hotelier.
                      </p>
                    </div>
                </div>
                  <Link href='/service' className='bg-[#FF9209] my-3 w-[150px] rounded-md py-3 px-3'>
                <button className='text-md font-semibold'>Buy Ticket Now</button>
               </Link>

              </div>
              <div className="lg:max-w-lg w-full  lg:w-1/2 mb-10 md:mb-0 ">
                  <Image className="object-cover object-center rounded h-auto" alt="Picture of the author"
                      width={500}
                      height={500} 
                    
                      src="https://i.ibb.co/wKL46wH/istockphoto-1340256496-612x612.jpg" />
              </div>
          </div>
      </section>
  )
}

export default Hero