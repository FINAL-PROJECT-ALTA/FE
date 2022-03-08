import React, { useState } from 'react'

function NavbarApp() {


    return (
        <>
            <div className='bg-white/30 py-12'>
                <div className='inset-x-0 bg-white rounded-b-md fixed top-0 xl:inset-x-80 z-30'>
                    <div className='flex justify-between items-center px-10 h-24'>
                        <div className='flex items-center'>
                            <div className="flex-shrink-0">
                                <img src="./images/Logo-healthyapp.png" alt="logo" />
                            </div>

                        </div>
                        {/* Notification */}
                        <div className='relative'>
                            <button className='hover:text-amber-500'><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                            </svg></button>
                            <span className="absolute right-0 -top-2 h-3 w-3">
                                <span className="animate-ping absolute top-1 rounded-full h-full w-full bg-rose-500"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavbarApp