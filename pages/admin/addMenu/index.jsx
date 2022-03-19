import { useRouter } from 'next/router';
import FeatureTitle from '../../../components/featureTitle';
import NavbarApp from '../../../components/navbar_admin';
import ReactLoading from 'react-loading';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddFood() {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState('');
  const [loading, setLoading] = useState(false);
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [item3, setItem3] = useState('');
  const [cal1, setCal1] = useState(0);
  const [cal2, setCal2] = useState(0);
  const [cal3, setCal3] = useState(0);

  const food_categories = router.query.category;

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token_admin') : null;
  useEffect(() => {
    if (!localStorage.getItem('token_admin')) {
      router.push('/user/login');
    }
  }, []);

  const sumCal = () => {
    const total = parseInt(cal1) + parseInt(cal2) + parseInt(cal3);
    return total;
  };

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
        })
        .catch((err) => {
          // console.log(err, 'error');
        });
    }
  }, [router]);

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
      .get('https://aaryadewangga.cloud.okteto.net/foods', config)
      .then(({ data }) => {
        setData(data.data);
        // console.log(data.data);
      })
      .catch((err) => {
        // console.log(err, 'error');
      });
  }, []);

  const handleAddMenu = () => {
    const body = {
      menu_category: menu,
      foods: [],
    };

    body['foods'] ===
      Object.keys(data).map((el) => {
        if (data[el].food_uid === item1) {
          body['foods'].push({
            food_uid: item1,
          });
        }
        if (data[el].food_uid === item2) {
          body['foods'].push({
            food_uid: item2,
          });
        }
        if (data[el].food_uid === item3) {
          body['foods'].push({
            food_uid: item3,
          });
        }
      });

    console.log(body);
    const token = localStorage.getItem('token_admin');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    Swal.fire({
      title: 'Are you sure?',
      text: 'Please check again the required field',
      icon: 'question',
      confirmButtonText: 'Yes, create it!',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        axios
          .post('https://aaryadewangga.cloud.okteto.net/menus', body, config)
          .then(({ data }) => {
            setTimeout(() => {
              router.push('../admin/menu');
            }, 1500);
            Swal.fire(
              'Added Successfully',
              'Your menu has been added',
              'success'
            );
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
            console.log(error);
          })
          .finally(() => {});
      } else if (result.isDismissed) {
        Swal.fire('Check again ?', 'We are waiting you inside', 'question');
      }
    });
  };

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
        <div className="mt-10">
          <center>
            <FeatureTitle text="Add Some Menu" />
          </center>

          <div className="flex items-center mb-5 mt-10">
            <label
              className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
            >
              Menu for:
            </label>
            {menu}
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-2 mt-10">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              Item 1
            </label>
            <div className="relative">
              <select
                className="
                block 
                appearance-none 
                w-full
                sm:w-40
                wd:w-40
                lg:40
                py-2
                border-b 
                border-gray-300
                200 text-gray-700 
                py-3 px-4 pr-8 
                rounded 
                leading-tight 
                focus:outline-none 
                focus:bg-white 
                focus:border-lime-500
                "
                onChange={(e) => {
                  setItem1(e.target.value.split(',')[0]);
                  setCal1(e.target.value.split(',')[1]);
                }}
              >
                <option value="none" disabled selected hidden>
                  Select one
                </option>
                {data.map((el, i) => (
                  <option key={i.food_uid} value={[el.food_uid, el.calories]}>
                    {el.name} - {el.calories} cal
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              item 2
            </label>
            <div className="relative">
              <select
                className="
                block 
                appearance-none 
                w-full
                sm:w-40
                wd:w-40
                lg:w-40
                py-2
                border-b 
                border-gray-300
                200 text-gray-700 
                py-3 px-4 pr-8 
                rounded 
                leading-tight 
                focus:outline-none 
                focus:bg-white 
                focus:border-lime-500
                "
                onChange={(e) => {
                  setItem2(e.target.value.split(',')[0]);
                  setCal2(e.target.value.split(',')[1]);
                }}
              >
                <option value="none" disabled selected hidden>
                  Select one
                </option>
                {data.map((el, i) => (
                  <option key={i.food_uid} value={[el.food_uid, el.calories]}>
                    {el.name} - {el.calories} cal
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
              item 3
            </label>
            <div className="relative">
              <select
                className="
                block 
                appearance-none 
                w-full
                sm:w-40
                wd:w-40
                lg:w-40
                py-2
                border-b 
                border-gray-300
                200 text-gray-700 
                py-3 px-4 pr-8 
                rounded 
                leading-tight 
                focus:outline-none 
                focus:bg-white 
                focus:border-lime-500
                "
                onChange={(e) => {
                  setItem3(e.target.value.split(',')[0]);
                  setCal3(e.target.value.split(',')[1]);
                }}
              >
                <option value="none" disabled selected hidden>
                  Select one
                </option>
                {data.map((el, i) => (
                  <option key={i.food_uid} value={[el.food_uid, el.calories]}>
                    {el.name} - {el.calories} cal
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10">
          <h1>
            Total calories :{' '}
            <span className="text-lime-500">
              {sumCal() > 2400 ? 'to much calories' : sumCal()}
            </span>
          </h1>
        </div>
        <div className="w-96 mt-10 mb-10 ml-8 sm:ml-20 md:ml-20 lg:ml-20">
          <button
            onClick={handleAddMenu}
            className="focus:outline-none text-white text-sm sm:text-base bg-lime-700 hover:bg-lime-500 rounded py-2 w-full transition duration-150 ease-in"
          >
            <span className="mr-2">Add Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
