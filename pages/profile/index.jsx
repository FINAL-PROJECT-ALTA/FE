import Link from "next/link";
import NavbarApp from "../../components/navbar";
import Navigation from "../../components/navigation";
import FeatureTitle from "../../components/featureTitle";

export default function Profile() {
  const data = {
    name: "Olivia Sara",
    age: 27,
    weight: 68,
    height: 164,
    currentTarget: "Loss Weight",
  };
  return (
    <>
      <NavbarApp />
      <div className="px-10 my-10">
        <FeatureTitle text="My Profile" />
        <div className="w-full h-80 my-3 p-6 rounded-md bg-floor">
          <div className="flex items-center">
            <div className="w-30 h-30">
              <img
                src="https://randomuser.me/api/portraits/women/81.jpg"
                className="rounded-full border border-gray-100 shadow-sm"
              />
            </div>
            <div className="pl-5">
              <h3 className="text-2xl font-semibold">{data.name}</h3>
              <h5>{data.age}th</h5>
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <div>
              <h3 className="font-semibold">
                Weight: <span className="font-normal">{data.weight} kg</span>
              </h3>
              <h3 className="font-semibold">
                Height: <span className="font-normal">{data.height} cm</span>
              </h3>
            </div>
            <div className="ml-5">
              <h3 className="font-semibold">Current Target</h3>
              <h3>{data.currentTarget}</h3>
            </div>
          </div>
          <div className="text-center my-5">
            <Link href="/goals">
              <button className="bg-mexican-pink rounded-full px-4 py-3 text-white">
                Change Your Goals
              </button>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <FeatureTitle text="Your Meals" />
          <div className="flex justify-between flex-wrap mt-3 mb-10">
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
      </div>
      <Navigation />
    </>
  );
}
