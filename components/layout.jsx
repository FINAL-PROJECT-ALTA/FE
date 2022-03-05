import React from 'react'
import Navigation from './navigation'
// import NavbarApp from './navbar'
import { useRouter } from 'next/router'


function Layout({ children }) {
    const router = useRouter()
    return (
        <>
            <div className='max-w-screen-sm m-auto font-poppins'>
                {/* <NavbarApp /> */}
                <main>{children}</main>
                {router.pathname !== "/" ? <></> : (
                    <Navigation />)}
            </div>
        </>
    )
}

export default Layout