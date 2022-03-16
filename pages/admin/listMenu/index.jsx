import { useRouter } from 'next/router';
import FeatureTitle from '../../../components/featureTitle';
import NavbarApp from '../../../components/navbar_admin';
import { AiOutlinePlus } from 'react-icons/ai';
import Navigation from '../../../components/navigation_admin';
import ReactLoading from 'react-loading';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios';

function ListMenu() {
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const food_categories = router.query.category;

  useEffect(() => {
    const token = localStorage.getItem('token_admin');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        `https://aaryadewangga.cloud.okteto.net/menus?category=${food_categories}`,
        config
      )
      .then(({ data }) => {
        const findFood = data.data.find(
          (el) => el.menu_category === food_categories
        );

        if (findFood) {
          setMenu(findFood.menu_category);
        }

        setData(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center content-center h-screen">
        <br />

        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  return (
    <div>
      <NavbarApp />
      <div className="px-10 h-screen">
        <FeatureTitle />
        <div className="mt-10">
          <div className="flex ">
            <FeatureTitle text={menu} />
            <Link
              href={{
                pathname: '/admin/addMenu',
                query: {
                  category: menu,
                },
              }}
            >
              <button
                //   onClick={() => {
                //     router.push('../admin/addMenu');
                //   }}
                className="flex ml-[13.5rem] sm:ml-[19.5rem] md:ml-[19.5rem] lg:ml-[19.5rem] items-center justify-end focus:outline-none text-white text-sm sm:text-base bg-green-700 hover:bg-lime-500 rounded py-2 w-[7rem] sm:w-[8rem] md:w-[8rem] lg:w-[8rem]  transition duration-150 ease-in"
              >
                <AiOutlinePlus size={20} className="ml-2" />
                <span className="ml-1 mr-2">Add menu</span>
              </button>
            </Link>
          </div>
          {data != 0 ? (
            data.map((el, i) => (
              <div
                className="flex flex-col px-10 py-2 my-3 bg-yellow-300/70 max-w-lg mx-auto drop-shadow-lg rounded-xl"
                key={i}
              >
                <div className="flex space-x-4">
                  {data[i].foods.map((el, i) => (
                    <div className="flex  text-gray-600" key={i}>
                      <span className="text-lg md:text-xl font-sans mt-1.5 ">
                        {el.name}
                      </span>
                    </div>
                  ))}
                  <div className="flex flex-col items-center text-gray-600 ">
                    <span className="text-lg md:text-xl font-sans mt-1 bg-lime-500 rounded-[5px] px-1 py-1 ">
                      {el.total_calories} Calories
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <h1 className="text-lg font-medium text-gray-400 italic ">
                Result Empty
              </h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListMenu;
