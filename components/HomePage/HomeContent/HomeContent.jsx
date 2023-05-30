import React from "react";
import Link from "next/link";

function HomeContent() {
  return (
    <div>
      <div className=" justify-center items-center h-screen  ">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Do you have an account?
            </h5>
            <Link href="/register">
              <div className="inline-flex items-center px-5 py-2 m-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Create an account to get started.
              </div>
            </Link>
            <Link href="/login">
              <div className="inline-flex items-center px-5 py-2 m-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                Log in to your account
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
