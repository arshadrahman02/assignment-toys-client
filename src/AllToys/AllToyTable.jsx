import React from "react";
import PrivateRoute from "../Routes/PrivateRoute";
import { Link } from "react-router-dom";

const AllToyTable = ({ allToy }) => {
  const {
    _id,
    rating,
    name,
    sellerName,
    sellerEmail,
    photo,
    price,
    quantity,

    details,
    subCategory,
  } = allToy;
  return (
    <tr>
      <th></th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{sellerName}</div>
            <div className="text-sm opacity-50"></div>
          </div>
        </div>
      </td>
      <td>
        {name}
        <br />
      </td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td className="text-center">{quantity}</td>
      <th>
        <Link to={`/singlePage/${_id}`}>
          <button className="btn btn-secondary btn-xs">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToyTable;
