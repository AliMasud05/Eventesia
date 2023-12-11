import Image from 'next/image'
import React from 'react'
import { IoMdStarOutline } from "react-icons/io";


const HotelCard = () => {
  const hotelData =[{
    name:"Premium Hotel",
    image: "https://i.ibb.co/nm39zxj/valeriia-bugaiova-p-PHge-Hz1uk-unsplash.jpg",
    rating:5,
    description:"The Panoramic Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation, in the enchanting setting ."
  },
    {
      name: "Standard Hotel",
      image: "https://i.ibb.co/bmSkNqd/waldemar-2-XDs-Kxu-Rv-s-unsplash.jpg",
      rating: 4,
      description: "The rooms at the Panoramic Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay in Taormina, suggesting itineraries,"
    },
    {
      name: "Comfort Hotel",
      image: "https://i.ibb.co/0C1hSdC/carlos-machado-Tm-Rckxj-Jo-P8-unsplash.jpg",
      rating: 3,
      description: "Our (HN) is in a superb location with friendly and helpful staff. The hostel offers comfortable, clean rooms and fantastic access to (CN‘s) most famous sights."
    },
]
  const StarRating = (rating) => {
    
    const stars =[];

      for (let i = 1; i <= rating; i++) {
        stars.push(
          <IoMdStarOutline size={25} className='text-red-900' />
        )    }

   return stars;
  };
  return (
    <div className='py-4'>
      <h1 className='text-2xl font-semibold text-center uppercase text-[#2B2A4C] mb-10 bg-[#C5FFF8] py-2'>Booking Your Loveable hotel</h1>

      <div className=' grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 auto-cols-max gap-3 place-content-center place-items-center lg:w-[900px] mx-auto'>
      
      {
        hotelData.map((hotel)=>
          <div className='w-full lg:w-72 text-center shadow-lg pb-4 px-2 '>
            <Image

              width={500}
              height={500}
              sizes="100vw"
              style={{ borderRadius: '2px', width: '280px', height: '200px', margin: '0 auto' }}
              className='sm:w-full'
              src={hotel.image}
              alt='hotel photo' />
            <h1 className='text-xl font-serif font-semibold mt-3'>{hotel.name}</h1>
            <h1 className='flex justify-center '>

            {
              StarRating(hotel.rating)
            }
            </h1>
            <p className='font-serif text-center text-sm'>{hotel.description}</p>

            <button className='py-1 px-6 font-serif font-medium my-2
        rounded border bg-[#9f9f99] hover:bg-[#9D76C1]'>Book</button>
          </div>
        )
      }    

    </div>
    </div>
  )
}

export default HotelCard