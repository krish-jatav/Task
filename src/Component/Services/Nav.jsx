import React from 'react';
import { CiCircleChevDown } from 'react-icons/ci';
import { HiSearch } from 'react-icons/hi';
import { IoIosNotifications } from 'react-icons/io';

function Nav() {
  return (
    <nav className="h-20 bg-white px-4 sm:px-8 md:px-16 lg:px-20 flex items-center justify-between">
      <div className="flex items-center flex-grow max-w-xl">
        <input
          type="text"
          placeholder="Search..."
          className="border border-gray-300 bg-[#f5f6fa] rounded-full p-2 px-8 w-full"
        />
        <span className="absolute left-0 pl-3">

        </span>
      </div>

      <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
        <IoIosNotifications className="text-xl md:text-2xl" />
        <div className="h-8 w-8 rounded-full bg-transparent overflow-hidden border border-gray-300">
          <img
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Profile"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="text-center hidden md:block">
          <h1 className="text-base md:text-lg">Pavitra Gupta</h1>
          <p className="text-sm text-gray-600">Admin</p>
        </div>
        <CiCircleChevDown className="text-xl md:text-2xl" />
      </div>
    </nav>
  );
}

export default Nav;
