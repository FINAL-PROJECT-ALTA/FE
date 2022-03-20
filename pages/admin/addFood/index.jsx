import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import NavAdmin from '../../../components/navigation_admin';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Swal from 'sweetalert2';
import axios from 'axios';
import ReactLoading from 'react-loading';

function AddFood() {
  const router = useRouter();

  const [food, setFood] = useState('');
  const [calories, setCalories] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [carbohidrate, setCarbohidrate] = useState(0);
  const [protein, setProtein] = useState(0);
  const [unit, setUnit] = useState('');
  const [unitValue, setUnitValue] = useState(0);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(false);

  const getToken =
    typeof window !== 'undefined' ? localStorage.getItem('token_admin') : null;
  useEffect(() => {
    if (!localStorage.getItem('token_admin')) {
      router.push('/user/login');
    }
  }, []);

  const handleAddFood = () => {
    const formData = new FormData();
    formData.append('name', food);
    formData.append('calories', parseInt(calories));
    formData.append('energy', parseInt(energy));
    formData.append('carbohidrate', parseInt(carbohidrate));
    formData.append('protein', parseInt(protein));
    formData.append('unit', unit);
    formData.append('unit_value', parseInt(unitValue));
    formData.append('food_categories', category);
    formData.append('image', image);

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
          .post(
            'https://aaryadewangga.cloud.okteto.net/foods',
            formData,
            config
          )
          .then(({ data }) => {
            setTimeout(() => {
              router.push('../admin');
            }, 1500);
            Swal.fire(
              'Added Successfully',
              'Your food has been added',
              'success'
            );
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
            });
          })
          .finally(() => {});
      } else if (result.isDismissed) {
        Swal.fire('Check again ?', 'We are waiting you inside', 'question');
      }
    });
  };

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
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
      <div className="mt-10">
        <center>
          <FeatureTitle text="Add Some Food" />
        </center>
        <section className="flex flex-col w-full h-full p-1 overflow-auto mt-5">
          <header className="flex flex-col items-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            {/* <p className="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500"> */}
            <img
              src={createObjectURL}
              width={255}
              height={170}
              alt="preview photo"
            />

            <label className="block">
              <input
                type="file"
                className="
                      block 
                      w-full 
                      text-sm 
                      text-slate-500
                      file:mr-4 
                      file:py-2 
                      file:px-4
                      file:rounded-full 
                      file:border-0
                      file:text-sm 
                      file:font-semibold
                      file:bg-violet-50 
                      file:text-violet-700
                      hover:file:bg-violet-100
                    "
                onChange={uploadToClient}
              />
            </label>
          </header>
        </section>

        {/* name food */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            <span className="float-left px-5">Name of Food</span>
          </label>
          <input
            type="text"
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setFood(e.target.value)}
          />
        </div>

        {/* calories */}
        <div className="flex items-center   mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600 "
          >
            <span className="float-left px-5">Calories </span>
          </label>
          <input
            type="text"
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setCalories(e.target.value)}
          />
        </div>

        {/* Energy */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            <span className="float-left px-5">Energy</span>
          </label>
          <input
            type="text"
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setEnergy(e.target.value)}
          />
        </div>

        {/* carbohydrate */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            <span className="float-left px-5">Carbohydrate</span>
          </label>
          <input
            type="text"
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setCarbohidrate(e.target.value)}
          />
        </div>

        {/* protein */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            <span className="float-left px-5">Protein</span>
          </label>
          <input
            type="text"
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setProtein(e.target.value)}
          />
        </div>

        {/* unit */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            <span className="float-left px-5">Unit</span>
          </label>
          <input
            type="text"
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setUnit(e.target.value)}
          />
        </div>

        {/* value unit */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            <span className="float-left px-5">Value of Unit</span>
          </label>
          <input
            type="number"
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setUnitValue(e.target.value)}
          />
        </div>

        {/* Category food */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
            onChange={(e) => setCategory(e.target.value)}
          >
            <span className="float-left px-5">Category </span>
          </label>
          <select
            className="w-[11rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="none" disabled selected hidden>
              Select one
            </option>
            <option value="fruit">fruit</option>
            <option value="drink">drink</option>
            <option value="junk food">junk food</option>
            <option value="food">food</option>
            <option value="snack">snack</option>
          </select>
        </div>
        <div className="w-80 mx-auto mt-10 mb-10">
          <button
            onClick={handleAddFood}
            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-lime-700 hover:bg-lime-500 rounded py-2 w-full transition duration-150 ease-in"
          >
            <span className="mr-2">Add Food Data</span>
          </button>
        </div>
      </div>
      <NavAdmin />
    </div>
  );
}

export default AddFood;
