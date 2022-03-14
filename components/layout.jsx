import React, { useEffect } from 'react'
import Navigation from './navigation'
// import NavbarApp from './navbar'
import { useRouter } from 'next/router'
import allStore from '../store/actions';
import { useDispatch } from 'react-redux'

function Layout({ children }) {
    const router = useRouter()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(allStore.fetchAllFoods())
        dispatch(allStore.fetchAllBreakfast())
        dispatch(allStore.fetchAllLunch())
        dispatch(allStore.fetchAllDinner())
        dispatch(allStore.fetchAllSnack())
        dispatch(allStore.fetchAllUser())
        dispatch(allStore.fetchAllGoal())
        // dispatch(allStore.fetchAllMenus())

    }, [dispatch])

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