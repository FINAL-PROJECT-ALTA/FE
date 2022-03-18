import NavAdmin from '../../components/navigation_admin';
import NavbarApp from '../../components/navbar';
import FeatureTitle from '../../components/featureTitle';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Pie } from 'react-chartjs-2';
import React from 'react';
import { ArcElement } from 'chart.js';
import Chart from 'chart.js/auto';

function AdminPage() {
  const [data, setData] = useState([]);
  const [sumFruit, setSumFruit] = useState(0);
  const [sumFood, setSumFood] = useState(0);
  const [sumJunk, setSumJunk] = useState(0);
  const [sumSnack, setSumSnack] = useState(0);
  const [sumDrink, setSumDrink] = useState(0);
  const router = useRouter();

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token_admin') : null;

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get('https://aaryadewangga.cloud.okteto.net/foods', config)
      .then(({ data }) => {
        setData(data.data);
        const fruit = data.data.find((el) => el.food_categories === 'fruit');
        if (fruit) {
          setSumFruit(
            data.data.filter((el) => el.food_categories === 'fruit').length
          );
        }
        const food = data.data.find((el) => el.food_categories === 'food');
        if (food) {
          setSumFood(
            data.data.filter((el) => el.food_categories === 'food').length
          );
        }
        const junk = data.data.find((el) => el.food_categories === 'junk food');
        if (junk) {
          setSumJunk(
            data.data.filter((el) => el.food_categories === 'junk food').length
          );
        }
        const snack = data.data.find((el) => el.food_categories === 'snack');
        if (snack) {
          setSumSnack(
            data.data.filter((el) => el.food_categories === 'snack').length
          );
        }
        const drink = data.data.find((el) => el.food_categories === 'drink');
        if (drink) {
          setSumDrink(
            data.data.filter((el) => el.food_categories === 'drink').length
          );
        }
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }, []);

  const callouts = [
    {
      name: 'Fruits',
      imageSrc: './images/Fruits.png',
      imageAlt: 'Fruits',
      colorbg: 'bg-light-green/80',
      href: 'fruit',
    },
    {
      name: 'Food',
      imageSrc: './images/Food.png',
      imageAlt: 'Healthy Food',
      colorbg: 'bg-light-orange/80',
      href: 'food',
    },
    {
      name: 'Junk Food',
      imageSrc: './images/pizza.png',
      imageAlt: 'Junk Food',
      colorbg: 'bg-rose-200/80',
      href: 'junk food',
    },
    {
      name: 'Snacks',
      imageSrc: './images/Snacks.png',
      imageAlt: 'Snacks',
      colorbg: 'bg-yellow-200/80',
      href: 'snack',
    },
    {
      name: 'Drink',
      imageSrc: './images/lemonade.png',
      imageAlt: 'Snacks',
      colorbg: 'bg-yellow-200/80',
      href: 'drink',
    },
  ];

  function handleLogout() {
    if (getToken) {
      localStorage.removeItem('token_admin');
      router.push('/user');
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token_admin')) {
      router.push('/profile');
    }
  }, []);

  return (
    <div>
      <NavbarApp />
      <div className="px-10 my-10 ">
        <div className="w-full sm:w-full md:w-full lg:w-full h-vh sm:h-[27rem] md:h-[27rem] lg:h-[27rem] my-3 p-6 rounded-md bg-floor">
          <div className="flex justify-end">
            <button
              onClick={handleLogout}
              className="text-lg text-lime-700 font-semibold inline-flex items-center py-2 px-3 bg-light-green/80 hover:bg-lime-200 hover:text-dark-green rounded-md"
            >
              <p>Logout</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center text-xl font-bold mt-5">
            Our Report
          </div>

          <div className="mt-2 h-px bg-gray-400 w-[120px] sm:w-[150px] md:w-[150px] lg:w-[150px] mx-auto" />

          <div className="flex mt-4 sm:mt-5">
            {/* <div className="mt-5 h-px bg-gray-400 w-80 sm:w-[30rem] md:w-[30rem] lg:w-[30rem]" /> */}
            <div className="w-[200px] sm:w-64 md:w-64 lg:w-64 h-20 overlay-hidden">
              <Pie
                cx="50%"
                cy="50%"
                outerRadius={80}
                data={{
                  labels: ['Fruits', 'Food', 'Junk Food', 'Snacks', 'Drink'],
                  datasets: [
                    {
                      data: [sumFruit, sumFood, sumJunk, sumSnack, sumDrink],
                      backgroundColor: [
                        '#6DFF59',
                        '#FFC859',
                        '#FF7B59',
                        '#FFF359',
                        '#36A2EB',
                      ],
                      hoverBackgroundColor: [
                        '#6DFF59',
                        '#FFC859',
                        '#FF7B59',
                        '#FFF359',
                        '#36A2EB',
                      ],
                    },
                  ],
                }}
                options={{
                  legend: {
                    display: false,
                  },
                  tooltips: {
                    callbacks: {
                      label: function (tooltipItem) {
                        return tooltipItem.yLabel;
                      },
                    },
                  },
                }}
              />
            </div>

            <div className="flex flex-col ml-2 sm:ml-10 md:ml-10 lg:ml-10 ">
              <p className="mt-2 text-[12px] text-[#013542] sm:text-2xl md:text-2xl lg:text-2xl font-bold mb-3">
                Detail Items :
              </p>
              <h3 className="font-semibold  text-[#013542] text-[12px] sm:text-xl md:text-xl lg:text-xl">
                Fruits:{' '}
                <span className="font-normal text-[12px] sm:text-xl md:text-xl lg:text-xl">
                  {sumFruit} item
                </span>
              </h3>
              <h3 className="font-semibold  text-[#013542] text-[12px] sm:text-xl md:text-xl lg:text-xl">
                Snack:{' '}
                <span className="font-normal text-[12px] sm:text-xl md:text-xl lg:text-xl">
                  {sumSnack} item
                </span>
              </h3>
              <h3 className="font-semibold  text-[#013542] text-[12px] sm:text-xl md:text-xl lg:text-xl">
                Drink:{' '}
                <span className="font-normal text-[12px] sm:text-xl md:text-xl lg:text-xl">
                  {sumDrink} item
                </span>
              </h3>
              <h3 className="font-semibold  text-[#013542] text-[12px] sm:text-xl md:text-xl lg:text-xl">
                Food:{' '}
                <span className="font-normal text-[12px] sm:text-xl md:text-xl lg:text-xl">
                  {sumFood} item
                </span>
              </h3>
              <h3 className="font-semibold  text-[#013542] text-[12px] sm:text-xl md:text-xl lg:text-xl">
                Junk Food:{' '}
                <span className="font-normal text-[12px] sm:text-xl md:text-xl lg:text-xl">
                  {sumJunk} item
                </span>
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <FeatureTitle text="What's your plan today" />

          <div className="flex justify-between flex-wrap mt-3 ">
            <div className="grid grid-cols-3 gap-5 mt-3 w-[50rem] h-[250px]">
              {callouts.map((item) => (
                <Link
                  href={`/admin/category?foodsCategory=${item.href}`}
                  key={item.name}
                >
                  <a
                    className={`grid-rows-2 ${item.colorbg} rounded-md drop-shadow-sm hover:bg-zinc-300/20`}
                  >
                    <img
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="mx-auto "
                    />
                    <h2 className="text-dark-green text-center font-medium mt-2">
                      {item.name}
                    </h2>
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      <NavAdmin />
    </div>
  );
}

export default AdminPage;
