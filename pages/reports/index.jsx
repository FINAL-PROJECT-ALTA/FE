import React, { useEffect } from "react";
import NavbarApp from "../../components/navbar";
import Navigation from "../../components/navigation";
import FeatureTitle from "../../components/featureTitle";
import { useRouter } from "next/router";

const eatenMeals = [
  { title: "title", cal: 319 },
  { title: "title", cal: 319 },
  { title: "title", cal: 319 },
];

export default function Reports() {
  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  useEffect(() => {
    if (!getToken) {
      router.push("/user");
    }
  }, [getToken]);

  return (
    <>
      <NavbarApp />
      <div className="px-5 my-10">
        <FeatureTitle text="Eaten Meals" />

        <div className="mt-5">
          <h2 className="font-semibold text-rose-500 text-center">Day 1</h2>
          <h5 className="font-semibold text-dark-green">Breakfast</h5>
          <div className="flex justify-between flex-wrap mt-3 mb-10">
            {eatenMeals.map((data, i) => (
              <div
                className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm"
                key={i}
              >
                <div className="shrink-0">
                  <img
                    src=""
                    alt=""
                    className="bg-red-400 h-28 object-cover rounded-t-md"
                  />
                </div>
                <div className="px-3 py-3 text-dark-green ">
                  <h3 className="text-lg font-medium">{data.title}</h3>
                  <p className="text-md font-mono">{data.cal} KCAL</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h5 className="font-semibold text-dark-green">Lunch</h5>
          <div className="flex justify-between flex-wrap mt-3 mb-10">
            {eatenMeals.map((data, i) => (
              <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
                <div className="shrink-0">
                  <img
                    src=""
                    alt=""
                    className="bg-red-400 h-28 object-cover rounded-t-md"
                  />
                </div>
                <div className="px-3 py-3 text-dark-green ">
                  <h3 className="text-lg font-medium">{data.title}</h3>
                  <p className="text-md font-mono">{data.cal} KCAL</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-5">
          <h5 className="font-semibold text-dark-green">Dinner</h5>
          <div className="flex justify-between flex-wrap mt-3 mb-10">
            {eatenMeals.map((data, i) => (
              <div className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm">
                <div className="shrink-0">
                  <img
                    src=""
                    alt=""
                    className="bg-red-400 h-28 object-cover rounded-t-md"
                  />
                </div>
                <div className="px-3 py-3 text-dark-green ">
                  <h3 className="text-lg font-medium">{data.title}</h3>
                  <p className="text-md font-mono">{data.cal} KCAL</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}
