import React from "react";
import Image from "next/image";
import logo from "@/public/assets/malwation-logo-2.png";

function Header() {
  return (
    <header>
      <nav className="flex fixed w-full bg-white items-center text-center justify-around top-0">
        <div className="p-3">
          <a href="/" className="flex items-center">
            <Image src={logo} width={40} height={40} alt="Malwation logo" />
            <span className="font-semibold text-xl text-blue-500 hover:text-blue-800">
              MALWATION
            </span>
          </a>
        </div>
        <div>
          <ul className="flex">
            <li className="p-3">
              <a
                href="/"
                className="font-medium text-xl  text-blue-500 hover:text-blue-800 "
              >
                Home
              </a>
            </li>
            <li className="p-3">
              <a
                href="/"
                className="font-medium text-xl  text-blue-500 hover:text-blue-800 "
              >
                About
              </a>
            </li>
            <li className="p-3">
              <a
                href="/"
                className="font-medium text-xl  text-blue-500 hover:text-blue-800 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
