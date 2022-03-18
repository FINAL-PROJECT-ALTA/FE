import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { useRouter } from 'next/router';
import FeatureTitle from '../../../components/featureTitle';
import NavbarApp from '../../../components/navbar_admin';
import Navigation from '../../../components/navigation_admin';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

function RecommenPage() {
  const router = useRouter();
  const [data, setData] = useState([]);

  const callouts = [
    {
      name: 'Breakfast',
      colorbg: 'bg-yellow-300/70',
      time: '7:00 AM - 9:00 AM',
      href: 'breakfast',
    },
    {
      name: 'Lunch',
      colorbg: 'bg-light-green/80',
      time: '12:00 AM - 1:00 PM',
      href: 'lunch',
    },
    {
      name: 'Dinner',
      colorbg: 'bg-midnight/50',
      time: '05.00 PM - 8.00 PM',
      href: 'dinner',
    },
    {
      name: 'Snacks',
      colorbg: 'bg-midnight/50',
      time: '4.00 PM - 4.30 PM',
      href: 'snack',
    },
  ];

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token_admin') : null;

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get('https://aaryadewangga.cloud.okteto.net/menus', config)
      .then(({ data }) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }, []);

  return (
    <>
      <NavbarApp />
      <div className="px-10 h-screen ">
        <FeatureTitle />
        <div className="mt-10">
          <div className="flex ">
            <FeatureTitle text="Menu for" />
          </div>

          {/* Breakfast */}

          {callouts.map((item) => (
            <Link
              href={`/admin/listMenu?category=${item.href}`}
              key={item.name}
            >
              <div
                className={`flex flex-col px-10 py-5 my-3 ${item.colorbg} max-w-lg mx-auto drop-shadow-lg rounded-xl`}
              >
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                      {item.name}
                    </h3>
                    <div className="flex items-center text-gray-600">
                      <AiOutlineClockCircle className="mr-2" />
                      <span className="text-xs md:text-sm font-sans">
                        {item.time}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end ">
                  <AiOutlineSearch
                    size={40}
                    className="text-rose-500 cursor-pointer"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Navigation />
    </>
  );
}

export default RecommenPage;
