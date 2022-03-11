import React, { useState, Fragment } from 'react'
import Link from 'next/link'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'
const types = [
    { name: 'foods' },
    { name: 'calories' },

]

function FeatureSearch() {
    const [selected, setSelected] = useState(types[0])
    const [searchTerm, setSearchTerm] = useState('')
    const [wordEntered, setWordEntered] = useState('')

    const listFoods = useSelector(({ listFoods }) => listFoods)
    const router = useRouter()


    // Feature Searching 
    const handleSearch = (e) => {
        const searchWord = e.target.value
        setWordEntered(searchWord)
        const newFilter = listFoods.filter((el) => {
            return el.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        if (searchWord === '') {
            setSearchTerm([])
        } else {
            setSearchTerm(newFilter)
        }
    }

    // Clear Input Search
    const clearInput = () => {
        setSearchTerm([])
        setWordEntered('')
    }

    return (
        <>
            <div className='flex items-center px-10 max-w-2xl'>
                <div className='bg-dark-green rounded-md px-5 flex items-center max-w-lg relative'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-light-green" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input type="text" className='w-4/5 my-3 mx-3 bg-transparent outline-none text-white placeholder:text-sm placeholder:italic' placeholder='Find your food...' value={wordEntered} onChange={handleSearch} />
                    <div className='w-7 flex items-center'>
                        {wordEntered.length != 0 && (
                            <button onClick={clearInput} className='text-light-green hover:text-amber-500 '><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg></button>)}
                    </div>
                    {/* Selected Component */}
                    <div className='mx-1 border-l-2 border-gray-400'>
                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-32 py-2 pl-3 pr-10 text-left text-white bg-transparent rounded-md shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                    <span className="block truncate">{selected.name}</span>
                                    <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon
                                            className="w-5 h-5 text-white"
                                            aria-hidden="true" />
                                    </span>
                                </Listbox.Button>
                                <Transition
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0">
                                    <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {types.map((item, itemIdx) => (
                                            <Listbox.Option
                                                key={itemIdx}
                                                className={({ active }) =>
                                                    `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'
                                                    }`
                                                }
                                                value={item}>
                                                {({ selected }) => (
                                                    <>
                                                        <span className={`block truncate ${selected ? 'font-medium' : 'font-normal'}`}>{item.name} </span>
                                                        {selected ? (
                                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                                <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </Listbox>
                    </div>
                </div>
                <button onClick={() => { router.push(`/search?input=${wordEntered}&category=${selected.name}`) }} className='px-3 py-3 ml-2 bg-light-green/70 text-dark-green hover:bg-light-green font-medium rounded-md '>Search</button>
            </div>
            {searchTerm != 0 && (
                <div className='text-dark-green text-lg my-5 px-5 overflow-y-scroll'>
                    {searchTerm.map(item => (
                        <Link key={item.food_uid} href={`/detail/${item.food_uid}`}>
                            <a className='flex justify-start items-center font-medium my-3 py-1 hover:bg-light-orange/40 rounded-lg relative'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>{item.name}<span className='absolute right-0'>{item.calories}KCAL</span></a>
                        </Link>
                    ))}
                </div>
            )}
        </>
    )
}

export default FeatureSearch