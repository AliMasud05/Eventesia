import Image from 'next/image';
import React from 'react';

const Sponsor = () => {
    const sponsorLogos = [
        'https://i.ibb.co/LznDsNb/sponsor-5.png',
        'https://i.ibb.co/42h4yVh/sponsor-1.png',
        'https://i.ibb.co/TP7g8wv/sponsor-2.png',
        'https://i.ibb.co/JyZX7WW/sponsor-3.png',
        'https://i.ibb.co/jHwhvc8/sponsor-4.png',
        'https://i.ibb.co/LznDsNb/sponsor-5.png',
        'https://i.ibb.co/42h4yVh/sponsor-1.png',
        'https://i.ibb.co/TP7g8wv/sponsor-2.png',
        'https://i.ibb.co/JyZX7WW/sponsor-3.png',
        'https://i.ibb.co/jHwhvc8/sponsor-4.png',
        'https://i.ibb.co/LznDsNb/sponsor-5.png',
        'https://i.ibb.co/42h4yVh/sponsor-1.png',
        'https://i.ibb.co/TP7g8wv/sponsor-2.png',
        'https://i.ibb.co/JyZX7WW/sponsor-3.png',
        'https://i.ibb.co/jHwhvc8/sponsor-4.png',
        'https://i.ibb.co/LznDsNb/sponsor-5.png',
        'https://i.ibb.co/42h4yVh/sponsor-1.png',
        'https://i.ibb.co/TP7g8wv/sponsor-2.png',
        'https://i.ibb.co/JyZX7WW/sponsor-3.png',
        'https://i.ibb.co/jHwhvc8/sponsor-4.png',
    ];

    return (
        <div className='bg-slate-100 py-10'>
            <h1 className='text-3xl text-center font-[560] mb-8 '>Official Designated Partner</h1>
            <div className='w-full lg:w-[1200px] mx-auto mb-9 overflow-hidden'>
                <div className='grid grid-cols-3 lg:grid-cols-5 auto-cols-max gap-2 place-content-center place-items-center scroll'>
                    {sponsorLogos.map((logo, index) => (
                        <Image
                            width={500}
                            height={500}
                            sizes="100vw"
                            key={index}
                            src={logo}
                            alt={`Sponsor ${index}`}
                            style={{ width: '200px', height: '50px', border: '2px' }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Sponsor;