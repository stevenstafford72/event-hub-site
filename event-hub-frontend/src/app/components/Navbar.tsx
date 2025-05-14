'use client';
import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import QuickSettings from './QuickSettings';
import { LuPartyPopper } from "react-icons/lu";
import { FaCaretUp } from 'react-icons/fa'; // For the "poke out" arrow
import { AiOutlineHome, AiOutlineSetting } from 'react-icons/ai'; // Example menu icons
import { CiFilter } from "react-icons/ci";


const Navbar = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [openBottomMenu, setOpenBottomMenu] = useState(false);

  const toggleBottomMenu = () => {
    setOpenBottomMenu(!openBottomMenu);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-blue-600 shadow-md z-20"> {/* Increased z-index */}
        <div className="container mx-auto flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
          <div className="flex flex-row items-center gap-2 text-xl font-semibold text-white text-center md:text-left md:text-2xl"> <LuPartyPopper className='text-purple-400 text-3xl'/> EventHub</div>
          <div className="flex items-center">
            <div
              className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:bg-blue-400 hover:text-white cursor-pointer"
              onClick={() => setOpenPopup((prev) => !prev)}
            >
              <CiUser className="text-xl text-white" />
              <div className="text-sm font-medium text-white hidden md:block">Steve</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 w-full bg-gray-100 border-t border-gray-300 z-20"> {/* Increased z-index */}
        <div className="relative flex justify-center">
          {/* Poke Out Button */}
          <button
            className="absolute top-[-30px] bg-yellow-500 text-black rounded-t-md p-2 focus:outline-none shadow-md flex items-center gap-2"
            onClick={toggleBottomMenu}
          >
            <CiFilter className="text-xl" /> Filter
          </button>

          {/* Bottom Menu */}
          {openBottomMenu && (
            <div className="bg-white shadow-md rounded-md p-4 mt-6 overflow-x-auto flex items-center gap-4 border-2">
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
                Family Friendly
              </button>
              <div className="h-6 border-l border-gray-300" />
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
                Live Music
              </button>
              <div className="h-6 border-l border-gray-300" />
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
                Food
              </button>
              <div className="h-6 border-l border-gray-300" />
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
                Art
              </button>
              <div className="h-6 border-l border-gray-300" />
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
                Tech
              </button>
              <div className="h-6 border-l border-gray-300" />
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none">
                Social
              </button>
              <div className="h-6 border-l border-gray-300" />
              <button className="flex flex-col items-center text-gray-600 hover:text-blue-600 focus:outline-none whitespace-nowrap">
                Networking
              </button>
              {/* Add more filter buttons here */}
            </div>
          )}
        </div>
      </div>

      <QuickSettings open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Navbar;