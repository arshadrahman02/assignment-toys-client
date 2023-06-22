/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

import "./Category.css";

// import ShowCategory from "./ShowCategory";
import SingleRoute from "../SingleRoute/SingleRoute";
const Category = () => {
  const [activeTab, setActiveTab] = useState("first");
  const [single, setSingle] = useState([]);

  useEffect(() => {
    fetch(
      `https://assignment-num-11-server.vercel.app/singleRoute/${activeTab}`
    )
      .then((res) => res.json())
      .then((result) => setSingle(result));
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div>
      <h1 className="title text-3xl font-bold text-center mt-5 p-5">
        Sort By Category
      </h1>
      <div className="tab-container text-center mt-5">
        <div className="text-center w-100 mx-auto ">
          <div className="tabs flex justify-center items-center ">
            <div
              onClick={() => handleTabClick("first")}
              className={`tab  tab2 first ${
                activeTab == "first" ? " bg-secondary text-white  " : ""
              }`}
            >
              Sports Car
            </div>
            <div
              onClick={() => handleTabClick("second")}
              className={`tab  tab2 second ${
                activeTab == "second" ? " bg-secondary text-white" : ""
              }`}
            >
              Truck
            </div>
            <div
              onClick={() => handleTabClick("third")}
              className={`tab  tab2 third ${
                activeTab == "third" ? " bg-secondary text-white" : ""
              }`}
            >
              Mini Fire Truck
            </div>
          </div>
        </div>
      </div>
      <div className="jobs-container mt-5 grid lg:grid-cols-2 ">
        {single?.map((sing) => (
          <SingleRoute key={sing._id} sing={sing}></SingleRoute>
        ))}
      </div>
    </div>
  );
};

export default Category;
