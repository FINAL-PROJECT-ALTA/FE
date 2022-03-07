import React from 'react'
import Navigation from './navigation'
// import NavbarApp from './navbar'
import { useRouter } from 'next/router'


function Layout({ children }) {
    const router = useRouter()
    return (
        <>
            {/* <NavbarApp /> */}
            <main>{children}</main>
            {router.pathname !== "/" ? <></> : (
                <Navigation />)}
        </>
    )
}

export default Layout