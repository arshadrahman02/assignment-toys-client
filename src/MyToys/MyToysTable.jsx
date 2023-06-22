import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
const MyToysTable = ({ toy, handleDelete, handleUpdate }) => {
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
  } = toy;
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
        <Link to={`/updateToys/${_id}`}>
          <button className="btn btn-success btn-xs">Update</button>
        </Link>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-error btn-xs"
        >
          Delete
        </button>
      </th>
    </tr>
  );
};

export default MyToysTable;
