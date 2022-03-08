import NavAdmin from '../../components/navigation_admin';
import NavbarApp from '../../components/navbar';
import FeatureTitle from '../../components/featureTitle';
import Link from 'next/link';
function AdminPage() {
  const data = {
    name: 'Admin',
    fruit: 68,
    snack: 164,
    healthy: 120,
    junk: 110,
  };

  return (
    <div>
      <NavbarApp />
      <div className="px-10 my-10">
        {/* <FeatureTitle text="My Profile" /> */}
        <div className="w-full sm:w-full md:w-full lg:w-full h-[23rem] sm:h-[23rem] md:h-[23rem] lg:h-[23rem] my-3 p-6 rounded-md bg-floor">
          <div className="flex flex-col items-center">
            <div className="pb-3">
              <h3 className="text-2xl font-semibold text-[#013542]">
                Welcome, {data.name}
              </h3>
            </div>
            <img
              src="https://1.bp.blogspot.com/-PIo-ijjIyUo/X4Vy1VGXQRI/AAAAAAAAAUo/OnkVUaEtqwARAp205jhtyC-_FRvKBSPuQCLcBGAsYHQ/s348/images-17.jpeg"
              className="rounded-full border border-gray-100 shadow-sm"
              width={150}
            />

            <div className="mt-5 h-px bg-gray-400 w-80 sm:w-[30rem] md:w-[30rem] lg:w-[30rem]" />
            <p className="mt-2 text-[18px] text-[#013542] font-regular sm:text-2xl md:text-2xl lg:text-2xl">
              Report Items :
            </p>
          </div>

          <div className="flex justify-around mt-5">
            <div>
              <h3 className="font-semibold  text-[#013542]">
                Fruits: <span className="font-normal">{data.fruit} item</span>
              </h3>
              <h3 className="font-semibold  text-[#013542]">
                Snack: <span className="font-normal">{data.snack} item</span>
              </h3>
            </div>
            <div className="ml-5">
              <h3 className="font-semibold  text-[#013542]">
                Healthy Food:{' '}
                <span className="font-normal">{data.healthy} item</span>
              </h3>
              <h3 className="font-semibold  text-[#013542]">
                Junk Food: <span className="font-normal">{data.junk} item</span>
              </h3>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <FeatureTitle text="What's your plan today" />
          <div className="flex justify-between flex-wrap mt-3 ">
            <div className="w-40 sm:w-40 md:w-40 lg:w-40 h-[9rem] sm:h-[9rem] md:h-[9rem] lg:h-[9rem] rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0 bg-light-green/80 rounded-md drop-shadow-sm hover:bg-midnight/20">
                <img src="./images/Fruits.png" alt="" className=" mx-auto" />
                <h2 className="text-dark-green text-center font-medium mt-3">
                  Fuits
                </h2>
              </div>
            </div>
            <div className="w-40 h-[9rem] rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0 bg-zinc-200/80 rounded-md drop-shadow-sm hover:bg-midnight/20">
                <img
                  src="./images/Healthyfood.png"
                  alt=""
                  className=" mx-auto"
                />
                <h2 className="text-dark-green text-center font-medium mt-3">
                  Healthy Food
                </h2>
              </div>
            </div>
            <div className="w-40 h-[9rem] rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0 bg-light-orange/80 rounded-md drop-shadow-sm hover:bg-midnight/20">
                <img src="./images/Junkfood.png" alt="" className=" mx-auto" />
                <h2 className="text-dark-green text-center font-medium mt-3">
                  Junk Food
                </h2>
              </div>
            </div>
            <div className="w-40 h-[9rem] rounded-md bg-floor/20 drop-shadow-sm">
              <div className="shrink-0 bg-gray-300/80 rounded-md drop-shadow-sm hover:bg-midnight/20">
                <img src="./images/Snacks.png" alt="" className=" mx-auto" />
                <h2 className="text-dark-green text-center font-medium mt-3">
                  Snack
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <NavAdmin />
    </div>
  );
}

export default AdminPage;
