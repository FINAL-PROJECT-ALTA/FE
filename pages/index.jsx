import React, { useState } from 'react'
import { useRouter } from "next/router"
import FeatureSearch from "../components/featureSearch"
import Link from "next/link"
import FeatureTitle from "../components/featureTitle"
import NavbarApp from "../components/navbar"
import Modal from '../components/modal'

const callouts = [
  {
    name: 'Fruits',
    imageSrc: './images/Fruits.png',
    imageAlt: 'Fruits',
    colorbg: 'bg-light-green/80',
    href: 'fruits',
  },
  {
    name: 'Healthy Food',
    imageSrc: './images/Healthyfood.png',
    imageAlt: 'Healthy Food',
    colorbg: 'bg-zinc-200/80',
    href: 'healthyfood',
  },
  {
    name: 'Junk Food',
    imageSrc: './images/Junkfood.png',
    imageAlt: 'Junk Food',
    colorbg: 'bg-light-orange/80',
    href: 'junkfood',
  },
  {
    name: 'Snacks',
    imageSrc: './images/Snacks.png',
    imageAlt: 'Snacks',
    colorbg: 'bg-gray-300/80',
    href: 'snacks',
  },

]
export default function Home() {

  const getToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const [searchTerm, setSearchTerm] = useState('')
  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const router = useRouter()
  return (
    <>
      <NavbarApp />
      <div>
        <div className='relative px-5'>
          <button onClick={() => { openModal() }} className='bg-dark-green text-white text-lg font-thin min-w-full py-3 rounded-md flex cursor-text' ><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-3 text-light-green " fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg> Find your foods...</button>

        </div>
      </div>
      <div className="px-5 my-10">
        <div className="container max-w-xl mx-auto my-3 p-3 rounded-md bg-light-green">
          {!getToken ? (
            <div className="text-xl font-medium text-center py-10">
              <h1>Need More recomend for Your Goals?</h1>
              <div className="flex justify-center my-5">
                <button onClick={() => { router.push('/user') }} className="px-4 py-2 mr-3 rounded-md text-white font-semibold bg-dark-green/80 hover:drop-shadow-md hover:bg-dark-green">Login</button>
                <button onClick={() => { router.push('/user/register') }} className="px-4 py-2 rounded-md text-dark-green font-semibold bg-lime-500/80 hover:drop-shadow-md hover:bg-lime-500">Sign up</button>
              </div>
            </div>
          ) : (<>
            <div className="flex justify-evenly py-4 my-5 items-center text-center border-b-white border-b-2 relative">
              <div>
                <h2 className="text-dark-green font-medium text-2xl">Weight</h2>
                <p className="leading-10 text-xl">70kg</p>
              </div>
              <div>
                <h2 className="text-dark-green font-medium text-2xl">Height</h2>
                <p className="leading-10 text-xl">160cm</p>
              </div>
              <div>
                <h2 className="text-dark-green font-medium text-2xl">Age</h2>
                <p className="leading-10 text-xl">21</p>
              </div>
              <button onClick={() => { router.push('/profile') }} className="absolute right-2 -top-3 text-gray-500/50 hover:text-gray-500"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg></button>
            </div>
            <div className="flex justify-between px-10 items-center">
              <h2 className="text-2xl font-bold text-rose-500">Goal</h2>
              <h2 className="text-xl font-semibold text-lime-700">LossFat</h2>
            </div>
          </>)}
        </div>
        <div className="my-10">
          <FeatureTitle text='You Knows' />
          <div className="grid grid-cols-4 gap-3 mt-3 h-[115px]">
            {callouts.map(item => (
              <Link href={item.href} key={item.name}>
                <a className={`grid-rows-2 ${item.colorbg} rounded-md drop-shadow-sm hover:bg-midnight/20`}>
                  <img src={item.imageSrc} alt={item.imageAlt} className="mx-auto" />
                  <h2 className="text-dark-green text-center font-medium mt-2">{item.name}</h2>
                </a>
              </Link>
            ))}
          </div>
          <div className="flex justify-between flex-wrap my-10">
            {/* Cards Items */}
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
            <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0">
                <img src="" alt="" className="bg-red-400 h-28 object-cover rounded-t-md" />
              </div>
              <div className="px-3 py-3 text-dark-green ">
                <h3 className="text-lg font-medium">Title</h3>
                <p className="text-md font-mono">319 KCAL</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search */}
      <Modal show={isOpen} onClose={() => { setIsOpen(false) }} >
        <FeatureSearch />
      </Modal>
    </>
  )
}
