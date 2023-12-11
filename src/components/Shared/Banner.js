'use client'
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  const banners = [
    {
      imageUrl:
        "https://i.ibb.co/2dCTGPf/22688483-157688124830268-5089097818283175713-n-15-59975.jpg",
      heading: "Banner 1 Heading",
      description: "Banner 1 Description",
    },
    {
      imageUrl:
        "https://i.ibb.co/vdb9d7W/Destination-Wedding-Planners-1024x683.jpg",
      heading: "Banner 2 Heading",
      description: "Banner 2 Description",
    },
  ];

  return (
    <div className="bg-blue-500 h-[600px]">
      <div className="container mx-auto  py-4 px-2 md:px-4 lg:px-8">
        <Slider {...settings}>
          {banners.map((banner, index) => (
            <div key={index}>
              <div className="text-white text-center">
                <div className="mx-auto max-w-full h-auto w-64">
                  {" "}
                  <Image
                    src={banner.imageUrl}
                    alt={`Banner ${index + 1}`}
                    className="object-cover w-full h-72 " 
                  />
                </div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-2">
                  {banner.heading}
                </h2>
                <p className="text-sm md:text-base lg:text-lg mb-4">
                  {banner.description}
                </p>
                <a
                  href="#"
                  className="bg-white text-blue-500 font-semibold py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-500 hover:text-white"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
