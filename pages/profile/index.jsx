import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavbarApp from "../../components/navbar";
import Navigation from "../../components/navigation";
import FeatureTitle from "../../components/featureTitle";
import { useRouter } from "next/router";
import axios from "axios";
import ReactLoading from "react-loading";
import { HiPencil } from "react-icons/hi";
import { HiPlus } from "react-icons/hi";

export default function Profile() {
  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  useEffect(() => {
    if (!getToken) {
      router.push("/user");
    }
  }, [getToken]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [goal, setGoal] = useState([]);
  const [goalUid, setGoalUid] = useState("");
  const [goalStatus, setGoalStatus] = useState("");
  const [age, setAge] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [target, setTarget] = useState("");

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: "https://aaryadewangga.cloud.okteto.net/users",
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    })
      .then(({ data }) => {
        setName(data.data.name);
        setEmail(data.data.email);
        setGender(data.data.gender);
        setGoal(data.data.goal);
        setGoalUid(data.data.goal[data.data.goal.length - 1].goal_uid);
        setGoalStatus(data.data.goal[data.data.goal.length - 1].status);
        setAge(data.data.goal[data.data.goal.length - 1].age);
        setHeight(data.data.goal[data.data.goal.length - 1].height);
        setWeight(data.data.goal[data.data.goal.length - 1].weight);
        setTarget(data.data.goal[data.data.goal.length - 1].target);
      })
      .catch((err) => {
        console.log(err, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // funtion Logout
  function handleLogout() {
    if (getToken) {
      localStorage.removeItem("token");
      router.push("/");
    }
  }

  function handleFileChange() {
    console.log("file change");
  }

  if (loading) {
    return (
      <div className="flex items-center h-screen md:h-screen justify-center content-center">
        <br />
        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  return (
    <>
      <NavbarApp />
      <div className="px-10 my-10">
        <FeatureTitle text="My Profile" />
        <div className="w-full my-3 p-6 rounded-md bg-floor relative">
          {/* Logout Button */}
          <div className="absolute right-3 top-3">
            <button
              onClick={handleLogout}
              className="text-lg text-lime-700 font-semibold inline-flex items-center py-2 px-3 bg-light-green/80 hover:bg-lime-200 hover:text-dark-green rounded-md"
              id="btn-logout"
            >
              <p>Logout</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="flex items-center">
            <div className="flex flex-col">
              <img
                src="https://prometheus-x.org/decidim-packs/media/images/default-avatar-aaa9e55bac5d7159b847.svg"
                className="rounded-full border border-gray-100 shadow-sm"
                width={120}
                height={120}
              />
              <input
                type="file"
                name="profile-pic"
                id="profile-pic"
                accept="image/png, image/jpeg"
                className="text-xs"
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              <label
                htmlFor="profile-pic"
                className="mt-1 bg-lime-200 text-lime-700 text-sm text-center rounded-full p-1 cursor-pointer"
                id="lbl-change-image"
              >
                Change Image
              </label>
            </div>
            <div className="pl-5">
              <h3 className="text-2xl font-semibold capitalize">{name}</h3>
              <h5>{email}</h5>
              {age ? <h5>{age}th</h5> : ""}
              {gender ? <h5 className="capitalize">{gender}</h5> : ""}
            </div>
          </div>

          <div className="flex justify-center mt-5">
            <div>
              {height ? (
                <h3 className="font-semibold">
                  Height: <span className="font-normal">{height} cm</span>
                </h3>
              ) : (
                ""
              )}
              {weight ? (
                <h3 className="font-semibold">
                  Weight: <span className="font-normal">{weight} kg</span>
                </h3>
              ) : (
                ""
              )}
            </div>
            {target ? (
              <div className="ml-5">
                <h3 className="font-semibold">Current Target</h3>
                <h3 className="capitalize">{target}</h3>
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="text-center mt-5">
            {goal.length > 0 && goalStatus == "active" ? (
              <Link href={`/goals/${goalUid}`}>
                <button
                  className="bg-rose-500 hover:bg-rose-600 rounded-full px-4 py-3 text-white inline-flex items-center"
                  id="btn-change-goals"
                >
                  <HiPencil className="mr-2" />
                  Change Your Goals
                </button>
              </Link>
            ) : (
              <Link href="/goals">
                <button
                  className="bg-rose-500 hover:bg-rose-600 rounded-full px-4 py-3 text-white inline-flex items-center"
                  id="btn-add-goals"
                >
                  <HiPlus className="mr-2" />
                  Add Your Goals
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
      <Navigation />
    </>
  );
}
