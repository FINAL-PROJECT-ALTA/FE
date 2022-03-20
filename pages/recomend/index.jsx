import React, { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineClockCircle } from 'react-icons/ai';
import { HiOutlinePlusSm, HiBan } from "react-icons/hi";
import { Disclosure } from "@headlessui/react";
import FeatureTitle from '../../components/featureTitle';
import NavbarApp from '../../components/navbar';
import Navigation from '../../components/navigation';
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router';
// import Link from 'next/link';
import axios from 'axios'
import Swal from 'sweetalert2';
import ReactLoading from "react-loading";

import { useDispatch } from 'react-redux';
import allStore from "../../store/actions";
// import { useReducer } from "react";

const data = {
  calories_count: 0,
  caloris_mt: 2400,
  calories: 255,
  carbo: 50,
  fat: 10,
  protein: 20,
  sugar: 6,
};
function RecommenPage() {

  const dispatch = useDispatch()
  const router = useRouter()
  const breakFast = useSelector(({ listBreakfast }) => listBreakfast)
  const lunch = useSelector(({ listLunch }) => listLunch)
  const dinner = useSelector(({ listDinner }) => listDinner)
  const snack = useSelector(({ listSnack }) => listSnack)
  const goal = useSelector(({ listGoal }) => listGoal)

  const [idGoal, setIdGoal] = useState('')
  const [temp, setTemp] = useState('')
  const [lunchTemp, setLunchTemp] = useState('')
  const [dinnerTemp, setDinnerTemp] = useState('')
  const [snackTemp, setSnackTemp] = useState('')
  const [total, setTotal] = React.useState([])
  const [isLoading, setIsLoading] = useState(false)


  const calorieTotal = total.reduce((totalCalories, meal) => totalCalories + meal, 0);
  const getToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;



  useEffect(() => {
    if (!getToken) {
      router.push("/user/login");
    }
    const findIdGoal = goal.find((el) => el.status === 'active')
    if (findIdGoal) {
      setIdGoal(findIdGoal.goal_uid);
    }

  }, [getToken, goal]);

  useEffect(() => {
    dispatch(allStore.fetchAllBreakfast())
    dispatch(allStore.fetchAllLunch())
    dispatch(allStore.fetchAllDinner())
    dispatch(allStore.fetchAllSnack())
  }, [dispatch]);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  function handleAddToBreakfast() {
    setIsLoading(true)
    const data = { menu_uid: temp, goal_uid: idGoal }
    axios.post('https://aaryadewangga.cloud.okteto.net/userhistories', data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((data) => {
        if (data) {
          setTemp('')
          Swal.fire('Congratulation', 'Menu success to add', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
        // setError(err.response.data.message)
        Swal.fire('Sorry', 'Failed add menu', 'error');
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  function handleAddToLunch() {
    setIsLoading(true)
    const data = { menu_uid: lunchTemp, goal_uid: idGoal }
    axios.post('https://aaryadewangga.cloud.okteto.net/userhistories', data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((data) => {
        if (data) {
          setTemp('')
          Swal.fire('Congratulation', 'Menu success to add', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
        // setError(err.response.data.message)
        Swal.fire('Sorry', 'Failed add menu', 'error');

      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  function handleAddToDinner() {
    setIsLoading(true)
    const data = { menu_uid: dinnerTemp, goal_uid: idGoal }
    axios.post('https://aaryadewangga.cloud.okteto.net/userhistories', data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((data) => {
        if (data) {
          setTemp('')
          Swal.fire('Congratulation', 'Menu success to add', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
        // setError(err.response.data.message)
        Swal.fire('Sorry', 'Failed add menu', 'error');

      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  function handleAddToSnack() {
    setIsLoading(true)
    const data = { menu_uid: snackTemp, goal_uid: idGoal }
    axios.post('https://aaryadewangga.cloud.okteto.net/userhistories', data, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
    })
      .then((data) => {
        if (data) {
          setTemp('')
          Swal.fire('Congratulation', 'Menu success to add', 'success');
        }
      })
      .catch((err) => {
        console.log(err);
        // setError(err.response.data.message)
        Swal.fire('Sorry', 'Failed add menu', 'error');

      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const removeTotal = () => {
    total.splice(-1, 1);
  }

  if (isLoading) {
    return (
      <div className="flex items-center h-screen justify-center content-center">
        <br />
        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }
  return (
    <>
      <NavbarApp />
      <div className="px-10">
        <FeatureTitle />
        <div className="max-w-md mx-auto h-44 p-6 rounded-xl bg-dark-green">
          <div className="flex flex-row justify-between">
            <div className="basis-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-4xl text-rose-500 font-mono">
                {calorieTotal.length != 0 ? `${calorieTotal}`
                  : '0'}
              </h1>
              <p className="text-xs lg:text-lg text-white font-base">
                Caloris Count
              </p>
            </div>
            <div className="basis-1/2 text-right">
              <h3 className="text-3xl md:text-4xl lg:text-4xl text-rose-500 font-mono">
                {data.caloris_mt}
              </h3>
              <h5 className="text-xs lg:text-lg text-white font-base">
                Calories Maintenance
              </h5>
            </div>
          </div>
          {/* <div className="grid grid-cols-4 gap-1 my-2 text-center text-white">
            <span>
              <p className="font-mono text-lg text-light-green">
                {data.carbo}gr
              </p>
              <h2 className="font-medium text-lg">Carbo</h2>
            </span>
            <span>
              <p className="font-mono text-lg text-light-green">{data.fat}gr</p>
              <h2 className="font-medium text-lg">Fat</h2>
            </span>
            <span>
              <p className="font-mono text-lg text-light-green">
                {data.protein}gr
              </p>
              <h2 className="font-medium text-lg">Protein</h2>
            </span>
            <span>
              <p className="font-mono text-lg text-light-green">
                {data.sugar}gr
              </p>
              <h2 className="font-medium text-lg">Sugar</h2>
            </span>
          </div> */}
        </div>

        <div className="my-10">
          <div className="flex ">
            <FeatureTitle text="Program Goals" />
          </div>
          {/* Breakfast */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-col px-10 py-5 my-3 bg-yellow-300/70 max-w-lg mx-auto drop-shadow-sm rounded-xl">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                        Breakfast
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <AiOutlineClockCircle id="breakfast" className="mr-2" />
                        <span className="text-xs md:text-sm font-sans">
                          7.00 - 9.00 am
                        </span>
                      </div>
                    </div>
                    <div>

                    </div>
                    <Disclosure.Button>
                      <div className=" flex items-center">
                        <AiOutlinePlus size={40} className={`${open ? 'transform rotate-45' : ''
                          } text-rose-500`} />
                      </div>
                    </Disclosure.Button>
                  </div>
                </div>
                <Disclosure.Panel as='ul' className="px-2 py-2 max-w-lg mx-auto text-sm rounded-sm text-gray-500 bg-gray-50/50">
                  {Object.keys(breakFast).map(key => (
                    <div key={key} className='flex flex-row py-1 items-center text-center'>
                      <span className='w-16 text-right font-mono text-rose-500'>{breakFast[key].total_calories}KCAL</span>
                      {breakFast[key].foods.map(el => (
                        <div key={el.food_uid} className='px-1 py-1 mx-1 w-24 truncate xl:text-ellipsis xl:overflow-hidden rounded-md bg-light-green '>
                          {el.name}
                        </div>
                      ))}
                      <div className="flex-1 text-right items-center relative">
                        <button onClick={handleAddToBreakfast} className={classNames(temp === breakFast[key].menu_uid ? 'visible' : 'invisible', `mx-1 p-1 inline-block text-lime-500`)}>Confirm</button>
                        <button onClick={() => { setTemp(breakFast[key].menu_uid), setTotal(total => [...total, breakFast[key].total_calories]) }} disabled={temp} className={classNames(temp != 0 ? 'text-slate-400' : 'text-green-400', `mx-1 p-1 inline-block bg-slate-100/70 rounded-md `)}><HiOutlinePlusSm size={25} /></button>
                        <button onClick={() => { setTemp(''), removeTotal() }} className="mx-1 p-1 inline-block bg-slate-100/70 rounded-md text-rose-400"><HiBan size={25} /></button>
                      </div>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Lunch */}
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
                        <AiOutlinePlus id="lunch" size={40} className={`${open ? 'transform rotate-45' : ''
                          } text-rose-500`} />
                      </div>
                    </Disclosure.Button>
                  </div>
                </div>
                <Disclosure.Panel as='ul' className="px-2 py-2 max-w-lg mx-auto text-sm rounded-sm text-gray-500 bg-gray-50/50">
                  {Object.keys(lunch).map(key => (
                    <div key={key} className='flex flex-row py-1 items-center text-center'>
                      <span className='w-16 text-right font-mono text-rose-500'>{lunch[key].total_calories}KCAL</span>
                      {lunch[key].foods.map(el => (
                        <div key={el.food_uid} className='px-1 py-1 mx-1 w-24 truncate xl:text-ellipsis xl:overflow-hidden rounded-md bg-light-green '>
                          {el.name}
                        </div>
                      ))}
                      <div className="flex-1 text-right items-center relative">
                        <button onClick={handleAddToLunch} className={classNames(lunchTemp === lunch[key].menu_uid ? 'visible' : 'invisible', `mx-1 p-1 inline-block text-lime-500`)}>Confirm</button>
                        <button onClick={() => { setLunchTemp(lunch[key].menu_uid), setTotal(total => [...total, lunch[key].total_calories]) }} disabled={lunchTemp} className={classNames(lunchTemp.length != 0 ? 'text-slate-400' : 'text-green-400', `mx-1 p-1 bg-slate-100/70 inline-block rounded-md`)}><HiOutlinePlusSm size={25} /></button>
                        <button onClick={() => { setLunchTemp(''), removeTotal() }} className="mx-1 p-1 inline-block bg-slate-100/70 rounded-md text-rose-400"><HiBan size={25} /></button>
                      </div>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Dinner */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-col px-10 py-5 my-3 bg-midnight/50 max-w-lg mx-auto drop-shadow-sm rounded-xl">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                        Dinner
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <AiOutlineClockCircle id="dinner" className="mr-2" />
                        <span className="text-xs md:text-sm font-sans">
                          05.00 - 8.00 pm
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
                  {Object.keys(dinner).map(key => (
                    <div key={key} className='flex flex-row py-1 items-center text-center'>
                      <span className='w-16 text-right font-mono text-rose-500'>{dinner[key].total_calories}KCAL</span>
                      {dinner[key].foods.map(el => (
                        <div key={el.food_uid} className='px-1 py-1 mx-1 w-24 truncate xl:text-ellipsis xl:overflow-hidden rounded-md bg-light-green '>
                          {el.name}
                        </div>
                      ))}
                      <div className="flex-1 text-right items-center relative">
                        <button onClick={handleAddToDinner} className={classNames(dinnerTemp === dinner[key].menu_uid ? 'visible' : 'invisible', `mx-1 p-1 inline-block text-lime-500`)}>Confirm</button>
                        <button onClick={() => { setDinnerTemp(dinner[key].menu_uid), setTotal(total => [...total, dinner[key].total_calories]) }} disabled={dinnerTemp} className={classNames(dinnerTemp.length != 0 ? 'text-slate-400' : 'text-green-400', `mx-1 p-1 inline-block bg-slate-100/70 rounded-md`)}><HiOutlinePlusSm size={25} /></button>
                        <button onClick={() => { setDinnerTemp(''), removeTotal() }} className="mx-1 p-1 inline-block bg-slate-100/70 rounded-md text-rose-400"><HiBan size={25} /></button>
                      </div>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>

          {/* Snack */}
          <Disclosure>
            {({ open }) => (
              <>
                <div className="flex flex-col px-10 py-5 my-3 bg-zinc-200/80 max-w-lg mx-auto drop-shadow-sm rounded-xl">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                        Snack
                      </h3>
                      <div className="flex items-center text-gray-600">
                        <AiOutlineClockCircle id="snack" className="mr-2" />
                        <span className="text-xs md:text-sm font-sans">
                          4.00 - 4.30 pm
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
                  {Object.keys(snack).map(key => (
                    <div key={key} className='flex flex-row py-1 items-center text-center'>
                      <span className='w-16 text-right font-mono text-rose-500'>{snack[key].total_calories}KCAL</span>
                      {snack[key].foods.map(el => (
                        <div key={el.food_uid} className='px-1 py-1 mx-1 w-24 truncate xl:text-ellipsis xl:overflow-hidden rounded-md bg-light-green '>
                          {el.name}
                        </div>
                      ))}
                      <div className="flex-1 text-right items-center relative">
                        <button onClick={handleAddToSnack} className={classNames(snackTemp === snack[key].menu_uid ? 'visible' : 'invisible', `mx-1 p-1 inline-block text-lime-500`)}>Confirm</button>
                        <button onClick={() => { setSnackTemp(snack[key].menu_uid), setTotal(total => [...total, snack[key].total_calories]) }} disabled={snackTemp} className={classNames(snackTemp.length != 0 ? 'text-slate-400' : 'text-green-400', `mx-1 p-1 inline-block bg-slate-100/70 rounded-md`)}><HiOutlinePlusSm size={25} /></button>
                        <button onClick={() => { setSnackTemp(''), removeTotal() }} className="mx-1 p-1 inline-block bg-slate-100/70 rounded-md text-rose-400"><HiBan size={25} /></button>
                      </div>
                    </div>
                  ))}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
      <Navigation />
    </>
  );
}

export default RecommenPage;
