import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarApp from "../../components/navbar";
import Navigation from "../../components/navigation";
import FeatureTitle from "../../components/featureTitle";
import axios from "axios";

export default function Goals() {
  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  useEffect(() => {
    if (!getToken) {
      router.push("/user");
    }
  }, [getToken]);

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [range, setRange] = useState();
  const [target, setTarget] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const body = {
      height,
      weight,
      age,
      range,
      target,
    };

    //   axios({
    //     method: "post",
    //     url: "https://aaryadewangga.cloud.okteto.net/users/goals",
    //     data: body,
    //     headers: {
    //       Authorization: `Bearer ${getToken}`,
    //     },
    //   })
    //     .then(({ data }) => {
    //       if (data) {
    //         console.log(data);
    //         router.push("/");
    //       }
    //     })
    //     .catch((err) => {
    //       console.log(err, "error");
    //     })
    //     .finally(() => {});
    // }

    return (
      <>
        <NavbarApp />
        <div className="px-10 my-10">
          <FeatureTitle text="Your Goals" />
          <div className="w-full my-3 p-6 rounded-md bg-light-green">
            <h5 className="font-semibold mb-5 text-md">
              Input Your Data for Calculation
            </h5>
            <form action="#" method="POST">
              <div className="flex flex-col justify-between">
                <div className="mb-4">
                  <label
                    htmlFor="height"
                    className="block text-sm font-bold text-mexican-pink"
                  >
                    Height (cm)
                  </label>
                  <input
                    type="number"
                    name="height"
                    id="height"
                    autoComplete="off"
                    required
                    placeholder="165"
                    className="mt-1 border focus:border-light-orange focus:outline-none focus:ring-1 focus:ring-light-orange block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setHeight(e.target.value);
                    }}
                    value={height}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="weight"
                    className="block text-sm font-bold text-mexican-pink"
                  >
                    Weight (kg)
                  </label>
                  <input
                    type="number"
                    name="weight"
                    id="weight"
                    autoComplete="off"
                    required
                    placeholder="62"
                    className="mt-1 border focus:border-light-orange focus:outline-none focus:ring-1 focus:ring-light-orange block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setWeight(e.target.value);
                    }}
                    value={weight}
                  />
                </div>
              </div>
              <div className="flex flex-col justify-between">
                <div className="mb-4">
                  <label
                    htmlFor="age"
                    className="block text-sm font-bold text-mexican-pink"
                  >
                    Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    autoComplete="off"
                    required
                    placeholder="24"
                    className="mt-1 border focus:border-light-orange focus:outline-none focus:ring-1 focus:ring-light-orange block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setAge(e.target.value);
                    }}
                    value={age}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="day"
                    className="block text-sm font-bold text-mexican-pink"
                  >
                    Range (day)
                  </label>
                  <input
                    type="number"
                    name="range"
                    id="range"
                    autoComplete="off"
                    required
                    placeholder="30"
                    className="mt-1 border focus:border-light-orange focus:outline-none focus:ring-1 focus:ring-light-orange block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                    onChange={(e) => {
                      setRange(e.target.value);
                    }}
                    value={range}
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  className="block text-sm font-bold text-mexican-pink mb-2"
                >
                  Target
                </label>
                <div>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio accent-mexican-pink"
                      name="target"
                      value="lose weight"
                      onChange={(e) => {
                        setTarget(e.target.value);
                      }}
                    />
                    <span className="ml-1">Lose Weight</span>
                  </label>
                  <label className="inline-flex items-center ml-5">
                    <input
                      type="radio"
                      className="form-radio accent-mexican-pink"
                      name="target"
                      value="gain weight"
                      onChange={(e) => {
                        setTarget(e.target.value);
                      }}
                    />
                    <span className="ml-1">Gain Weight</span>
                  </label>
                </div>
              </div>
              <div className="">
                <a>
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-mexican-pink hover:bg-secondary focus:ring-2 focus:ring-offset-2"
                  >
                    Add Goals
                  </button>
                </a>
              </div>
            </form>
          </div>
        </div>
        <Navigation />
      </>
    );
  }
}