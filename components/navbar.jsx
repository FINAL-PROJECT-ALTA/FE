import React from 'react'

function NavbarApp() {
    return (
        <>
            <div className='max-w-full bg-white shadow-md'>
                <div className='px-10 py-5 flex justify-between items-center'>
                    <img src="./images/Logo-healthyapp.png" alt="logo" />
                    {/* Search Input */}
                    <div className='bg-dark-green rounded-full px-5 flex items-center mx-auto relative'>
                        <input type="text" className='mr-4 my-3 bg-transparent outline-none   text-white placeholder:text-sm placeholder:italic' placeholder='Find your food...' />
                        <button className='text-light-green hover:text-amber-500 '><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg></button>
                    </div>



                    {/* Notification */}
                    <div className='relative ml-6'>
                        <button className='hover:text-amber-500'><svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                        </svg></button>
                        <span class="absolute right-0 -top-2 h-3 w-3">
                            <span class="animate-ping absolute top-1 rounded-full h-full w-full bg-rose-500"></span>
                            <span class="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
                        </span>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NavbarApp