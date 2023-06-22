import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const SingleRoute = ({ sing, children }) => {
  const { user } = useContext(AuthContext);
  const handleViewDetails = () => {
    if (user?.status) {
      return <SingleRoute></SingleRoute>;
    }
    <Navigate to="/login" replace></Navigate>;
  };

  const { _id, price, rating, first_name, picture, status } = sing || {};
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto mt-10 my-10">
        <figure>
          <img className="w-80 h-44" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body ">
          <h2 className="card-title">{first_name}</h2>
          <p>$Price : {price}</p>
          <p>Rating : {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/singleDetails/${_id}`}>
              {" "}
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoute;
