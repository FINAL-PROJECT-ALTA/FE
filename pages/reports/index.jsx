import React, { useState, useEffect } from "react";
import NavbarApp from "../../components/navbar";
import Navigation from "../../components/navigation";
import FeatureTitle from "../../components/featureTitle";
import { useRouter } from "next/router";
import axios from "axios";
import ReactLoading from "react-loading";

export default function Reports() {
  const getToken =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;
  const router = useRouter();

  useEffect(() => {
    if (!getToken) {
      router.push("/user/login");
    }
  }, [getToken]);

  const [loading, setLoading] = useState(false);
  const [dataHistory, setDataHistory] = useState([]);
  const [listFoods, setListFoods] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios({
      method: "get",
      url: `https://aaryadewangga.cloud.okteto.net/userhistories`,
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    })
      .then(({ data }) => {
        setDataHistory(data.data);
      })
      .catch((err) => {
        console.log(err, "error");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setListFoods(
      dataHistory.reduce((prev, curr) => prev.concat(curr.menu.foods), [])
    );
  }, [dataHistory]);

  if (loading) {
    return (
      <div className="flex items-center h-screen md:h-screen justify-center content-center">
        <ReactLoading type="cylon" color="#0000FF" height={100} width={50} />
      </div>
    );
  }

  return (
    <>
      <NavbarApp />
      <div className="w-full px-5 my-10">
        <FeatureTitle text="History Menu" />
        <div className="mt-5 h-screen">
          {dataHistory <= 0 ? (
            <div className="container  max-w-xl mx-auto my-3 p-3 rounded-md bg-light-green">
              <div className="text-xl xl:text-2xl  font-semibold text-dark-green text-center">
                <h1>Data Empty</h1>
                <p className="text-sm font-normal text-gray-700">
                  You have never made a menu
                </p>
              </div>
            </div>
          ) : (
            <div className="flex justify-between flex-wrap mt-3 mb-10">
              {listFoods.map((data, i) =>
                data ? (
                  <div
                    className="w-40 h-48 mb-3 rounded-md bg-floor/20 drop-shadow-sm cursor-pointer"
                    onClick={() => {
                      data.food_uid != ""
                        ? router.push(`/detail/${data.food_uid}`)
                        : "";
                    }}
                    key={i}
                  >
                    <div className="shrink-0">
                      <img
                        src={
                          data.image != ""
                            ? data.image
                            : `./images/logo-white.png`
                        }
                        alt=""
                        className="bg-red-400 h-28 object-cover rounded-t-md"
                      />
                    </div>
                    <div className="px-3 py-3 text-dark-green ">
                      <h3 className="text-lg font-medium capitalize">
                        {data.name}
                      </h3>
                      <p className="text-md font-mono">{data.calories} CAL</p>
                    </div>
                  </div>
                ) : (
                  ""
                )
              )}
            </div>
          )}
        </div>
      </div>
      <Navigation />
    </>
  );
}
