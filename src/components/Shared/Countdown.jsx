'use client'
import { Button } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { BiCurrentLocation, BiLocationPlus, BiSolidLocationPlus, BiTimeFive } from 'react-icons/bi'

const Countdown = ({ eventDate }) => {
    const calculateRemainTime = () => {
        const difference = new Date(eventDate) - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateRemainTime());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateRemainTime());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = (value) => {
        return value < 10 ? `0${value}` : value;
    };
  return (
      <div className='sm:h-[800px] lg:h-[300px]  bg-[#FFDEB4] pb-3'>
          <div className='grid grid-cols-1 lg:grid-cols-3 items-center place-content-center place-items-center max-w-[1246px] mx-auto '>
             
              <div className="w-full flex items-center h-[300px]  md:w-auto ">
                  <Image
                      src="https://i.ibb.co/dPwSfFC/2021-12-largeimg-757100042.jpg"
                      alt="Description of the new image"
                      width={500}
                      height={300}
                      layout="responsive"
                      className="w-full h-[250px] md:h-full  sm:h-full md:w-auto"
                      style={{ objectFit: 'cover' }}
                  />
              </div>
              <div className='flex flex-col gap-2'>
                <h1 className='text-2xl font-semibold'>Featured Event</h1>
                <h1 className='text-xl'>Barcelona Food Truck Festival</h1>
                <p className='text-sm'>Ticket start from $<span>55</span></p>
                <hr className='h-1 w-[300px]'/>
                  <p className='flex items-center'><span><BiTimeFive className='mr-1 text-xl' /></span> Start 20.00pm - 22.00 pm</p>
                  <p className='flex items-center'><span><BiSolidLocationPlus className='mr-1 text-xl' /></span>Barcelona, Spain</p>

              </div>
              <div>
                  {timeLeft.days > 0 && (
               <div className='flex '>
                      <div className='flex flex-col '>
                          <h className='text-4xl font-bold'>{timeLeft.days}</h>
                          <h1 className='text-md font-semibold'>DAYS</h1>
                      </div>
                      <hr className='h-[40px] w-[3px] bg-black mx-2' />
                      <div className='flex flex-col '>
                          <h1 className='text-4xl font-bold'>{addLeadingZero(timeLeft.hours)}</h1>
                          <h1 className='text-md font-semibold'>HOURS</h1>
                      </div>
                      <hr className='h-[40px] w-[3px] bg-black mx-2' />
                      <div className='flex flex-col '>
                          <h1 className='text-4xl font-bold'>{addLeadingZero(timeLeft.minutes)}</h1>
                          <h1 className='text-md font-semibold'>MINUTES</h1>
                      </div>
                      <hr className='h-[40px] w-[3px] bg-black mx-2' />
                      <div className='flex flex-col '>
                          <h1 className='text-4xl font-bold'>{addLeadingZero(timeLeft.seconds)}</h1>
                          <h1 className='text-md font-semibold'>SECONDS</h1>
                      </div>
               </div>
                  )}
                  {timeLeft.days < 0 && (
               <div className='flex '>
                      <div className='flex flex-col '>
                          <h className='text-4xl font-bold'>{timeLeft.days}</h>
                          <h1 className='text-md font-semibold'>DAYS</h1>
                      </div>
                      <hr className='h-[40px] w-[3px] bg-black mx-2' />
                      <div className='flex flex-col '>
                          <h1 className='text-4xl font-bold'>{addLeadingZero(timeLeft.hours)}</h1>
                          <h1 className='text-md font-semibold'>HOURS</h1>
                      </div>
                      <hr className='h-[40px] w-[3px] bg-black mx-2' />
                      <div className='flex flex-col '>
                          <h1 className='text-4xl font-bold'>{addLeadingZero(timeLeft.minutes)}</h1>
                          <h1 className='text-md font-semibold'>MINUTES</h1>
                      </div>
                      <hr className='h-[40px] w-[3px] bg-black mx-2' />
                      <div className='flex flex-col '>
                          <h1 className='text-4xl font-bold'>{addLeadingZero(timeLeft.seconds)}</h1>
                          <h1 className='text-md font-semibold'>SECONDS</h1>
                      </div>
               </div>
                  )}

               <div className='flex gap-2 mt-4'>

                      <Link href='/register'>
                          <Button className='uppercase bg-[#0F2C59] text-white hover:outline-double ' type="primary">watch video</Button>
                      </Link>
                      <Link href='/register'>
                          <Button className='uppercase bg-[#0F2C59] text-white hover:outline-double ' type="primary">watch video</Button>
                      </Link>
               </div>
              </div>
        </div>
    </div>
  )
}

export default Countdown