import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useRouter } from 'next/router';
import FeatureTitle from '../../../components/featureTitle';
import NavbarApp from '../../../components/navbar_admin';
import Navigation from '../../../components/navigation_admin';

function AddFood() {
  const menu = 'lunch';
  return (
    <div>
      <NavbarApp />
      <div className="px-10 h-screen">
        <FeatureTitle />
        <div className="mt-10">
          <div className="flex ">
            <FeatureTitle text="List menu" />
            <button
              onClick={() => {
                router.push('../admin/addFood');
              }}
              className="flex ml-[13.5rem] sm:ml-[19.5rem] md:ml-[19.5rem] lg:ml-[19.5rem] items-center justify-end focus:outline-none text-white text-sm sm:text-base bg-green-700 hover:bg-lime-500 rounded py-2 w-[7rem] sm:w-[8rem] md:w-[8rem] lg:w-[8rem]  transition duration-150 ease-in"
            >
              <AiOutlinePlus size={20} className="ml-2" />
              <span className="ml-1 mr-2">Add menu</span>
            </button>
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
            </div>
            <div className="flex justify-end ">
              <AiOutlinePlus
                size={40}
                className="text-rose-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFood;
