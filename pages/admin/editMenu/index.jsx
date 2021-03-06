import { useRouter } from 'next/router';
import FeatureTitle from '../../../components/featureTitle';
import NavbarApp from '../../../components/navbar_admin';
import ReactLoading from 'react-loading';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function AddFood() {
  const router = useRouter();
  const menu_id = router.query.menuId;
  const [data, setData] = useState([]);
  const [menu, setMenu] = useState('');
  const [loading, setLoading] = useState(false);
  const [item1, setItem1] = useState('');
  const [item2, setItem2] = useState('');
  const [item3, setItem3] = useState('');
  const [name1, setName1] = useState('');
  const [name2, setName2] = useState('');
  const [name3, setName3] = useState('');
  const [cal1, setCal1] = useState(0);
  const [cal2, setCal2] = useState(0);
  const [cal3, setCal3] = useState(0);

  const sumCal = () => {
    const total = parseInt(cal1) + parseInt(cal2) + parseInt(cal3);
    return total;
  };

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token_admin') : null;
  useEffect(() => {
    if (!localStorage.getItem('token_admin')) {
      router.push('/user/login');
    }
  }, []);

  useEffect(() => {
    if (menu_id) {
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
          `https://aaryadewangga.cloud.okteto.net/menus?menu_uid=${menu_id}`,
          config
        )
        .then(({ data }) => {
          const findFood = data.data.find((el) => el.menu_uid === menu_id);
          console.log(findFood.foods);

          if (findFood) {
            setMenu(findFood.menu_category);

            setItem1(findFood.foods[0].food_uid);
            setName1(findFood.foods[0].name);

            setItem2(findFood.foods[1].food_uid);
            setName2(findFood.foods[1].name);

            setItem3(findFood.foods[2].food_uid);
            setName3(findFood.foods[2].name);
          }
          // value={[el.food_uid, el.calories]}
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

  const handleEditMenu = () => {
    const body = {
      menu_category: menu,
      foods: [
        {
          food_uid: item1,
        },
        {
          food_uid: item2,
        },
        {
          food_uid: item3,
        },
      ],
    };

    const token = localStorage.getItem('token_admin');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    Swal.fire({
      title: 'Are you sure?',
      text: 'Please check again the required field',
      icon: 'question',
      confirmButtonText: 'Yes, edit it!',
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
          .put(
            `https://aaryadewangga.cloud.okteto.net/menus/${menu_id}`,
            body,
            config
          )
          .then(({ data }) => {
            setTimeout(() => {
              router.push('../admin');
            }, 1500);
            Swal.fire(
              'Edit Successfully',
              'Your menu has been edited',
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
            <FeatureTitle text="Edit Some Menu" />
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
                {/* <option value="" disabled selected hidden>
                  Select one
                </option> */}
                <option value={item1}>{name1 ? name1 : 'Choose one'}</option>
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
                {/* <option value="" disabled selected hidden>
                  Select one
                </option> */}
                <option value={item2}>{name2 ? name2 : 'Choose one'}</option>
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
                {/* <option value="" disabled selected hidden>
                  Select one
                </option> */}
                <option value={item3}>{name3 ? name3 : 'Choose one'}</option>
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

        <div className="w-64 mx-auto mt-10 mb-10 ">
          <button
            onClick={handleEditMenu}
            className="focus:outline-none text-white text-sm sm:text-base bg-lime-700 hover:bg-lime-500 rounded py-2 w-full transition duration-150 ease-in"
          >
            <span className="mr-2">Edit Menu</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
