import React from 'react'
import MidNavbar from '../../components/MidNavbar'

function Detail() {
    return (
        <>
            <MidNavbar />
            <div className='max-w-full'>
                <img src='https://images.unsplash.com/photo-1572376832515-4a8aac0f63a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' className='h-3/4' />
                <div className='my-10 px-5'>
                    <h1 className='text-3xl font-semibold'>Banana Fruits</h1>
                </div>
            </div>

        </>
    )
}

export default Detail