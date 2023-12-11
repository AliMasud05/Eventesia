'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Page = () => {
    const [userData, setUserData] = useState([]);
    const [loading, setLoading] = useState(true);
    const session = useSession();
    const user = session?.data;
    const email = user?.user?.email;

    const router = useRouter();
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    console.log(formData)

    const handleFormSubmit = async (e) => {
        e.preventDefault();
       

        try {
            const response = await fetch(`http://localhost:3000/api/auth/register?id=${userData._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {                
                console.log("Post updated successfully!");
            } else {
                console.error("Failed to update post");
            }
        } catch (error) {
            console.error("Error updating post:", error);
        }
    };

    useEffect(() => {
       

        const fetchData = async () => {
            if (email) {
                try {
                    const apiUrl = `http://localhost:3000/api/auth/register?email=${email}`;
                    const response = await axios.get(apiUrl);
                    setUserData(response?.data[0]);
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
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
            <form onSubmit={handleFormSubmit}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <div className="mb-4">
                        <label className="block text-gray-600">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder={userData.name}
                            value={formData.username}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder={userData.name}
                            value={userData.name}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder={userData.email}
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Image URL</label>
                        <input
                            type="text"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Contact Number</label>
                        <input
                            type="text"
                            name="contact"
                            placeholder={userData.contact}
                            value={formData.contact}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600">Address</label>
                        <input
                            type="text"
                            name="address"
                            placeholder={userData.address}
                            value={formData.address}
                            onChange={handleInputChange}
                            className="border border-gray-300 rounded px-3 py-2 w-full"
                        />
                    </div>
                   
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    >
                        Save Profile
                    </button>
                </div>
            </form>
        </div>
    );
}


export default Page