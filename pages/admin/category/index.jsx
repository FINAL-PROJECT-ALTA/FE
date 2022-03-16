import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import { MdOutlineEdit } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';
import { GoTrashcan } from 'react-icons/go';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';
import Swal from 'sweetalert2';

function Category() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [idFood, setIdFood] = useState('');

  // console.log(idFood);

  const router = useRouter();

  const food_categories = router.query.foodsCategory;

  useEffect(() => {
    if (food_categories) {
      const token = localStorage.getItem('token_admin');

      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);

      const config = {
        headers: { Authorization: `Bearer ${token}` },
      };
      // console.log(router.query);
      axios
        .get(
          `https://aaryadewangga.cloud.okteto.net/foods?category=${food_categories}`,
          config
        )
        .then(({ data }) => {
          const findFood = data.data.find(
            (el) => el.food_categories === food_categories
          );

          if (findFood) {
            setCategory(findFood.food_categories);
            setName(findFood.name);
            setIdFood(findFood.food_uid);
            console.log(idFood);
          }

          setData(data.data);
          console.log(idFood);
        })
        .catch((err) => {
          console.log(err, 'error');
        });
    }
  }, [router]);

  function handleDelete() {
    const token = localStorage.getItem('token_admin');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    axios
      .delete(`https://aaryadewangga.cloud.okteto.net/foods/${idFood}`, config)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }

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
      <div className="flex mt-[70px] ml-10">
        <FeatureTitle text={category} />

        <button
          onClick={() => {
            router.push('../admin/addFood');
          }}
          className="flex ml-[16rem] sm:ml-[24rem] md:ml-[24rem] lg:ml-[24rem] items-center justify-end focus:outline-none text-white text-sm sm:text-base bg-green-700 hover:bg-lime-500 rounded py-2 w-[7rem] sm:w-[8rem] md:w-[8rem] lg:w-[8rem]  transition duration-150 ease-in"
        >
          <AiOutlinePlus size={20} className="ml-2" />
          <span className="ml-1 mr-2">Add {category}</span>
        </button>
      </div>
      <div className="px-10 my-10">
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-3 w-[30rem] sm:w-[37rem] md:w-[37rem] lg:w-[37rem] h-vh">
            {data != 0 ? (
              data.map((el, i) => (
                <div
                  className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm cursor-pointer"
                  key={i}
                >
                  <div className="shrink-0">
                    <img
                      src={el.image}
                      alt=""
                      className="bg-red-400 h-28 object-cover rounded-t-md"
                    />
                  </div>
                  <div className="px-3 py-3 text-dark-green">
                    <p className="text-md font-medium text-center">{el.name}</p>
                    {/* <p>{el.food_uid}</p> */}
                  </div>
                  <form>
                    <div className="flex justify-between">
                      <Link
                        href={`/admin/editFood?foodsId=${el.food_uid}`}
                        key={el.name}
                      >
                        <button className="w-[55px] hover:w-[500px] bg-yellow-400 hover:bg-orange-500 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-5">
                          <center>
                            <MdOutlineEdit size={20} />
                          </center>
                        </button>
                      </Link>

                      <button
                        className="w-[55px] hover:w-[500px] bg-red-500 hover:bg-red-700 text-gray-800 font-bold py-2 px-4 border border-blue-700 rounded"
                        onClick={() => {
                          setIdFood(el.food_uid);
                          handleDelete();
                          router.push('/admin');
                        }}
                      >
                        <center>
                          <GoTrashcan size={20} />
                        </center>
                      </button>
                    </div>
                  </form>
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
      {/* <NavAdmin /> */}
    </div>
  );
}

export default Category;
