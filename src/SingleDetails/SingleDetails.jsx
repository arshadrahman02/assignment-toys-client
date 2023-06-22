import React from "react";
import { useLoaderData } from "react-router-dom";

const SingleDetails = () => {
  const details = useLoaderData();
  const { price, picture, rating } = details;
  return (
    <div>
      <div>
        <div className="hero h-96 bg-base-100">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://m.media-amazon.com/images/I/516rH-87AIL._AC_SX679_.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Name : Nissan GTR</h1>
              <p className="text-3xl font-bold">Rating : 4.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDetails;
