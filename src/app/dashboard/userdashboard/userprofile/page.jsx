'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true); 
    const session = useSession();
    const user = session?.data;
    const email = user?.user?.email;

    useEffect(() => {
        const fetchData = async () => {
            if (email) {
                try {
                    const apiUrl = `http://localhost:3000/api/auth/register?email=${email}`;
                    const response = await axios.get(apiUrl);
                    setUserData(response?.data[0] ); 
                    console.log(response.data[0],'response data');
                   
                } catch (error) {
                    console.error('Error fetching data:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, [email]);

    return (
        <div className="container mx-auto py-6 flex flex-col gap-4">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <Image

                    width={500}
                    height={500}
                    sizes="100vw"
                    style={{
                        width: '318px', height: '180px' }}
                    src={user?.user?.image ? user.user.image : "https://i.ibb.co/ZNTDfpF/user-456212.png"}                    alt='' />
                <h2 className="text-xl font-semibold">Name : {userData?.name ||user?.user?.name}</h2>
                <p className="text-gray-600">Contact : {userData?.contact}</p>
                <p className="text-gray-600">Email: {userData?.email || user?.user?.email}</p>
                <p className="text-gray-600">Gender: {userData?.gender}</p>
            </div>
            <Link href='/dashboard/userdashboard/editprofile'>
                <button className='bg-[#FF9209] py-2 px-3 text-base font-mono rounded '  >Edit Profile</button>
            </Link>
            <div>
            </div>
        </div>
    );
}

export default Page