import React from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import MidNavbar from '../../components/MidNavbar'


export async function getServerSideProps(context) {
    try {
        const page = context.query.foodsCategory
        const res = await axios.get(`https://aaryadewangga.cloud.okteto.net/foods?category=${page}`);
        const items = await res.data;
        return {
            props: {
                items,
            }
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            }
        }
    }
}

export default function Category(props) {

    const router = useRouter()
    const page = router.query.foodsCategory

    const foods = props.items.data

    return (
        <>
            <div className='min-h-full relative bg-light-orange/70 rounded-b-md'>
                <MidNavbar />
                <div className='h-24 flex justify-center items-center'>
                    <h2 className='text-2xl text-dark-green font-semibold'>{page.toUpperCase()}</h2>
                </div>
            </div>
            <div className='min-h-screen bg-slate-50/50 p-5 my-5 rounded-md'>
                <div className="flex justify-evenly flex-wrap">
                    {/* Cards Items */}
                    {foods ? foods.map(el => (
                        <div key={el.food_uid} className='group relative cursor-pointer'>
                            <div className="relative w-40 h-48 mb-3 rounded-md overflow-hidden group-hover:opacity-70 bg-lime-200/20 drop-shadow-sm" onClick={() => { router.push(`/detail/${el.food_uid}`) }}>
                                <img src='https://images.unsplash.com/photo-1572376832515-4a8aac0f63a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80' alt={el.name} className="bg-red-400 h-28 w-full object-cover" />
                                <div className="px-3 py-3 text-dark-green ">
                                    <h3 className="text-lg font-medium">{el.name}</h3>
                                    <p className="text-md font-mono">{el.calories} KCAL</p>
                                </div>
                            </div>
                        </div>
                    )) : (<></>)}
                </div>
            </div>
        </>
    )
}

