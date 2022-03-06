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
      <div className="px-10 my-10">
        <FeatureTitle />
        <div className="w-full h-[205px] my-20 p-6 rounded-[20px] bg-[#013542]">
          <div className="">
            <div className="flex">
              <div className="flex flex-col sm:px-[5px] md:px-[10px] lg:px-[10px]">
                <h1 className="text-3xl md:text-4xl lg:text-4xl text-[#FA1D58] font-medium">
                  {data.calories_count}
                </h1>
                <p className="text-[14px] md:text-base lg:text-base text-white font-medium w-36">
                  Caloris Count
                </p>
              </div>

              <div className="flex flex-col">
                <h3 className="text-3xl md:text-4xl lg:text-4xl text-[#FA1D58] font-medium ml-[120px] sm:ml-60 md:ml-60 lg:ml-60">
                  {data.caloris_mt}
                </h3>
                <h5 className="text-[14px] md:text-base lg:text-base text-white font-medium ml-[51px] sm:ml-40 md:ml-40 lg:ml-40">
                  Calories Maintenance
                </h5>
              </div>
            </div>
          </div>
          <div className="flex mt-7 sm:ml-[50px] md:ml-[50px] lg:ml-[50px] text-white">
            <div>
              <h3 className="font-semibold">
                {data.carbo}
                gr
              </h3>
              <p>Carbo</p>
            </div>
            <div className="ml-10">
              <h3 className="font-semibold">{data.fat}gr</h3>
              <h3>fat</h3>
            </div>
            <div className="ml-10">
              <h3 className="font-semibold">{data.protein}gr</h3>
              <h3>Protein</h3>
            </div>
            <div className="ml-10">
              <h3 className="font-semibold">{data.sugar}gr</h3>
              <h3>Sugar</h3>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className="flex ">
            <FeatureTitle text="Program Goals" />
            <div className="flex">
              <button
                // onClick={}
                className="flex ml-40 sm:ml-[18rem] md:ml-[18rem] lg:ml-[18rem] items-center justify-end focus:outline-none text-white text-sm sm:text-base bg-cyan-900 hover:bg-cyan-700 rounded py-2 w-full transition duration-150 ease-in"
              >
                <AiOutlinePlus size={20} className="ml-2" />
                <span className="ml-1 mr-2">Add Menu</span>
              </button>
            </div>
          </div>
          {/* Breakfast */}
          <div className="flex flex-col flex-wrap mt-5 mb-5 bg-[#FAFE37] w-[400px] sm:w-[480px] md:w-[480px] lg:w-[480px] h-[180px] sm:h-[180px] md:h-[180px] lg:h-[180px] drop-shadow-lg rounded-[10px]">
            <div className="flex text-[#013542] pl-10 pt-10">
              <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold">
                Breakfast
              </h3>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold pl-[7rem] sm:pl-[9.3rem] md:pl-[9.3rem] lg:pl-[9.3rem]">
                  {data.calories}
                </h1>
                <h1 className="text-xl font-semibold pl-[4.5rem] sm:pl-[6.7rem] md:pl-[6.7rem] lg:pl-[6.7rem]">
                  Calories
                </h1>
              </div>
            </div>
            <div className="flex pl-8">
              <AiOutlineClockCircle
                size={17}
                className="ml-2 mt-[0.5px] text-[#8B8B8B]"
              />
              <span className="text-sm font-mono text-[#8B8B8B] ml-1 mr-2">
                7.00 - 9.00 am
              </span>
            </div>
            <div className="flex justify-end pr-8 sm:pr-6 md:pr-6 lg:pr-6">
              <AiOutlinePlus
                size={50}
                className="ml-2 mt-[0.5px] text-[#FA1D58]"
              />
            </div>
          </div>

          {/* Launch */}
          <div className="flex flex-col flex-wrap mt-5 mb-5 bg-[#E9F9B0] w-[400px] sm:w-[480px] md:w-[480px] lg:w-[480px] h-[180px] sm:h-[180px] md:h-[180px] lg:h-[180px] drop-shadow-lg rounded-[10px]">
            <div className="flex text-[#013542] pl-10 pt-10">
              <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold">
                Launch
              </h3>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold pl-[9rem] sm:pl-[12.3rem] md:pl-[12.3rem] lg:pl-[12.3rem]">
                  {data.calories}
                </h1>
                <h1 className="text-xl font-semibold pl-[6.3rem] sm:pl-[9.7rem] md:pl-[9.7rem] lg:pl-[9.7rem]">
                  Calories
                </h1>
              </div>
            </div>
            <div className="flex pl-8">
              <AiOutlineClockCircle
                size={17}
                className="ml-2 mt-[0.5px] text-[#8B8B8B]"
              />
              <span className="text-sm font-mono text-[#8B8B8B] ml-1 mr-2">
                12.00 - 1.00 pm
              </span>
            </div>
            <div className="flex justify-end pr-8 sm:pr-6 md:pr-6 lg:pr-6 ">
              <AiOutlinePlus
                size={50}
                className="ml-2 mt-[0.5px] text-[#FA1D58]"
              />
            </div>
          </div>

          {/* Dinner */}
          <div className="flex flex-col flex-wrap mt-5 mb-5 bg-[#FAE5A6] w-[400px] sm:w-[480px] md:w-[480px] lg:w-[480px] h-[180px] sm:h-[180px] md:h-[180px] lg:h-[180px] drop-shadow-lg rounded-[10px]">
            <div className="flex text-[#013542] pl-10 pt-10">
              <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold">
                Dinner
              </h3>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold pl-[10rem] sm:pl-[13.3rem] md:pl-[13.3rem] lg:pl-[13.3rem]">
                  {data.calories}
                </h1>
                <h1 className="text-xl font-semibold pl-[7.3rem] sm:pl-[10.7rem] md:pl-[10.7rem] lg:pl-[10.7rem]">
                  Calories
                </h1>
              </div>
            </div>
            <div className="flex pl-8">
              <AiOutlineClockCircle
                size={17}
                className="ml-2 mt-[0.5px] text-[#8B8B8B]"
              />
              <span className="text-sm font-mono text-[#8B8B8B] ml-1 mr-2">
                05.00 - 8.00 pm
              </span>
            </div>
            <div className="flex justify-end pr-8 sm:pr-6 md:pr-6 lg:pr-6 ">
              <AiOutlinePlus
                size={50}
                className="ml-2 mt-[0.5px] text-[#FA1D58]"
              />
            </div>
          </div>

          {/* Snack */}
          <div className="flex flex-col flex-wrap mt-5 mb-5 bg-[#F3F3F3] w-[400px] sm:w-[480px] md:w-[480px] lg:w-[480px] h-[180px] sm:h-[180px] md:h-[180px] lg:h-[180px] drop-shadow-lg rounded-[10px]">
            <div className="flex text-[#013542] pl-10 pt-10">
              <h3 className="text-4xl sm:text-5xl md:text-5xl lg:text-5xl font-semibold">
                Snack
              </h3>
              <div className="flex flex-col">
                <h1 className="text-xl font-semibold pl-[10.3rem] sm:pl-[13.5rem] md:pl-[13.5rem] lg:pl-[13.5rem]">
                  {data.calories}
                </h1>
                <h1 className="text-xl font-semibold pl-[7.7rem] sm:pl-[10.9rem] md:pl-[10.9rem] lg:pl-[10.9rem]">
                  Calories
                </h1>
              </div>
            </div>
            <div className="flex pl-8">
              <AiOutlineClockCircle
                size={17}
                className="ml-2 mt-[0.5px] text-[#8B8B8B]"
              />
              <span className="text-sm font-mono text-[#8B8B8B] ml-1 mr-2">
                4.00 - 4.30 pm
              </span>
            </div>
            <div className="flex justify-end pr-8 sm:pr-6 md:pr-6 lg:pr-6 ">
              <AiOutlinePlus
                size={50}
                className="ml-2 mt-[0.5px] text-[#FA1D58]"
              />
            </div>
          </div>
        </div>
      </div>

      <Navigation />
    </>
  );
}

export default RecommenPage;
