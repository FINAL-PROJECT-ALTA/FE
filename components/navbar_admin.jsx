import React, { useState } from 'react';
import { AiOutlineLeft } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';

function NavbarApp() {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  return (
    <>
      <div className="bg-white/30 py-12 ">
        <div className="inset-x-0 bg-white rounded-b-md fixed top-0 xl:inset-x-80 z-30">
          <div className="flex justify-between items-center px-10 h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <button
                  onClick={
                    () => {
                      if (location.pathname === '/admin/addMenu') {
                        router.push('/admin/menu');
                      }
                      if (location.pathname === '/admin/editMenu') {
                        router.push('/admin/menu');
                      }
                      if (location.pathname === '/admin/listMenu') {
                        router.push('/admin/menu');
                      } else {
                        router.push('/admin');
                      }
                    }
                    //   router.push('../admin');
                    // }}
                  }
                >
                  <AiOutlineLeft size={28} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarApp;
