import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import NavAdmin from '../../../components/navigation_admin';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { data } from 'browserslist';

function AddFood() {
  const router = useRouter();
  // const { food_id } = router.query;
  const food_id = router.query.foodsId;
  const [data, setData] = useState([]);
  const [food, setFood] = useState('');
  const [calories, setCalories] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [carbohidrate, setCarbohidrate] = useState(0);
  const [protein, setProtein] = useState(0);
  const [unit, setUnit] = useState('');
  const [unitValue, setUnitValue] = useState(0);
  const [category, setCategory] = useState([
    'Fruit',
    'Drink',
    'Junk Food',
    'Food',
    'Snack',
  ]);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };
    axios
      .get(
        `https://aaryadewangga.cloud.okteto.net/foods?food_uid=${food_id}`,
        config
      )
      .then(({ data }) => {
        const findFood = data.data.find((el) => el.food_uid === food_id);

        if (findFood) {
          setFood(findFood.name);
          setCalories(findFood.calories);
          setEnergy(findFood.energy);
          setCarbohidrate(findFood.carbohidrate);
          setProtein(findFood.protein);
          setUnit(findFood.unit);
          setUnitValue(findFood.unit_value);
          setCategory(findFood.food_categories);
          // console.log(data.data);
        }

        setData(data.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }, []);

  function handleEdit() {
    const token = localStorage.getItem('token');
    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    const body = {
      name: food,
      calories: calories,
      energy: energy,
      carbohidrate: carbohidrate,
      protein: protein,
      unit: unit,
      unit_value: unitValue,
      food_categories: category,
      // image: image
    };
    axios
      .put(
        `https://aaryadewangga.cloud.okteto.net/foods/${food_id}`,
        body,
        config
      )
      .then(({ data }) => {
        console.log(data, 'data');
        // setData(data.data);
      })
      .catch((err) => {
        console.log(err, 'error');
      });
  }

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
          <FeatureTitle text="Edit Data Food" />
        </center>
        <section className="flex flex-col w-full h-full p-1 overflow-auto mt-5">
          <header className="flex flex-col items-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
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
            placeholder={food}
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
            placeholder={calories}
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
            placeholder={energy}
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
            placeholder={carbohidrate}
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
            placeholder={protein}
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
            placeholder={unit}
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
            placeholder={unitValue}
            onChange={(e) => setUnitValue(e.target.value)}
          />
        </div>

        {/* Category food */}
        <div className="flex items-center mb-5 mt-10">
          <label
            className="inline-block w-40 mr-6 text-right 
                                 font-bold text-gray-600"
          >
            Category of Food
          </label>
          <select
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none"
          >
            onChange={(e) => setCategory(e.target.value)}
            <option>{category}</option>)<option>Fruit</option>
            <option>Drink</option>
            <option>Junk Food</option>
            <option>Food</option>
            <option>Snack</option>
          </select>
        </div>
        <div className="flex w-96 mt-10 mb-10 ml-36">
          <button
            onClick={handleEdit}
            className="flex items-center justify-center focus:outline-none text-white text-sm sm:text-base bg-orange-700 hover:bg-orange-500 rounded py-2 w-full transition duration-150 ease-in"
          >
            <span className="mr-2">Edit Food Data</span>
          </button>
        </div>
      </div>
      <NavAdmin />
    </div>
  );
}

export default AddFood;
