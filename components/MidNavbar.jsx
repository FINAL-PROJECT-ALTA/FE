import React from 'react'
import { useRouter } from 'next/router'


function MidNavbar() {

    const router = useRouter()
    return (
        <>
            <div className='max-w-full relative z-20'>
                <div className='absolute h-20 px-5 py-6 '>

                    <button onClick={() => { router.push('/') }} className='px-2 py-2 rounded-md text-dark-green hover:text-amber-400 hover:bg-gray-200/70'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                </div>
            </div>
        </>
    )
}

export default MidNavbar