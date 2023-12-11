import Image from 'next/image';
import React from 'react';

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap px-5 py-10">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 lg:w-1/3 lg:mb-0 mb-4">
            Our Best Eventesia Photo Gallery
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base">
<a className='underline'>Eventesia</a> is a full-service design and planning company for weddings and events. The company’s website is clean, well-organized, and thoughtfully-designed to make navigation effortless for visitors.           </p>
        </div>
        <div className="flex flex-wrap -m-1">
          <div className="flex flex-wrap w-full lg:w-1/2">
            <div className="md:p-2 p-1 w-full lg:w-1/2">
              <Image
                alt="Picture of the author"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/TKnjbDK/Experian-India-Conclave-by-Pegasus-Events-Pvt-Ltd-1.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full lg:w-1/2">
              <Image
                alt="gallery2"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/JFJsrHG/product-500x500.webp"
              />
            </div>
            <div className="md:p-2 p-1 w-full">
              <Image
                width={500}
                height={500}
                alt="gallery3"
                className="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/S33Kmx6/planners-arsim-international-events-wedding-planners-weddingplanning-2-15-426166-166478480199001.jpg"
              />
            </div>
          </div>

          <div className="flex flex-wrap w-full lg:w-1/2">
            <div className="md:p-2 p-1 w-full">
              <Image
                alt="gallery4"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/vdb9d7W/Destination-Wedding-Planners-1024x683.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full lg:w-1/2">
              <Image
                alt="gallery5"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/Fxw9K5y/weddingplanners-shadow-event-management-coupleentry-15-396129-164215790157156.jpg"
              />
            </div>
            <div className="md:p-2 p-1 w-full lg:w-1/2">
              <Image
                alt="gallery6"
                width={500}
                height={500}
                className="w-full h-full object-cover object-center block"
                src="https://i.ibb.co/2dCTGPf/22688483-157688124830268-5089097818283175713-n-15-59975.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
