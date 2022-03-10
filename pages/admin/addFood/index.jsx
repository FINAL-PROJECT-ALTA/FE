import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import NavAdmin from '../../../components/navigation_admin';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Swal from 'sweetalert2';

function AddFood() {
  const router = useRouter();

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

  const handleAddFood = () => {
    const body = {
      name: food,
      calories: calories,
      energy: energy,
      carbohidrate: carbohidrate,
      protein: protein,
      unit: unit,
      unitValue: unitValue,
      category: category,
    };

    // const token = localStorage.getItem('token');
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRoIjp0cnVlLCJleHAiOjE2NDY5NjcxNjEsInJvbGVzIjpmYWxzZSwidXNlcl91aWQiOiJIdnl5QnhxRXp6Y1k5UEEyWnd4OWphIn0.BI7EsbehxksIYrf2xn3-I2nviFSIFk-gR59stQ0QQGQ';
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
            // console.log(data.data.token);
            // localStorage.setItem('token', data.data.token);
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

  return (
    <div>
      <NavbarApp />
      <div className="mt-10">
        <center>
          <FeatureTitle text="Add Some Food" />
        </center>
        <section className="flex flex-col w-full h-full p-1 overflow-auto mt-5">
          <header className="flex flex-col items-center justify-center py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2">
            <p className="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500">
              <span>Drag and drop your files anywhere or</span>
            </p>
            {/* <input
              type="file"
              style={{ display: 'none' }}
              id="imgUpload"
              // ref={fileInputRef}
            /> */}
            <label>
              <button
                className="w-auto px-2 py-1 my-2 mr-2 text-blueGray-500 transition duration-500 ease-in-out transform border rounded-md hover:text-blueGray-600 text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-gray-100"
                onClick={'#imgUpload'}
              >
                Upload a file{' '}
              </button>
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
            onChange={(e) => setCalories(e.target.value)}
          >
            Calories
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
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
            onChange={(e) => setCarbohydrate(e.target.value)}
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
            onChange={(e) => setUnit(e.target.value)}
          >
            Unit
          </label>
          <input
            type="text"
            className="w-[18rem] sm:w-96 md:w-96 lg:w-96 py-2 border-b-2 border-gray-400 focus:border-green-400 
                      text-gray-600 placeholder-gray-400
                      outline-none "
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
            onChange={(e) => setValueUnit(e.target.value)}
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
            <option>Fruit</option>
            <option>Drink</option>
            <option>Junk Food</option>
            <option>Food</option>
            <option>Snack</option>
          </select>
        </div>
        <div className="flex w-96 mt-10 mb-10 ml-36">
          <button
            // onClick={validateSignUp}
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
