import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';
import FeatureTitle from '../../components/featureTitle';
import NavbarApp from '../../components/navbar';
import Navigation from '../../components/navigation';
import Link from 'next/link';

function RecommenPage() {
  const data = {
    calories_count: 0,
    caloris_mt: 2400,
    calories: 255,
    carbo: 50,
    fat: 10,
    protein: 20,
    sugar: 6,
  };
  return (
    <>
      <NavbarApp />
      <div className="px-10">
        <FeatureTitle />
        <div className="max-w-md mx-auto h-44 p-6 rounded-xl bg-dark-green">
          <div className="flex flex-row justify-between">
            <div className="basis-1/2">
              <h1 className="text-3xl md:text-4xl lg:text-4xl text-rose-500 font-mono">
                {data.calories_count}
              </h1>
              <p className="text-xs lg:text-lg text-white font-base">
                Caloris Count
              </p>
            </div>
            <div className="basis-1/2 text-right">
              <h3 className="text-3xl md:text-4xl lg:text-4xl text-rose-500 font-mono">
                {data.caloris_mt}
              </h3>
              <h5 className="text-xs lg:text-lg text-white font-base">
                Calories Maintenance
              </h5>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-1 my-2 text-center text-white">
            <span>
              <p className="font-mono text-lg text-light-green">
                {data.carbo}gr
              </p>
              <h2 className="font-medium text-lg">Carbo</h2>
            </span>
            <span>
              <p className="font-mono text-lg text-light-green">{data.fat}gr</p>
              <h2 className="font-medium text-lg">Fat</h2>
            </span>
            <span>
              <p className="font-mono text-lg text-light-green">
                {data.protein}gr
              </p>
              <h2 className="font-medium text-lg">Protein</h2>
            </span>
            <span>
              <p className="font-mono text-lg text-light-green">
                {data.sugar}gr
              </p>
              <h2 className="font-medium text-lg">Sugar</h2>
            </span>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex ">
            <FeatureTitle text="Program Goals" />
          </div>

          {/* Breakfast */}
          <div className="flex flex-col px-10 py-5 my-3 bg-yellow-300/70 max-w-lg mx-auto drop-shadow-lg rounded-xl">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                  Breakfast
                </h3>
                <div className="flex items-center text-gray-600">
                  <AiOutlineClockCircle className="mr-2" />
                  <span className="text-xs md:text-sm font-sans">
                    7.00 - 9.00 am
                  </span>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-lg md:text-xl font-mono ">
                  {data.calories}
                </h1>
                <h1 className="text-xs md:text-xl font-semibold">Calories</h1>
              </div>
            </div>
            <div className="flex justify-end ">
              <AiOutlinePlus size={40} className="text-rose-500" />
            </div>
          </div>
          {/* Lunch */}
          <div className="flex flex-col px-10 py-5 my-3 bg-light-green/80 max-w-lg mx-auto drop-shadow-lg rounded-xl">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                  Lunch
                </h3>
                <div className="flex items-center text-gray-600">
                  <AiOutlineClockCircle className="mr-2" />
                  <span className="text-xs md:text-sm font-sans">
                    12.00 - 1.00 pm
                  </span>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-lg md:text-xl font-mono ">
                  {data.calories}
                </h1>
                <h1 className="text-xs md:text-xl font-semibold">Calories</h1>
              </div>
            </div>
            <div className="flex justify-end ">
              <AiOutlinePlus size={40} className="text-rose-500" />
            </div>
          </div>
          {/* Dinner */}
          <div className="flex flex-col px-10 py-5 my-3 bg-midnight/50 max-w-lg mx-auto drop-shadow-lg rounded-xl">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                  Dinner
                </h3>
                <div className="flex items-center text-gray-600">
                  <AiOutlineClockCircle className="mr-2" />
                  <span className="text-xs md:text-sm font-sans">
                    05.00 - 8.00 pm
                  </span>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-lg md:text-xl font-mono ">
                  {data.calories}
                </h1>
                <h1 className="text-xs md:text-xl font-semibold">Calories</h1>
              </div>
            </div>
            <div className="flex justify-end ">
              <AiOutlinePlus size={40} className="text-rose-500" />
            </div>
          </div>
          {/* Snack */}
          <div className="flex flex-col px-10 py-5 my-3 bg-zinc-200/80 max-w-lg mx-auto drop-shadow-lg rounded-xl">
            <div className="flex justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold leading-8">
                  Snack
                </h3>
                <div className="flex items-center text-gray-600">
                  <AiOutlineClockCircle className="mr-2" />
                  <span className="text-xs md:text-sm font-sans">
                    4.00 - 4.30 pm
                  </span>
                </div>
              </div>
              <div className="text-right">
                <h1 className="text-lg md:text-xl font-mono ">
                  {data.calories}
                </h1>
                <h1 className="text-xs md:text-xl font-semibold">Calories</h1>
              </div>
            </div>
            <div className="flex justify-end ">
              <AiOutlinePlus size={40} className="text-rose-500" />
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </>
  );
}

export default RecommenPage;
