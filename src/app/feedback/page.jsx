'use client'
import { useSession } from "next-auth/react";
import { useEffect, useState } from 'react';


const Feedback = () => {
    const session = useSession();


    const [data, setData] = useState({})
    useEffect(() => {

        if (session.data) {


            const user = session?.data?.user;


            setData(user);
        }

    }, [session]);
    console.log(data?.name);


    const [userData, setUserData] = useState({})

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        rating: 5,
        comments: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitted(true);
    };

    const clearForm = () => {
        setFormData({
            name: '',
            email: '',
            rating: 5,
            comments: '',
        });
        setIsSubmitted(false);
    };

    return (
        <div className="max-w-xl mx-auto p-4 my-40 ">
            <h1 className="text-2xl font-bold mb-4">Share Your Experience</h1>
            {isSubmitted ? (
                <div className="bg-green-100 border-green-400 text-green-700 border-l-4 p-4 mb-4">
                    Thank you for your feedback!
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="name">
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={data?.name}
                            onChange={handleChange}
                            required
                            className="border rounded-md p-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="email">
                            Email:
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            defaultValue={data?.email}
                            onChange={handleChange}
                            required
                            className="border rounded-md p-2"
                        />
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="rating">
                            Rating:
                        </label>
                        <select
                            id="rating"
                            name="rating"
                            value={formData.rating}
                            onChange={handleChange}
                            className="border rounded-md p-2"
                        >
                            <option value="5">5 (Excellent)</option>
                            <option value="4">4 (Good)</option>
                            <option value="3">3 (Average)</option>
                            <option value="2">2 (Fair)</option>
                            <option value="1">1 (Poor)</option>
                        </select>
                    </div>
                    <div className="flex flex-col">
                        <label className="font-medium" htmlFor="comments">
                            Comments/Suggestions:
                        </label>
                        <textarea
                            id="comments"
                            name="comments"
                            value={formData.comments}
                            onChange={handleChange}
                            className="border rounded-md p-2"
                        />
                    </div>
                    <div className="flex flex-col space-y-2">
                        <button
                            type="submit"
                            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                        >
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={clearForm}
                            className="bg-gray-300 p-2 rounded-md hover:bg-gray-400"
                        >
                            Clear Form
                        </button>
                    </div>
                </form>
            )}
        </div>
    );
};

export default Feedback;
