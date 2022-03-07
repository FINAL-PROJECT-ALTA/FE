import React, { useState } from 'react'
import Link from 'next/link'

function FeatureSearch() {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <>
            <div className='px-10'>
                <div className='bg-dark-green rounded-md px-5 flex items-center mx-auto relative'>
                    <input type="text" className='mr-4 my-3 bg-transparent outline-none   text-white placeholder:text-sm placeholder:italic' placeholder='Find your food...' onChange={e => { setSearchTerm(e.target.value) }} />
                    <button className='text-light-green hover:text-amber-500 '><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg></button>
                </div>
            </div>
            {searchTerm != 0 && (
                <div className='text-dark-green text-lg my-5 px-5 overflow-y-scroll'>
                    <Link href='#'>
                        <a className='flex items-center font-medium my-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>result search
                        </a>
                    </Link>
                    <Link href='#'>
                        <a className='flex items-center font-medium my-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>result search
                        </a>
                    </Link>
                    <Link href='#'>
                        <a className='flex items-center font-medium my-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                            </svg>result search
                        </a>
                    </Link>

                </div>
            )}
        </>
    )
}

export default FeatureSearch