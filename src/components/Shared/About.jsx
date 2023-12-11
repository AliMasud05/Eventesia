'use client';
import React from 'react';

const About = () => {
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold text-center text-gray-900 mb-6">About Us</h1>
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <p className="text-gray-700 text-base">
                    Welcome to [Your Company Name], your trusted partner for creating unforgettable events. We have been in the event management industry for years, specializing in [types of events you manage].
                </p>
                <p className="text-gray-700 text-base mt-4">
                    Our dedicated team of professionals is committed to making your event a huge success. Whether it&apos;s a corporate event, wedding, or any other special occasion, we take care of every detail, leaving you stress-free to enjoy your event to the fullest.
                </p>
                <p className="text-gray-700 text-base mt-4">
                    Contact us today to discuss your upcoming event and let us make it a memorable experience for you.
                </p>
            </div>
        </div>
    );
};

export default About;