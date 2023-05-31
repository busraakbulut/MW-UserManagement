"use client";
import React, { useState } from "react";
import Card from "@material-tailwind/react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import {
  UserCircleIcon,
  Cog6ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section>
      <div className="fixed top-20  h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-white">
        <div className="border border-gray-300 rounded">
          <button
            className="flex items-center justify-between px-4 py-3 w-full text-left focus:outline-none"
            onClick={toggleAccordion}
          >
            <span className="font-medium">User Management</span>
            {isOpen ? (
              <ChevronUpIcon className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDownIcon className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {isOpen && (
            <div className="p-4">
              <p>Users List</p>
              <p>Edit Users</p>
            </div>
          )}
        </div>

        <div className="fixed  bottom-0 left-0  p-4 ">
          <span className="flex items-center text-center py-2">
            <UserCircleIcon className="h-8 w-8 " />
            Profile
          </span>
          <span className="flex py-2 items-center text-center">
            <Cog6ToothIcon className="h-7 w-7" />
            Settings
          </span>
          <span className="flex py-2 items-center text-center">
            <PowerIcon className="h-7 w-7" />
            Log Out
          </span>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
