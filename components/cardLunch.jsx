import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { Disclosure } from "@headlessui/react";
import { AiOutlinePlus, AiOutlineClockCircle } from 'react-icons/ai';
import { HiOutlinePlusSm, HiBan } from "react-icons/hi";
import Swal from 'sweetalert2';
import axios from 'axios'


function CardLunch() {

    const lunch = useSelector(({ listLunch }) => listLunch)
    const goal = useSelector(({ listGoal }) => listGoal)

    const [idGoal, setIdGoal] = useState('')
    const [lunchTemp, setLunchTemp] = useState('')


    useEffect(() => {
        const findIdGoal = goal.find((el) => el.status === 'active')
        if (findIdGoal) {
            setIdGoal(findIdGoal.goal_uid);
        }

    }, [goal]);

    function handleAddToLunch() {
        const data = { menu_uid: lunchTemp, goal_uid: idGoal }
        axios.post('https://aaryadewangga.cloud.okteto.net/userhistories', data, {
            headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
        })
            .then((data) => {
                console.log(data);
                if (data) {
                    Swal.fire('Congratulation', 'Menu Success to Add', 'success');
                }

            })
            .catch((err) => {
                console.log(err);
                // setError(err.response.data.message)
                if (err) {
                    Swal.fire('Sorry', 'Menu Invalid to Add', 'error');
                }
            })
    }

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <>
            <Disclosure>
                {({ open }) => (
                    <>
                        <div className="flex flex-col px-10 py-5 my-3 bg-light-green/80 max-w-lg mx-auto drop-shadow-sm rounded-xl">
                            <div className="flex justify-between">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                                        Lunch
                                    </h3>
                                    <div className="flex items-center text-gray-600">
                                        <AiOutlineClockCircle className="mr-2" />
                                        <span className="text-xs md:text-sm font-sans">
                                            12.00 - 1.00 pm
                                        </span>
                                    </div>
                                </div>
                                <Disclosure.Button>
                                    <div className=" flex items-center">
                                        <AiOutlinePlus size={40} className={`${open ? 'transform rotate-45' : ''
                                            } text-rose-500`} />
                                    </div>
                                </Disclosure.Button>
                            </div>
                        </div>
                        <Disclosure.Panel as='ul' className="px-3 py-2 max-w-lg mx-auto text-sm rounded-sm text-gray-500 bg-gray-50/50">
                            {Object.keys(lunch).map(key => (
                                <div key={key} className='flex flex-row py-1 items-center'>
                                    <span className='w-16 text-right font-mono text-rose-500'>{lunch[key].total_calories}KCAL</span>
                                    {lunch[key].foods.map(el => (
                                        <div key={el.food_uid} className='px-1 py-1 mx-1 rounded-md bg-light-green '>
                                            {el.name}
                                        </div>
                                    ))}
                                    <div className="flex-1 text-right items-center relative">
                                        <button onClick={handleAddToLunch} className={classNames(lunchTemp === lunch[key].menu_uid ? 'visible' : 'invisible', `mx-1 p-1 absolute right-20 top-1 text-lime-500`)}>Confirm</button>
                                        <button onClick={() => setLunchTemp(lunch[key].menu_uid)} disabled={lunchTemp} className={classNames(lunchTemp.length != 0 ? 'text-slate-400' : '', `mx-1 p-1 bg-slate-100/70 rounded-md text-green-400`)}><HiOutlinePlusSm size={25} /></button>
                                        <button onClick={() => { setLunchTemp('') }} className="mx-1 p-1 bg-slate-100/70 rounded-md text-rose-400"><HiBan size={25} /></button>
                                    </div>
                                </div>
                            ))}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure></>
    )
}

export default CardLunch