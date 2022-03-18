import React, { useState, useEffect } from 'react'
import MidNavbar from '../../components/MidNavbar'
// import Image from 'next/image'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'


function Detail() {

    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [carbho, setCarbho] = useState('')
    const [protein, setProtein] = useState('')
    const [energy, setEnergy] = useState('')
    const [unitValue, setUnitValue] = useState('')
    const [unit, setUnit] = useState('')
    const [imageUrl, setImageUrl] = useState('')

    const listFoods = useSelector(({ listFoods }) => listFoods)
    const router = useRouter()
    const { id } = router.query


    useEffect(() => {

        const findFood = listFoods.find(el => el.food_uid === id)
        if (findFood) {
            setName(findFood.name)
            setCalories(findFood.calories)
            setCarbho(findFood.carbohidrate)
            setProtein(findFood.protein)
            setEnergy(findFood.energy)
            setImageUrl(findFood.image)
            setUnitValue(findFood.unit_value)
            setUnit(findFood.unit)
        }

    }, [listFoods])

    return (
        <>
            <MidNavbar />
            <div className='max-w-full h-full'>
                <img src={imageUrl.length != 0 ? `${imageUrl}` : `../images/logo-white.png`} className='rounded-b-xl object-cover  h-72 w-full' />
                <div className='my-10 px-5 z-50'>
                    <h1 className='text-3xl font-semibold'>{name}</h1>
                    <p className='text-gray-600 text-lg font-normal italic leading-8'>{unitValue + " " + unit}</p>
                    <div className='h-full max-w-full my-3 bg-dark-green rounded-md'>
                        <table className="table-auto min-w-max w-full text-lg font-medium">
                            <tbody className='text-white'>
                                <tr className='border-b-2 border-white/50'>
                                    <td className='px-10 py-5'>Calories</td>
                                    <td className='font-mono'>{calories}kcal</td>
                                </tr>
                                <tr className='border-b-2 border-white/50'>
                                    <td className='px-10 py-5'>Carbohidrate</td>
                                    <td className='font-mono'>{carbho}gr</td>
                                </tr>
                                <tr className='border-b-2 border-white/50'>
                                    <td className='px-10 py-5'>Protein</td>
                                    <td className='font-mono'>{protein}gr</td>
                                </tr>
                                <tr className=''>
                                    <td className='px-10 py-5'>Energy</td>
                                    <td className='font-mono'>{energy}gr</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='h-5'></div>
            </div>

        </>
    )
}

export default Detail