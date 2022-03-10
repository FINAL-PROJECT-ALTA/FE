import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavbarApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  return (
    <>
      <div className="max-w-screen bg-white shadow-md">
        <div className="px-5 py-5 flex justify-between items-center">
          <button
            onClick={() => {
              router.push('../admin');
            }}
          >
            <AiOutlineLeft size={28} />
          </button>
        </div>
      </div>
    </>
  );
}

export default NavbarApp;
