'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';

const Page = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const session = useSession();
  const email = session.data?.user?.email;

  const fetchData = () => {
    const apiUrl = `http://localhost:3000/api/ticket?email=${email}`;

    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [email]);

  const handleDeleteUser = (userId) => {
    setIsLoading(true);
    console.log(userId);

    const apiUrl = `http://localhost:3000/api/ticket?id=${userId}`;

    axios.delete(apiUrl)
      .then(() => {
        toast.success('Successfully deleted!');
        setIsLoading(false);
        fetchData(); 
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        setIsLoading(false);
      });
  };

  


  return (
    <div><div className="overflow-x-auto">
      <div>

      </div>
      <table className="table-auto border-separate border border-slate-500  ">


        {/* head */}
        <thead>
          <tr>
            <th className=" border border-slate-600" ></th>
            <th className=" border border-slate-600 text-center font-serif text-green-950 hover:bg-slate-500"> Name</th>
            <th className=" border border-slate-600 text-center font-serif text-green-950  hover:bg-slate-500"> Email</th>
            <th className=" border border-slate-600 text-center font-serif text-green-950  hover:bg-slate-500"> number of ticket</th>
            <th className=" border border-slate-600 text-center font-serif text-green-950  hover:bg-slate-500"> Date</th>
            <th className=" border border-slate-600 text-center font-serif text-green-950  hover:bg-slate-500"> Contact</th>
          </tr>
        </thead>
        {data.length > 0 ? (
          <tbody>
            {data.map((item, index) => (
              <tr key={item._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td className='border border-slate-700 text-center font-serif text-green-950  hover:bg-slate-500'>{item.name}</td>
                <td className='border border-slate-700 text-center font-serif text-green-950  hover:bg-slate-500'>{item.email}</td>
                <td className='border border-slate-700 text-center font-serif text-green-950  hover:bg-slate-500'>{item.ticket}</td>
                <td className='border border-slate-700 text-center font-serif text-green-950  hover:bg-slate-500'>{item.eventDate}</td>
                <td className='border border-slate-700 text-center font-serif text-green-950  hover:bg-slate-500'>{item.number}</td>
                <td>
                  <button className='bg-[#1B4242] text-white px-3 rounded py-1 text-base hover:bg-[#EE7214]' onClick={() => handleDeleteUser(item._id)}>
                    Cancel Ticket
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan="6" className="text-center font-serif text-2xl text-green-950">There are no Booking tickets</td>
            </tr>
          </tbody>
        )}
      </table>
    </div></div>
  )
}

export default Page