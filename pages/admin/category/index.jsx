import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import ReactLoading from 'react-loading';

function Category() {
  const [data, setData] = useState([]);
  const [category, setCategory] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const food_categories = router.query.foodsCategory;

  useEffect(() => {
    // const token = localStorage.getItem('token');
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJleHAiOjE2NDY5NjcxNjEsInJvbGVzIjpmYWxzZSwidXNlcl91aWQiOiJIdnl5QnhxRXp6Y1k5UEEyWnd4OWphIn0.BI7EsbehxksIYrf2xn3-I2nviFSIFk-gR59stQ0QQGQ';
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
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
          // setData(findFood.data);
        }
        setData(data.data);

        // console.log(findFood);
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
          <div className="flex justify-between flex-wrap mt-3 mb-10">
            {data.map((el, i) => (
              <div
                className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm cursor-pointer"
                key={i}
              >
                <div className="shrink-0">
                  <img
                    src=""
                    alt=""
                    className="bg-red-400 h-28 object-cover rounded-t-md"
                  />
                </div>
                <div className="px-3 py-3 text-dark-green">
                  <p className="text-md font-medium">{el.name}</p>
                </div>
              </div>
            ))}{' '}
          </div>
        </div>
      </div>
      {/* <NavAdmin /> */}
    </div>
  );
}

export default Category;
