import React from 'react';
import { VscHome } from 'react-icons/vsc';
import { HiOutlineClipboardList } from 'react-icons/hi';
import { useRouter } from 'next/router';

function Navigation() {
  const router = useRouter();
  return (
    <>
      <div className="bg-slate-50/30 py-11">
        <div className="bg-slate-50 fixed bottom-0 inset-x-0 xl:inset-x-72 z-30 shadow-sm">
          <div className="py-5 flex justify-center space-x-20">
            <button
              onClick={() => {
                router.push('../admin');
              }}
              className="text-dark-green text-sm  hover:text-amber-400 focus:text-amber-500"
            >
              <VscHome size={30} className="ml-0.5" />
              <h3>Home</h3>
            </button>
            <button
              onClick={() => {
                router.push('/admin/menu/');
              }}
              className="text-dark-green text-sm hover:text-amber-400 focus:text-amber-500"
            >
              <HiOutlineClipboardList size={30} className="ml-0.5" />
              <h3>Menu</h3>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
