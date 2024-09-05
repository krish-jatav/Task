import { CalendarDays, CircleCheck, CircleGauge, CircleUserRound } from "lucide-react";
import { MdOutlineDashboard, MdOutlinePendingActions } from "react-icons/md";
import React, { useState } from "react";
import { SlCalender } from "react-icons/sl";
import { HiOutlineCurrencyRupee, HiOutlineUser, HiOutlineUserCircle } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { CiCircleCheck, CiLogout, CiSettings } from "react-icons/ci";
import { GiConfirmed } from "react-icons/gi";
import { ImSwitch } from "react-icons/im";
import Nav from "./Nav";

const SidebarNav = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen ">
      {/* Sidebar */}
      <div className={`fixed space-y-16 top-0 left-0 bg-white text-black flex flex-col transition-transform duration-300 ${isSidebarOpen ? 'w-64' : 'w-0'}`}>

        <nav className="flex flex-col flex-grow  px-1 overflow-y-auto">
        <div className="h-16 flex items-center px-10 font-bold text-2xl">
          logo
        </div>
          <div>
            <a href="#" className="hover:bg-[#4880ff] p-2 flex items-center gap-1 rounded">
              <MdOutlineDashboard size={18} /> Dashboard
            </a>
            <a href="#" className="hover:bg-[#4880ff] p-2 rounded flex items-center gap-1">
              <SlCalender size={18}/> Calendar
            </a>
            <a href="#" className="hover:bg-[#4880ff] p-2 rounded items-center gap-1 flex">
              <HiOutlineUserCircle size={18} /> All Appointment
            </a>
          </div>
          <div className="border-t-2 pt-4">
            Appointment
          </div>
          <a href="#" className="hover:bg-[#4880ff] p-2 rounded items-center items-center gap-1 flex">
            <MdOutlinePendingActions size={18} /> Pending Appointment
          </a>
          <a href="#" className="hover:bg-[#4880ff] p-2 rounded items-center items-center gap-1 flex">
            <GiConfirmed size={18} /> Confirmed Appointment
          </a>
          <a href="#" className="hover:bg-[#4880ff] p-2 rounded items-center items-center gap-1 flex">
            <CircleCheck size={18} /> Checked in Appointment
          </a>
          <a href="#" className="hover:bg-[#4880ff] p-2 rounded items-center items-center gap-1 flex">
            <HiOutlineCurrencyRupee size={18} /> Paid Appointment
          </a>
          <a href="#" className="hover:bg-[#4880ff] p-2 rounded items-center items-center gap-1 flex">
            <FaRegUser size={18} /> Service
          </a>
          <div className="mb-10 ml-4">
          <a href="#" className="hover:bg-[#4880ff] p-2 rounded gap-2 items-center flex">
            <CiSettings size={18} /> Settings
          </a>
          <a href="#" className="hover:bg-[#4880ff] p-2 gap-2 rounded items-center flex">
            <ImSwitch size={18} /> Logout
          </a>
        </div>
        </nav>

      </div>

      {/* Mobile Menu Button */}
      <button
        className="fixed top-4 right-10 z-50 bg-gray-800 text-white p-2 rounded-md md:hidden"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Main Content */}
      <div className={`flex-grow bg-gray-100 ml-64 transition-margin duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default SidebarNav;
