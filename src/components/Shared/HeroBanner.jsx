'use client'
import React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import { BiArrowBack } from "react-icons/bi";
import Image from "next/image";
import { Button } from "antd";
import Link from "next/link";

const HeroBanner = () => {
  return (
    <div className="relative text-white text-[20px] w-full max-w-[1246px] mx-auto mt-2 mb-1">
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        showIndicators={false}
        showStatus={false}
        renderArrowPrev={(clickHandler, hasPrev) => (
          <div
            onClick={clickHandler}
            className="absolute right-[31px] md:right-[51px] bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="text-sm md:text-lg" />
          </div>
        )}
        renderArrowNext={(clickHandler, hasNext) => (
          <div
            onClick={clickHandler}
            className="absolute right-0 bottom-0 w-[30px] md:w-[50px] h-[30px] md:h-[50px] bg-black z-10 flex items-center justify-center cursor-pointer hover:opacity-90"
          >
            <BiArrowBack className="rotate-180 text-sm md:text-lg" />
          </div>
        )}
      >

        <div>
          <Image
            src="https://i.ibb.co/sR8LL0n/event-1.jpg"
            alt="Description of the new image"
            width={500}
            height={300}
            style={{ height: '500px' }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center font-serif  text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            <h1 className="font-serif font-bold text-[#d2d1dc]">Welcome To Eventsia</h1>
            <h1 className="font-serif font-bold text-[#ceced6]"> Celebrations</h1>

            <Link href='/register'>
              <Button className='uppercase bg-[#0F2C59] text-white hover:outline-double font-bold font-serif' type="primary">Register</Button>
            </Link>
          </div>
        </div>        

        <div>         
          <Image
            src="https://i.ibb.co/m8WpjBW/school-event.jpg"
            alt="Description of the new image"
            width={500}
            height={300}
            style={{height:'500px'}}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center font-serif  text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            <h1 className="font-serif font-bold text-[#d2d1dc]">Welcome To Eventsia</h1>
            <h1 className="font-serif font-bold text-[#ceced6]"> Celebrations</h1>

            <Link href='/register'>
              <Button className='uppercase bg-[#0F2C59] text-white hover:outline-double font-bold font-serif' type="primary">Register</Button>
            </Link>
          </div>
        </div>
        <div className="relative" style={{ height: '500px' }}>
          <Image
            src="https://i.ibb.co/GMc8QPt/working-event.jpg"
            alt="Description of the new image"
            width={500}
            height={300}
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center font-serif  text-white/[0.9] text-[15px] md:text-[30px] uppercase font-medium cursor-pointer hover:opacity-90">
            <h1 className="font-serif font-bold text-[#272630]">Welcome To Eventsia</h1>
            <h1 className="font-serif font-bold text-[#333343]"> Celebrations</h1>

            <Link href='/register'>
              <Button className='uppercase bg-[#0F2C59] text-white hover:outline-double font-bold font-serif' type="primary">Register</Button>
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default HeroBanner;