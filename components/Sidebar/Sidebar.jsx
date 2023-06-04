"use client";

import React, { useState } from "react";
import Card from "@material-tailwind/react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
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
    <div className="w-16 md:w-1/4 lg:w-1/6 bg-white border border-gray-300 fixed h-screen top-14 left-0  shadow-sm shadow-blue-600">
      <div className="">
        <button
          className="flex justify-between w-full p-4"
          onClick={toggleAccordion}
        >
          <span className="font-medium ">User Management</span>
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="h-5 w-5 text-gray-500" />
          )}
        </button>
        {isOpen && (
          <div className="m-5 text-center">
            <a href="/userlist">
              <p className="m-5 p-2 border rounded-lg border-gray-300 shadow-sm shadow-blue-600 focus:outline-none">
                Users List
              </p>
            </a>
            <a href="/update">
              <p className="m-5 p-2 border rounded-lg border-gray-300 shadow-sm shadow-blue-600 focus:outline-none">
                Edit Users
              </p>
            </a>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 p-4">
        <span className="flex py-2 items-center text-center">
          <UserCircleIcon className="h-8 w-8" />
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
  );
};

export default Sidebar;
