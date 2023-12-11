'use client'
import EventCard from '@/components/Shared/EventCard';
import ServiceCard from '@/components/Shared/ServiceCard';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { MdHorizontalSplit } from "react-icons/md";
import { IoGrid } from "react-icons/io5";

const Page = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1); // Current page
  const [itemsPerPage] = useState(8);
  const [cardStyle, setCardStyle] =useState(false)

  useEffect(() => {
    const apiUrl = 'http://localhost:3000/api/posts';


    axios.get(apiUrl)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
          console.error('Response headers:', error.response.headers);
        } else if (error.request) {
          console.error('Request:', error.request);
        } else {
          console.error('Error message:', error.message);
        }
      });
  }, []);

  const handleSortChange = (e) => {
    const newSortOption = e.target.value;
    if (newSortOption === sortOption) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortDirection('asc');
    }
    setSortOption(newSortOption);
  };

  const sortedData = [...data];

  if (sortOption === 'title') {
    sortedData.sort((a, b) =>
      sortDirection === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)
    );
  } else if (sortOption === 'price') {
    sortedData.sort((a, b) =>
      sortDirection === 'asc' ? a.price - b.price : b.price - a.price
    );
  }

  const filteredData = sortedData.filter((item) => {
    const lowerSearchTerm = searchTerm ? searchTerm.toLowerCase() : '';
    const title = item.title ? item.title.toLowerCase() : ''; 
    const price = item.price ? item.price.toString() : ''; 
    return (
      title.includes(lowerSearchTerm) || 
      price.includes(lowerSearchTerm)   
    );
  });

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const customWidth = {
    img: '317px',
    card: '320px'
  };

  return (
    <div className="product-Page my-40 mx-auto lg:w-[1000px]">
      <div className='flex justify-center bg-slate-200 py-3'>
        <div>
          <input
            className='bg-slate-500 rounded py-2 mr-1'
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select className='mr-2 py-2' value={sortOption} onChange={handleSortChange}>
            <option value="">Sort by</option>
            <option value="title">Title</option>
            <option value="price">Price</option>
          </select>
          <button className='bg-stone-400 py-2' onClick={() => setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')}>
            {sortDirection === 'asc' ? ' Sort Descending' : 'Sort Ascending'}
          </button>
         

        </div>
        <button className=' mx-2 py-2 flex items-center justify-between' >
          <h1>View :</h1>
          <MdHorizontalSplit className='mx-2' size={28} onClick={() => setCardStyle(false)} />
          <IoGrid size={24} onClick={() => setCardStyle(true)} />


        </button>
      </div>
      <h1 className='text-center py-2 text-2xl'>Product</h1>

      <div>
        <div className={
          cardStyle 
            ? "grid grid-cols-3 auto-cols-max gap-2 place-content-center place-items-center"
          : "grid grid-cols-1 auto-cols-max gap-2 place-content-center place-items-center"
        } >
          {currentItems.map((item) => (
           <>
           {
                cardStyle 
                ? <EventCard key={item.id} product={item} customWidth='true' feature= 'false'/>
                 :<ServiceCard key={item.id} product={item} customWidth='true' /> 
           }
           </>
          ))}
        </div>
        <div className='flex justify-center my-3'>
          <ul className="pagination flex">
            {Array.from({ length: Math.ceil(filteredData.length / itemsPerPage) }).map((_, index) => (
              <li key={index}>

                <button
                  onClick={() => paginate(index + 1)}
                  className={`rounded-full py-2 px-4 mx-1 ${index + 1 === currentPage ? 'bg-blue-200 text-white' : 'bg-white text-blue-500 hover:bg-blue-100 hover:text-blue-700'}`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default Page;