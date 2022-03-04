import React from 'react'

function Navigation() {
    return (
        <>
            <div className='bg-slate-50/30 py-11'>
                <div className='bg-slate-50 fixed bottom-0 inset-x-0 xl:inset-x-72 z-30 shadow-sm'>
                    <div className='py-5 grid grid-cols-4 gap-4'>
                        <button className='text-dark-green text-sm  hover:text-amber-400 focus:text-amber-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg><h3>My Plan</h3>
                        </button>
                        <button className='text-dark-green text-sm hover:text-amber-400 focus:text-amber-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                            </svg><h3>Recomend</h3>
                        </button>
                        <button className='text-dark-green text-sm hover:text-amber-400 focus:text-amber-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                            </svg><h3>Reports</h3>
                        </button>
                        <button className='text-dark-green text-sm hover:text-amber-400 focus:text-amber-500'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg><h3>Profile</h3>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navigation