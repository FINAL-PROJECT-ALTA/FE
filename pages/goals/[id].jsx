import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NavbarApp from "../../components/navbar";
import Navigation from "../../components/navigation";
import FeatureTitle from "../../components/featureTitle";
import axios from "axios";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";

export default function UpdateGoals() {
  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  useEffect(() => {
    if (!getToken) {
      router.push("/user/login");
    }
  }, [getToken]);

  const { id } = router.query;

  useEffect(() => {
    axios({
      method: "get",
      url: `https://aaryadewangga.cloud.okteto.net/users/goals/${id}`,
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    })
      .then(({ data }) => {
        setHeight(data.data.height);
        setWeight(data.data.weight);
        setAge(data.data.age);
        setRange(data.data.range_time);
        setTarget(data.data.target);
        setWeightTarget(data.data.weight_target);
        setDailyActive(data.data.daily_active);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => { });
  }, []);

  const [loading, setLoading] = useState(false);

  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [dailyActive, setDailyActive] = useState("");
  const [weightTarget, setWeightTarget] = useState();
  const [target, setTarget] = useState("");
  const [range, setRange] = useState();

  function handleSubmit(e) {
    setLoading(true);
    e.preventDefault();
    const body = {
      height: height,
      weight: weight,
      age: age,
      daily_active: dailyActive,
      weight_target: weightTarget,
      target: target,
      range_time: range,
    };

    axios({
      method: "put",
      url: `https://aaryadewangga.cloud.okteto.net/users/goals/${id}`,
      data: body,
      headers: {
        Authorization: `Bearer ${getToken}`,
        "Content-Type": "application/json",
      },
    })
      .then(({ data }) => {
        console.log(data.message);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        Swal.fire(
          "Update Successfully",
          "Your Goals has been Updated",
          "success"
        );
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message}`,
        });
      })
      .finally(() => {
        router.push("/profile");
      });
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center content-center">
        <br />
        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

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
                    setHeight(parseInt(e.target.value));
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
                    setWeight(parseInt(e.target.value));
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
                    setAge(parseInt(e.target.value));
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
                    setRange(parseInt(e.target.value));
                  }}
                  value={range}
                />
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="target"
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
                    id="target-lose"
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
                    id="target-gain"
                    value="gain weight"
                    onChange={(e) => {
                      setTarget(e.target.value);
                    }}
                  />
                  <span className="ml-1">Gain Weight</span>
                </label>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="weightTarget"
                className="block text-sm font-bold text-mexican-pink"
              >
                Target to Cut or Bulk (kg)
              </label>
              <input
                type="number"
                name="weightTarget"
                id="weightTarget"
                autoComplete="off"
                required
                placeholder="5"
                className="mt-1 border focus:border-light-orange focus:outline-none focus:ring-1 focus:ring-light-orange block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                onChange={(e) => {
                  setWeightTarget(parseInt(e.target.value));
                }}
                value={weightTarget}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="dailyActive"
                className="block text-sm font-bold text-mexican-pink mb-2"
              >
                Are you an Active Person ?
              </label>
              <select
                id="dailyActive"
                name="dailyActive"
                autoComplete="off"
                required
                className="mt-1 border focus:border-light-orange focus:outline-none focus:ring-1 focus:ring-light-orange block w-full shadow-sm sm:text-sm border-secondary px-3 py-2"
                onChange={(e) => {
                  setDailyActive(e.target.value);
                }}
                value={dailyActive}
              >
                <option value="not active">Not Active</option>
                <option value="little active">Little Active</option>
                <option value="quite active">Quite Active</option>
                <option value="active">Active</option>
                <option value="very active">Very Active</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                id="btn-submit-update-goals"
                onClick={handleSubmit}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-mexican-pink hover:bg-secondary focus:ring-2 focus:ring-offset-2"
              >
                Update Goals
              </button>
            </div>
          </form>
        </div>
      </div>
      <Navigation />
    </>
  );
}
