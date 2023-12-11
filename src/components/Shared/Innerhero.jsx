'use client'
import React, { useEffect, useState } from 'react'
import { FaRegCalendarDays } from "react-icons/fa6";
import toast from 'react-hot-toast';

const Innerhero = ({ eventDate }) => {

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

    //form function 
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        agreeTerms: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const inputValue = type === 'checkbox' ? checked : value;

        setFormData({
            ...formData,
            [name]: inputValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success('Thanks for joining Event!')
        console.log('Form data:', formData);
    };

    return (
        <div className=' py-4 bg-[#FFDFDF]'> 
            <div className='flex flex-col lg:flex-row items-center justify-end gap-4 lg:w-[1000px] lg:mx-auto'>

                <div className="flex flex-col items-center justify-center w-full lg:w-full ">
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-2xl font-semibold '>Business Leader </h1>
                        <h1 className='text-3xl my-1 '>CONFERENCE 2019 </h1>
                        <h1 className='text-md my-3'>On the day of an event, a good event manager is always the first to arrive and last to leave </h1>
                        <div className='flex gap-2 '>
                            <FaRegCalendarDays className='text-red-600'  size={25}/>

                            <span>20-01-2024 January</span>
                            <span> -Regen Tower,Bangladesh</span>

                        </div>
                        <div className='mt-4 left-0'>
                            <h1 className='text-xl '>Remaining Time</h1>
                            <div className='h-11 w-64 flex py-2 px-2 shadow-lg '>

                                {timeLeft.days > 0 && (
                                    <p className="flex">
                                        <span className="text-4xl font-bold">{timeLeft.days}</span>{' '}
                                        <span className="text-gray-600 font-sans font-semibold ">{timeLeft.days === 1 ? 'day' : 'days'}</span>{' '}
                                        <span className="text-4xl font-bold">{addLeadingZero(timeLeft.hours)}:</span>
                                        <span className="text-4xl font-bold">{addLeadingZero(timeLeft.minutes)}:</span>
                                        <span className="text-4xl font-bold">{addLeadingZero(timeLeft.seconds)}</span>
                                    </p>

                                )}

                                {timeLeft.days <= 0 && (
                                    <p className="flex">
                                        <span className="text-4xl font-bold">{addLeadingZero(timeLeft.hours)}:</span>
                                        <span className="text-4xl font-bold">{addLeadingZero(timeLeft.minutes)}:</span>
                                        <span className="text-4xl font-bold">{addLeadingZero(timeLeft.seconds)}</span>
                                    </p>
                                )}
                            </div>

                        </div>
                    </div>
                  
                </div>
                <div className='w-full lg:w-full'>
                    <form className="max-w-md mx-auto p-6 bg-gray-100 shadow-md rounded-md ">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your email"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">
                                Phone
                            </label>
                            <input
                                type="text"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
                                placeholder="Enter your phone number"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="agreeTerms" className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="agreeTerms"
                                    name="agreeTerms"
                                    checked={formData.agreeTerms}
                                    onChange={handleChange}
                                    className="mr-2 leading-tight"
                                />
                                <span className="text-sm text-gray-700">
                                    I agree to the{' '}
                                    <a href="/terms" className="text-blue-500 underline">
                                        terms and conditions
                                    </a>
                                </span>
                            </label>
                        </div>
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                disabled={!formData.agreeTerms}
                                className={`${formData.agreeTerms ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'
                                    } text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
                            >
                                Join Now
                            </button>
                        </div>
                    </form>
                </div>
            </div>
     </div>
    );
};

export default Innerhero