import React, { useState } from 'react';

const Searchbar = ({onSearch}) => {
    const [search,setsearch] = useState("");
    const handelseasrch = ()=>{
        onSearch(search);
  
    };

  return (
    <div className="flex gap-4 items-center mb-4">
      <div className="relative w-full">
        <input
          type="text"
          className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out shadow-sm"
          placeholder="Search by ID..."
          value={search}
          onChange={(e)=>setsearch(e.target.value)}


        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16l-4-4m0 0l4-4m-4 4h16"
          />
        </svg>
      </div>
      <button onClick={handelseasrch} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition duration-300 transform hover:scale-105">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
