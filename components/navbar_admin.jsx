import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import Link from 'next/link';

function NavbarApp() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <>
      <div className="max-w-screen bg-white shadow-md">
        <div className="px-5 py-5 flex justify-between items-center">
          <Link href="../admin">
            <AiOutlineLeft size={28} />
          </Link>
          {/* Notification */}
          <div className="relative ml-6">
            <button className="hover:text-amber-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                />
              </svg>
            </button>
            <span className="absolute right-0 -top-2 h-3 w-3">
              <span className="animate-ping absolute top-1 rounded-full h-full w-full bg-rose-500"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarApp;
