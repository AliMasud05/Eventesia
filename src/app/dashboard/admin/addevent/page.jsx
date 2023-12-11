'use client';
import React,{ useState } from 'react';
import axios from 'axios';

const Page = () => {
    const [formData, setFormData] = useState({
        title: '',
        location: '',
        ticket: '',
        price: '',
        guest: '',
        image: '',
        rating: '',
        about: '',
    });

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/events', formData); 
            if (response.status === 201) {
                console.log('Event created successfully');
            } else {
                console.error('Event creation failed:', response.data.error);
            }
        } catch (error) {
            console.error('Error creating event:', error);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Add Event</h1>
            <form onSubmit={handleSubmit} className="max-w-sm">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Location:</label>
                    <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Ticket Count:</label>
                    <input
                        type="number"
                        name="ticket"
                        value={formData.ticket}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Guest:</label>
                    <input
                        type="text"
                        name="guest"
                        value={formData.guest}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Image URL:</label>
                    <input
                        type="text"
                        name="image"
                        value={formData.image}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Rating:</label>
                    <input
                        type="text"
                        name="rating"
                        value={formData.rating}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">About:</label>
                    <textarea
                        name="about"
                        value={formData.about}
                        onChange={handleFormChange}
                        required
                        className="border p-2 w-full rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white font-medium py-2 px-4 rounded hover:bg-blue-700"
                >
                    Create Event
                </button>
            </form>
        </div>
    );
}

export default Page;
