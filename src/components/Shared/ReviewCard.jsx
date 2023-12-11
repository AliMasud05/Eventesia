"use client";
import Image from 'next/image';
import React from 'react';

const ReviewCard = ({ author }) => {
    return (
        <div className="review-card">
                <div className='py-5 text-center'>
                    <div className='flex justify-center'>
                        <Image

                            width={500}
                            height={500}
                            sizes="100vw"
                            style={{ width: '50px', height: '60px', borderRadius: '50%,' }}
                            src="https://i.ibb.co/xLMrt35/review.png"
                            alt='' />
                    </div>
                    <br />
                   

                    <p className='mx-6'>
                         <span className='italic'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, accusamus.</span> 
                    </p>
                    <h1>- <span>${author}</span></h1>

                   
                </div>
         
        </div>
    );
};

export default ReviewCard;