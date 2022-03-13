import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import NavAdmin from '../../../components/navigation_admin';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Swal from 'sweetalert2';
import axios from 'axios';

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
  const [category, setCategory] = useState([
    'fruit',
    'drink',
    'junk Food',
    'food',
    'snack',
  ]);

  const handleAddFood = () => {
    const body = {
      name: food,
      calories: parseInt(calories),
      energy: parseInt(energy),
      carbohidrate: parseInt(carbohidrate),
      protein: parseInt(protein),
      unit: unit,
      unit_value: parseInt(unitValue),
      food_categories: category,
      // image: image
    };

    const token = localStorage.getItem('token');
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
        axios
          .post('https://aaryadewangga.cloud.okteto.net/foods', body, config)
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
            Name of Food
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
            onChange={(e) => setFood(e.target.value)}
          />
        </div>

        {/* calories */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            Calories
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
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
            Energy
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
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
            Carbohydrate
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
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
            Protein
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
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
            Unit
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
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
            Value of Unit
          </label>
          <input
            type="number"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
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
            Category of Food
          </label>
          <select
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>fruit</option>
            <option>drink</option>
            <option>junk food</option>
            <option>food</option>
            <option>snack</option>
          </select>
        </div>
        <div className="flex w-96 mt-10 mb-10 ml-36">
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
