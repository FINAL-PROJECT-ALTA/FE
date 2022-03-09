import NavbarApp from '../../../components/navbar_admin';
import FeatureTitle from '../../../components/featureTitle';
import { AiOutlinePlus } from 'react-icons/ai';
import Link from 'next/link';

function Category() {
  const data = {
    category: 'Fruits',
  };

  return (
    <div>
      <NavbarApp />
      <div className="flex mt-[70px] ml-10">
        <FeatureTitle text={data.category} />
        <Link href="./category/addFood">
          <button
            // onClick={}
            className="flex ml-[16rem] sm:ml-[24rem] md:ml-[24rem] lg:ml-[24rem] items-center justify-end focus:outline-none text-white text-sm sm:text-base bg-green-700 hover:bg-lime-500 rounded py-2 w-[7rem] sm:w-[8rem] md:w-[8rem] lg:w-[8rem]  transition duration-150 ease-in"
          >
            <AiOutlinePlus size={20} className="ml-2" />
            <span className="ml-1 mr-2">Add Fruits</span>
          </button>
        </Link>
      </div>

      <div className="flex justify-around flex-wrap mt-10 mb-10 space-x-0">
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md "
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap mt-10 mb-10">
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap mt-10 mb-10">
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
      </div>
      <div className="flex justify-around flex-wrap mt-10 mb-10">
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
        <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
          <div className="shrink-0">
            <img
              src=""
              alt=""
              className="bg-red-400 h-28 object-cover rounded-t-md"
            />
          </div>
          <div className="px-3 py-3 text-dark-green ">
            <h3 className="text-lg font-medium">Title</h3>
            <p className="text-md font-mono">319 KCAL</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category;
