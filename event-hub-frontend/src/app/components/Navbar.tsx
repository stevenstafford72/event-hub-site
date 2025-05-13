'use client';
import React, { useState } from 'react';
import { CiUser } from "react-icons/ci";
import QuickSettings from './QuickSettings';

const Navbar = () => {
  const [openPopup, setOpenPopup] = useState(false);

  return (
    <>
      <div className="fixed top-0 left-0 w-full bg-blue-400 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center py-3 px-4 md:py-4 md:px-6">
          {/* Mobile View: Full width, centered text */}
          <div className="text-xl font-semibold text-white text-center md:text-left md:text-2xl">EventHub</div>
          <div className="flex items-center">
            <div
              className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-2 hover:bg-white hover:text-theme cursor-pointer"
              onClick={() => setOpenPopup((prev) => !prev)}
            >
              <CiUser className="text-xl text-gray-600" />
              {/* Hide the name on mobile */}
              <div className="text-sm font-medium text-gray-700 hidden md:block">Steve</div>
            </div>
          </div>
        </div>
      </div>
      <QuickSettings open={openPopup} onClose={() => setOpenPopup(false)} />
    </>
  );
};

export default Navbar;