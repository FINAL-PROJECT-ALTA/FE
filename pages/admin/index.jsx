import NavAdmin from '../../components/navigation_admin';
import NavbarApp from '../../components/navbar';
import FeatureTitle from '../../components/featureTitle';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function AdminPage() {
  const [data, setData] = useState([]);
  const [sumFruit, setSumFruit] = useState(0);
  const [sumFood, setSumFood] = useState(0);
  const [sumJunk, setSumJunk] = useState(0);
  const [sumSnack, setSumSnack] = useState(0);
  const [sumDrink, setSumDrink] = useState(0);
  const router = useRouter();

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token') : null;

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
      localStorage.removeItem('token');
      router.push('/user');
    }
  }

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      router.push('/user');
    }
  }, []);

  return (
    <div>
      <NavbarApp />
      <div className="px-10 my-10">
        {/* <FeatureTitle text="My Profile" /> */}
        <div className="w-full sm:w-full md:w-full lg:w-full h-[26.5rem] sm:h-[27rem] md:h-[27rem] lg:h-[27rem] my-3 p-6 rounded-md bg-floor">
          <div className=" flex justify-end right-3 top-3">
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
          <div className="flex flex-col items-center">
            <div className="pb-3">
              <h3 className="text-2xl font-semibold text-[#013542]">
                Welcome, {data.name}
              </h3>
            </div>
            <img
              src="https://1.bp.blogspot.com/-PIo-ijjIyUo/X4Vy1VGXQRI/AAAAAAAAAUo/OnkVUaEtqwARAp205jhtyC-_FRvKBSPuQCLcBGAsYHQ/s348/images-17.jpeg"
              className="rounded-full border border-gray-100 shadow-sm"
              width={150}
            />

            <div className="mt-5 h-px bg-gray-400 w-80 sm:w-[30rem] md:w-[30rem] lg:w-[30rem]" />
            <p className="mt-2 text-[18px] text-[#013542] font-regular sm:text-2xl md:text-2xl lg:text-2xl">
              Report Items :
            </p>
          </div>

          <div className="flex justify-around mt-5">
            <div>
              <h3 className="font-semibold  text-[#013542]">
                Fruits: <span className="font-normal">{sumFruit} item</span>
              </h3>
              <h3 className="font-semibold  text-[#013542]">
                Snack: <span className="font-normal">{sumSnack} item</span>
              </h3>
              <h3 className="font-semibold  text-[#013542]">
                Drink: <span className="font-normal">{sumDrink} item</span>
              </h3>
            </div>
            <div className="ml-5">
              <h3 className="font-semibold  text-[#013542]">
                Food: <span className="font-normal">{sumFood} item</span>
              </h3>
              <h3 className="font-semibold  text-[#013542]">
                Junk Food: <span className="font-normal">{sumJunk} item</span>
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
