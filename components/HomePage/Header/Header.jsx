import React from "react";
import Image from "next/image";
import logo from "@/public/assets/malwation-logo-2.png";

function Header() {
  return (
    <div>
      <nav className="flex bg-white fixed w-full  top-0 left-0 border-b border-gray-200">
        <div className="w-full md:w-1/4 max-w-screen-xl justify-between mx-auto p-5 pl-5">
          <a href="/" className="flex items-center">
            <Image src={logo} width={40} height={40} alt="Malwation logo" />
            <span className=" text-xl font-semibold text-blue-500 hover:text-blue-800">
              MALWATION
            </span>
          </a>
        </div>
        <div className="flex w-full md:w-2/4 md:justify-end m-6 ">
          <ul className="flex flex-wrap justify-end md:justify-start md:space-x-4 px-10">
            <li className="w-auto px-1">
              <a
                href="/"
                className="text-xl font-medium text-blue-500 hover:text-blue-800 transition duration-150 ease-in-out"
              >
                Home
              </a>
            </li>
            <li className="w-auto px-1">
              <a
                href="/"
                className="text-xl font-medium text-blue-500 hover:text-blue-800 transition duration-150 ease-in-out"
              >
                About
              </a>
            </li>
            <li className="w-auto px-1">
              <a
                href="/"
                className="text-xl font-medium text-blue-500 hover:text-blue-800 transition duration-150 ease-in-out"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
