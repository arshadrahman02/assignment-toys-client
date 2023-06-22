import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePage = () => {
  const toyData = useLoaderData();
  const {
    name,
    sellerName,
    sellerEmail,
    photo,
    price,
    rating,
    quantity,
    details,
    subCategory,
  } = toyData;
  return (
    <div className="card card-side bg-base-100 shadow-xl mx-auto mt-10">
      <figure>
        <img className="w-80" src={photo} alt="Movie" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Toy Name : {name}</h2>
        <p>
          <span className="font-bold">Seller Name</span> : {sellerName}
        </p>
        <p>
          <span className="font-bold">Seller Email </span>: {sellerEmail}
        </p>
        <p>
          {" "}
          <span className="font-bold">Price </span>: ${price}
        </p>
        <p>
          <span className="font-bold">Ratings</span> : {rating}stars
        </p>
        <p>
          <span className="font-bold">Available Quantities</span> : {quantity}
        </p>
        <p>
          <span className="font-bold">Detail DesCriptions</span> :{details}
        </p>
      </div>
    </div>
  );
};

export default SinglePage;
