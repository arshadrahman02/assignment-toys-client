import React, { useEffect, useState } from "react";
import AllToyTable from "./AllToyTable";
import { useLoaderData } from "react-router-dom";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className="overflow-x-auto w-full">
      <div className="my-5 mt-5 mx-96">
        <input
          className="border-4"
          type="search"
          placeholder="search here"
          name=""
          id=""
        />
        <button className="btn btn-error ">Search</button>
      </div>
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub Category</th>
            <th>Price</th>
            <th>Available Quantities</th>
            <th>View Details</th>
          </tr>
        </thead>
        <tbody>
          {allToys.map((allToy) => (
            <AllToyTable key={allToy._id} allToy={allToy}></AllToyTable>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
