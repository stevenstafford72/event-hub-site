'use client'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillHeart } from "react-icons/ai";
import { IoShareOutline } from 'react-icons/io5';

type EventProps = {
  event: {
    id: string;
    title: string;
    time: string;
    location: string;
    category?: string;
    image?: string;
    time_start: string;
    location_name: string;
  };
};

const EventCard = ({ event }: EventProps) => {
  // Determine category-specific color
  const getCategoryColor = () => {
    switch (event.category) {
      case "Technology":
        return "bg-blue-500";
      case "Food & Drink":
        return "bg-red-500";
      case "Music":
        return "bg-green-500"; // Added example
      case "Community":
        return "bg-yellow-500";
      case "Festival":
        return "bg-purple-500";
      default:
        return " bg-gray-400"; // Default color
    }
  };

  const categoryColorClass = getCategoryColor();

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-transform duration-300 hover:scale-105 hover:shadow-xl flex flex-col h-full">
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={event.image || "/images/movie-park.jpg"}
          alt="Event Image"
          fill
          style={{ objectFit: 'cover' }}
          className="transition-opacity duration-300 hover:opacity-90"
        />
        {event.category && (
          <div
            className={`absolute top-3 left-3 text-white text-sm rounded-full px-3 py-1 z-10 ${categoryColorClass}`}
              

          >
            {event.category}
          </div>
        )}
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold mb-2 line-clamp-2">
          {event.title}
        </h2>
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">
         Start Time:  {event.time_start}
        </h2>
        <p className='line-clamp-2'> 
          {event.location_name}
        </p>
        <p className="text-gray-700 text-sm mb-2">{event.time}  {event.location}</p>
        <div className="flex-grow" />
        <div className="mt-4 flex items-center justify-between">
          <Link href={`/events/${event.id}`} className="w-full">
            <button className={`w-full border-1 hover:bg-gray-200 hover:cursor-pointer text-black font-bold py-3 px-4 rounded-md focus:outline-none focus:shadow-outline text-sm text-center`}>
              View Details
            </button>
          </Link>
          <div className="flex items-center space-x-3">
            <button className="text-gray-500 hover:text-blue-600 focus:outline-none text-xl">
              <IoShareOutline />
            </button>
            <button className="text-gray-500 hover:text-red-600 focus:outline-none text-xl">
              <AiFillHeart />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
