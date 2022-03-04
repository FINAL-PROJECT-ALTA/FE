import React from 'react'
import FooterApp from './footer'
import NavbarApp from './navbar'


function Layout({ children }) {
    return (
        <>
            <div className='max-w-screen-sm m-auto'>
                <NavbarApp />
                <main>{children}</main>
                <FooterApp />
            </div>
        </>
    )
}

export default Layout