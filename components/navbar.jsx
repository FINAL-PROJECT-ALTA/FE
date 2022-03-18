import React, { useState } from 'react';
import Notification from './notification';

function NavbarApp() {
  return (
    <>
      <div className="bg-white/30 py-12">
        <div className="inset-x-0 bg-white rounded-b-md fixed top-0 xl:inset-x-80 z-30">
          <div className="flex justify-between items-center px-10 h-24">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img src="./images/Logo-healthyapp.png" alt="logo" />
              </div>
            </div>
            {/* Notification */}
            <Notification />
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarApp;
