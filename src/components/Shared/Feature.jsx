'use client'
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import EventCard from '@/components/Shared/EventCard';

const Feature = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedFilter, setSelectedFilter] = useState('Rating');

    useEffect(() => {
        const apiUrl = 'http://localhost:3000/api/posts';

        axios.get(apiUrl)
            .then((response) => {
                setProducts(response.data);
                setFilteredProducts((response.data).slice(0,8));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleFilterByTickets = () => {
        const filteredByTickets = products.slice().sort((a, b) => b.price - a.price).slice(0,8);
        setFilteredProducts(filteredByTickets);
        setSelectedFilter('Tickets');
    };

    const handleFilterByRating = () => {
        const filteredByRating = products.sort((a, b) => b.rating - a.rating).slice(0, 8);
        setFilteredProducts(filteredByRating);
        setSelectedFilter('Rating');
    };

   

    return (
        <div className='py-4'>
            <ul className='flex items-center justify-center font-serif font-normal text-white my-3'>
                <li className='mx-2'>
                    <button
                        className='py-1 px-3 text-red-500  rounded-lg'
                        
                    >
                     Filter By
                    </button>
                </li>
                <li className='mx-2'>
                    <button
                        className='py-1 px-3 bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                        onClick={handleFilterByTickets}
                    >
                     Tickets High To Low
                    </button>
                </li>
                <li className='mx-2'>
                    <button
                        className='py-1 px-3 bg-white text-red-500 hover:bg-red-200 hover:text-white rounded-lg'
                        onClick={handleFilterByRating}
                    >
                       Top Rating
                    </button>
                </li>
                
            </ul>

            <ul className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4  w-full md:w-[600px] lg:w-[900px] mx-auto '>
                {filteredProducts.map((product) => (
                    <EventCard key={product._id} product={product} customWidth='false' feature='true' />
                ))}
            </ul>
           
        </div>
    );
};

export default Feature;