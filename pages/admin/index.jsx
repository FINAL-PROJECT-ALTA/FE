import NavAdmin from '../../components/navigation_admin';
import NavbarApp from '../../components/navbar';
import FeatureTitle from '../../components/featureTitle';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

function AdminPage() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get('https://aaryadewangga.cloud.okteto.net/foods', config)
      .then(({ data }) => {
        setData(data.data);
        // console.log(data.data.find((el) => el.food_categories === 'food'));
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
      imageSrc: './images/Healthyfood.png',
      imageAlt: 'Healthy Food',
      colorbg: 'bg-light-orange/80',
      href: 'food',
    },
    {
      name: 'Junk Food',
      imageSrc: './images/Junkfood.png',
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
      imageSrc: './images/drinks.png',
      imageAlt: 'Snacks',
      colorbg: 'bg-yellow-200/80',
      href: 'drink',
    },
  ];

  return (
    <div>
      <NavbarApp />
      <div className="px-10 my-10">
        {/* <FeatureTitle text="My Profile" /> */}
        <div className="w-full sm:w-full md:w-full lg:w-full h-[23rem] sm:h-[23rem] md:h-[23rem] lg:h-[23rem] my-3 p-6 rounded-md bg-floor">
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
                Fruits: <span className="font-normal">{data.fruit} item</span>
              </h3>
              <h3 className="font-semibold  text-[#013542]">
                Snack: <span className="font-normal">{data.snack} item</span>
              </h3>
            </div>
            <div className="ml-5">
              <h3 className="font-semibold  text-[#013542]">
                Healthy Food:{' '}
                <span className="font-normal">{data.healthy} item</span>
              </h3>
              <h3 className="font-semibold  text-[#013542]">
                Junk Food: <span className="font-normal">{data.junk} item</span>
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
