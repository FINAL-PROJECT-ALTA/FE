import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import MidNavbar from '../../components/MidNavbar'
import Notification from '../../components/notification'
import FeatureTitle from '../../components/featureTitle'
// import ReactLoading from 'react-loading';

export default function Category() {

    const [foods, setFoods] = useState([])
    const router = useRouter()
    const page = router.query.foodsCategory


    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(`https://aaryadewangga.cloud.okteto.net/foods?category=${page}`);
                const items = await res.data;
                setFoods(items.data)
            } catch (error) {
                console.log(error);
            }
        })()

    }, [page])

    return (
        <>
            <div className='min-h-full relative bg-light-orange/70 rounded-b-md'>
                <MidNavbar />
                <div className='h-24 flex justify-center items-center'>
                    <img className='flex' src='../images/Logo-healthyapp.png' ></img>
                    <span className='absolute right-8'>
                        <Notification />
                    </span>
                </div>
            </div>
            <div className='min-h-screen bg-slate-50/50 p-5 my-5 rounded-md'>
                <FeatureTitle text={page} />
                <div className="flex justify-evenly flex-wrap">
                    {/* Cards Items */}
                    {foods != 0 ? foods.map(el => (
                        <div key={el.food_uid} className='group relative cursor-pointer my-2'>
                            <div className="relative w-40 h-full mb-3 rounded-md overflow-hidden group-hover:opacity-70 bg-lime-200/20 drop-shadow-sm" onClick={() => { router.push(`/detail/${el.food_uid}`) }}>
                                <img src={el.image} alt={el.name} className=" h-28 w-full object-cover" />
                                <div className="px-3 py-3 text-dark-green">
                                    <h3 className="text-md font-medium">{el.name}</h3>
                                    <p className="text-md font-mono text-gray-500">{el.calories} KCAL</p>
                                </div>
                            </div>
                        </div>
                    )) : (<><h1 className='text-lg font-medium text-gray-400 italic'>Result Empty</h1></>)}
                </div>
            </div>
        </>
    )
}

