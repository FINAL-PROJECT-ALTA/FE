import React from 'react'
import MidNavbar from '../../components/MidNavbar'
import Image from 'next/image'

function Detail() {
    return (
        <>
            <MidNavbar />
            <div className='max-w-full'>
                <Image src='https://images.unsplash.com/photo-1572376832515-4a8aac0f63a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' className='rounded-b-xl' width={650} height={361} layout='responsive' />
                <div className='my-10 px-5 z-50'>
                    <h1 className='text-3xl font-semibold'>Banana Fruits</h1>
                    <div className='h-44 max-w-full my-3 bg-light-green rounded-md'>
                        <div className="flex justify-around py-14 px-5 text-center">
                            <div className='text-2xl font-semibold text-dark-green'>
                                <h3>KCAL</h3>
                                <p className='leading-10 font-mono'>120</p>
                            </div>
                            <div className='text-2xl font-semibold text-dark-green'>
                                <h3>ENERGY</h3>
                                <p className='leading-10 font-mono'>20gr</p>
                            </div>
                            <div className='text-2xl font-semibold text-dark-green'>
                                <h3>CARBH0</h3>
                                <p className='leading-10 font-mono'>10gr</p>
                            </div>
                            <div className='text-2xl font-semibold text-dark-green'>
                                <h3>PROTEIN</h3>
                                <p className='leading-10 font-mono'>33gr</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Detail