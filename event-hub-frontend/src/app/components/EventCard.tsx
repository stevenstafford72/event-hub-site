import React from 'react'
import Image from 'next/image';
import { AiFillHeart } from "react-icons/ai";
import { IoShareOutline } from 'react-icons/io5';

const EventCard = () => {
  return (
    <div className="bg-gray-200 shadow-md rounded-lg overflow-hidden max-w-sm border border-gray-300 mx-auto">
      {/* Ensure the image scales nicely on mobile */}
      <div className="relative w-full aspect-video">
        <Image src="/images/movie-park.jpg" alt="Event Image" fill style={{ objectFit: 'cover' }} />
        <div className="absolute top-2 left-2 bg-indigo-500 text-white text-xs rounded-full px-2 py-1">
          {"Family Friendly"}
        </div>
      </div>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-1 md:text-xl md:mb-2">{"Movies In the Park"}</h2>
        <p className="text-gray-600 text-xs mb-1 md:text-sm md:mb-2">{"4:00 PM - 6:00 PM"}</p>
        <div className="flex flex-col items-stretch gap-2 mt-2 md:flex-row md:items-center md:justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline text-sm">
            View Details
          </button>
          <div className="flex gap-3">
            <button className="text-gray-500 hover:text-blue-500 focus:outline-none text-lg">
              <IoShareOutline />
            </button>
            <button className="text-gray-500 hover:text-red-500 focus:outline-none text-lg">
              <AiFillHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventCard;